/*eslint-env es6*/

$(document).ready(function(){ 
console.log("Welcome to TheMonkTool Console. This is where I debug!")
console.log("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _")

// -- \\\\\\\\\\\\\\\\\\\\\ FINAL PACKED \\\\\\\\\\\\\\\\\\\\\\\   -- \\

    //jQuery .each loop, triggered by "change" of no-of-formats - showing apt no. of boxes 
    $("#no-of-formats").on("change", function() {
        $(".fm").each(function(index) {
            $(this).toggle(Number($("#no-of-formats").val()) >= index + 1);
        });    
    });    
    // Check whether any formats selected are 330/440 or 6x4
    // then show the respective inputs if they are
    $(".format-select, #no-of-formats").on("change", function() {
        $("#selected-330").toggle($(".format-select:visible option:selected:contains(330)").length > 0);
        $("#selected-440").toggle($(".format-select:visible option:selected:contains(440)").length > 0);
        $("#fridge-pack-330").toggle($(".format-select:visible option:selected:contains(330x6x4)").length > 0);
        $("#fridge-pack-440").toggle($(".format-select:visible option:selected:contains(440x6x4)").length > 0);
    });

    //Calculate function 
    $("#calc-button").on("click", function( ) { 
        console.log('CALCULATING...')
   
        //Input variables
        let lidsUsed = Number( $("#input-lids").val() * 625 );
        let used330 = Number( $("#input-330").val() * 351 );
        let used440 = Number( $("#input-440").val() * 351 );
        let lidsColour = $("#input-lids-colour").val().toUpperCase();
        let canType330 = $("#input-330-can-type").val().toUpperCase();
        let canType440 = $("#input-440-can-type").val().toUpperCase();
        let fridgePacksUsed330 = Number( $("#fp-330").val() * $("#fp-330-per-box").val() );
        let fridgePacksUsed440 = Number( $("#fp-440").val() * $("#fp-440-per-box").val() );
        
        //Wastage variables
        //Total cans is calculated by multiplying the number of cases by number of cans per case (12 or 24)
        //Total fridge packs is calculated by multiplying the number of (6 by 4) cases by number of packs per case (6)
        let total330CansPacked = 0;
        let total440CansPacked = 0;
        let total330FridgePacksPacked = 0;
        let total440FridgePacksPacked = 0;
         
        $(".fm:visible").each(function(i) {
            let $select = $(this).find('.format-select');
            let $option = $select.find('option:selected');
            let text = $option.text();
            let val = $select.val();
            let cases = $(this).find(".inputAmtCases").val();
            let total = cases * val;
        
            if (text.includes("330")) {
                total330CansPacked += total;
            } else if (text.includes("440")) {
                total440CansPacked += total;
            };
            
            if (text.includes("330x6x4")) {
                total330FridgePacksPacked += cases * 6;
            } else if (text.includes("440x6x4")) {
                total440FridgePacksPacked += cases * 6;
            };

        });

        //Wastage calculations
        let wastage330 = used330 - total330CansPacked;
        let wastage440 = used440 - total440CansPacked;
        let wastageFridgePacks330 = fridgePacksUsed330 - total330FridgePacksPacked;
        let wastageFridgePacks440 = fridgePacksUsed440 - total440FridgePacksPacked;
        let wastageLids = lidsUsed - (total330CansPacked + total440CansPacked);

        //Output variables
        const newResult = 'new-result'; 
        function $resultMessage(material, amtUsed, prepend = '') {
            return $('<li>', { class: newResult, text: `${prepend}${material} //: *${amtUsed.toLocaleString()}*` });
        }
        function $headingMessage(theMessage) {
            return $('<div>', { class: newResult, text: theMessage });
        }
        let $brandAndGyle = $headingMessage($("#bg-input").val().toUpperCase()); 
        let $can330Message = $resultMessage(canType330, used330, '330_');
        let $can440Message = $resultMessage(canType440, used440, '440_');
        let $lidsMessage = $resultMessage(lidsColour, lidsUsed);
        let $fridgePacks330Message = $resultMessage('FP',fridgePacksUsed330, '330_');
        let $fridgePacks440Message = $resultMessage('FP',fridgePacksUsed440, '440_');
        let $wastage330Message = $resultMessage('CAN',wastage330, '330_');
        let $wastage440Message = $resultMessage('CAN',wastage440, '440_' );
        let $wastageLidsMessage = $resultMessage('LIDS',wastageLids);
        let $wastageFridgePacks330Message = $resultMessage('FP', wastageFridgePacks330, '330_');
        let $wastageFridgePacks440Message = $resultMessage('FP', wastageFridgePacks440, '440_');

        //Display functions
        const  $display = (x) => $("#print-box").append(x);
        function $checkThenDisplay(input, message) {
            if (input > 0) {
                return $("#print-box").append(message);
            }
        }
        const  $wastageDisplay = (x) => $("#wastage-box").append(x);
        function $checkThenDisplayWastage(input, message) {
            if (input > 0) {
                return $("#wastage-box").append(message);
            }
        }
// //------THE MAIN OUTPUT -------------------------------------
        
        $('.new-result').remove(); //Clears the result if you click calculate again
        $('.final-output').show(); //Shows the final output boxes

        $display($brandAndGyle);
        $display($headingMessage('PACKED__'));
        $(".fm:visible").each(function(i) {
            let $select = $(this).find('.format-select');
            let $option = $select.find('option:selected');
            let text = $option.text();
            let cases = $(this).find(".inputAmtCases").val();

            if ( cases  > 0 ) {
                $display($resultMessage(text, cases))
                };
            });

        //Cans            
        $display($headingMessage('CANS__'));
        if (used330 < 1 && used440 < 1) {
            $display($headingMessage('You forgot to add cans!'));
        }  else if (used330 > 0 && used440 < 1) {
            $display($can330Message);
        } else if (used330 < 1 && used440 > 0) {
            $display($can440Message);
        } else if (used330 > 0 && used440 > 0) {
                $display($can330Message);
                $display($can440Message);
        };

        //Lids
        $display($headingMessage('LIDS__'));
        if (lidsUsed > 1) {
            $display($lidsMessage);  
        } else {
            $display($headingMessage('You forgot to add lids!'));
        };

        if (fridgePacksUsed330 > 1 || fridgePacksUsed440 > 1) {
            $display($headingMessage('FRIDGE PACKS__'));
        };

        //Fridge packs
        $checkThenDisplay(fridgePacksUsed330, $fridgePacks330Message);
        $checkThenDisplay(fridgePacksUsed440, $fridgePacks440Message);
        
        //Wastage
        $wastageDisplay($headingMessage('WASTAGE__'));
        $checkThenDisplayWastage(used330, $wastage330Message);
        $checkThenDisplayWastage(used440, $wastage440Message);
        $checkThenDisplayWastage(lidsUsed, $wastageLidsMessage);
        $checkThenDisplayWastage(fridgePacksUsed330, $wastageFridgePacks330Message);
        $checkThenDisplayWastage(fridgePacksUsed440, $wastageFridgePacks440Message);

        //Wastage Warning
        if (wastageLids > 1200 || used330 > 0 && wastage330 > 550 || used440 > 0 && wastage440 > 550) {
            $wastageDisplay($headingMessage('This wastage looks too high. Maybe check your inputs?'));
        };
        if (wastageLids < 0 || used330 > 0 && wastage330 < 0 || used440 > 0 && wastage440 < 0) {
            $wastageDisplay($headingMessage("There is negative wastage, or you've not added Cans/Lids. Maybe check your inputs?"));
        };

    }); //End of calculate function 

      //Copy to clipboard
      $("#copy-button").show();
      $("#copy-button").on("click", function() {
          console.log($("#print-box").text())
          navigator.clipboard.writeText($("#print-box").text());
          $("#copy-button").children().text("COPIED!");
          setTimeout(() => {
              $("#copy-button").children()
              .text("COPY")
          }, 1000);
      });
      
 });
        
