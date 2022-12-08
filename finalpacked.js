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
    // Check whether any formats selected are 330/440
    // then show the respective can inputs if they are
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
        let total330CansPacked = 0;
        let total440CansPacked = 0;
        $(".fm:visible").each(function(i) {
            if ( $(this).find(".format-select:visible option:selected").text().includes("330") ) {
            total330CansPacked += $(this).find(".inputAmtCases").val() * $(this).find(".format-select").val();
            } else if ( $(this).find(".format-select:visible option:selected").text().includes("440") ) {
            total440CansPacked += $(this).find(".inputAmtCases").val() * $(this).find(".format-select").val();            
            }
        });
        let total330FridgePacksPacked = 0;
        let total440FridgePacksPacked = 0;
        $(".fm:visible").each(function(i) {
            if ( $(this).find(".format-select:visible option:selected").text().includes("330x6x4") ) {
            total330FridgePacksPacked += $(this).find(".inputAmtCases").val() * 6;
            } else if ( $(this).find(".format-select:visible option:selected").text().includes("440x6x4") ) {
            total440FridgePacksPacked += $(this).find(".inputAmtCases").val() * 6;
            }
        });

        //Wastage calculations
        let wastage330 = used330 - total330CansPacked;
        let wastage440 = used440 - total440CansPacked;
        let wastageFridgePacks330 = fridgePacksUsed330 - total330FridgePacksPacked;
        let wastageFridgePacks440 = fridgePacksUsed440 - total440FridgePacksPacked;
        let wastageLids = lidsUsed - (total330CansPacked + total440CansPacked);

        //Output variables
        const newResult = 'new-result'; 
        const $resultMessage = function(theMessage) {return $('<li>', {class: newResult, text: theMessage.toLocaleString() }); }
        const $headingMessage = function(theMessage) {return $('<div>', {class: newResult, text: theMessage }); }
        let $brandAndGyle = $resultMessage(`${$("#bg-input").val().toUpperCase()}`); 
        let $can330Message = $resultMessage(`330_${canType330} //: *${used330}*`);
        let $can440Message = $resultMessage(`440_${canType440} //: *${used440}*`);
        let $lidsMessage = $resultMessage(`${lidsColour} //: *${lidsUsed}*`);
        let $fridgePacks330Message = $resultMessage(`330_FP //: *${fridgePacksUsed330}*`);
        let $fridgePacks440Message = $resultMessage(`440_FP //: *${fridgePacksUsed440}*`);
        let $wastage330Message = $resultMessage(`330_W //: *${wastage330}*`);
        let $wastage440Message = $resultMessage(`440_W //: *${wastage440}*`);
        let $wastageLidsMessage = $resultMessage(`LIDS_W //: *${wastageLids}*`);
        let $wastageFridgePacks330Message = $resultMessage(`330_FP //: *${wastageFridgePacks330}*`);
        let $wastageFridgePacks440Message = $resultMessage(`440_FP //: *${wastageFridgePacks440}*`);


        //Display functions
        const  $display = function(x) {
            return $("#print-box").append(x)
        };
        const  $checkThenDisplay = function(input, message) {
            if (input >= 1) {
                return $("#print-box").append(message)
            }
        };
        const  $wastageDisplay = function(x) {
            return $("#wastage-box").append(x)   

        };
        const  $checkThenDisplayWastage = function(input, message) {
            if (input >= 1) {
                return $("#wastage-box").append(message)
            }
        };
// //------THE MAIN OUTPUT -------------------------------------
        
        $('.new-result').remove(); //Clears the result if you click calculate again
        $('.final-output').show(); //Shows the final output boxes

        $display($brandAndGyle);
        $display($headingMessage(`PACKED__`));
        $(".fm:visible").each(function(i) {
                    if ( $(this).find(".inputAmtCases:visible").val()  > 0 ) {
                        $display($resultMessage(`${$(this).find(".format-select:visible option:selected").text()} //: 
                            *${$(this).find(".inputAmtCases:visible").val()}*`))
                        };
                    });

        //Cans            
        $display($headingMessage(`CANS__`));
        if (used330 < 1 && used440 < 1) {
            $display($resultMessage(`You forgot to add cans!`));
        }  else if (used330 >= 1 && used440 < 1) {
            $display($can330Message);
        } else if (used330 < 1 && used440 >= 1) {
            $display($can440Message);
        } else if (used330 >= 1 && used440 >= 1) {
                $display($can330Message);
                $display($can440Message);
        };

        //Lids
        $display($headingMessage(`LIDS__`));
        if (lidsUsed >= 1) {
            $display($lidsMessage);  
        } else {
            $display($resultMessage(`You forgot to add lids!`));
        };

        if (fridgePacksUsed330 >= 1 || fridgePacksUsed440 >= 1) {
            $display($headingMessage(`FRIDGE PACKS__`));
        };

        //Fridge packs
        $checkThenDisplay(fridgePacksUsed330, $fridgePacks330Message);
        $checkThenDisplay(fridgePacksUsed440, $fridgePacks440Message);
        
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

        //Wastage
        $wastageDisplay($headingMessage(`WASTAGE__`));
        $checkThenDisplayWastage(used330, $wastage330Message);
        $checkThenDisplayWastage(used440, $wastage440Message);
        $checkThenDisplayWastage(lidsUsed, $wastageLidsMessage);
        $checkThenDisplayWastage(fridgePacksUsed330, $wastageFridgePacks330Message);
        $checkThenDisplayWastage(fridgePacksUsed440, $wastageFridgePacks440Message);

        //Wastage Warning
        if (wastageLids >= 1200 || used330 >= 1 && wastage330 >= 550 || used440 >= 1 && wastage440 >= 550) {
            $wastageDisplay($resultMessage(`This wastage looks too high. Maybe check your inputs?`));
        };
        if (wastageLids <= -1 || used330 >= 1 && wastage330 <= -1 || used440 >= 1 && wastage440 <= -1) {
            $wastageDisplay($resultMessage(`There is negative wastage, or you've not added Cans/Lids. Maybe check your inputs?`));
        };

    }); //End of calculate function 
 });
        
