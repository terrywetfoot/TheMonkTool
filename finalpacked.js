/*eslint-env es6*/

$(document).ready(function(){ 
console.log("Welcome to TheMonkTool Console. This is where I debug!")
console.log("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _")
//TO DO
    //ADD WASTAGE 
    //ADD BOX USAGE FOR 6x4

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
    });

    //Calculate function 
    $("#calc-button").on("click", function( ) { 

        let lidsUsed = Number( $("#input-lids").val() * 625 ).toLocaleString();
        let used330 = Number( $("#input-330").val() * 351 ).toLocaleString();
        let used440 = Number( $("#input-440").val() * 351 ).toLocaleString();
        let lidsColour = $("#input-lids-colour").val().toUpperCase();
        let canType330 = $("#input-330-can-type").val().toUpperCase();
        let canType440 = $("#input-440-can-type").val().toUpperCase();

        let printFormat = $(".format-select:visible option:selected").map(function() {
            return $(this).text()
            });
        let printAmount = $(".inputAmtCases:visible").map(function() {
            return $(this).val().toLocaleString() 
            });

        //TO DO: (For working out wastage)
        // let total330CansPacked = (each 330 format 'amount' packed * its 'value' then summed) ;
        // let total440CansPacked = (each 440 format 'amount' packed * its 'value' then summed) ;

//------THE MAIN OUTPUT -------------------------------------
     
        $("#new-result").remove() /* Clears the slate */
        $("#results").append(`<div id="new-result">
            <p> ${$("#bg-input").val().toUpperCase()} </p>
            PACKED__<br>`);

        //Packed__
        $(".fm:visible").each(function(i) {
            if ( printAmount[i] > 0 ) {
                return $("#new-result").append( `${printFormat[i]} //: *${printAmount[i]}*<br>` )
                };
            });

        //Cans__
        $("#new-result").append(`<br>CANS__<br>`);   
        if ( $("#input-330").val() > 0 ) {
            $("#new-result").append(`330_${canType330} //: *${used330}*<br>`)
        };
        if ( $("#input-440").val() > 0 ) {
            $("#new-result").append(`440_${canType440} //: *${used440}*<br>`)
        }; 
        if ( used330 < 1 && used440 < 1 ) {
            $("#new-result").append(`You forgot to add cans!<br>`)
        };   

        //Lids__
        $("#new-result").append(`<br>LIDS__<br>`);    
        if ( $("#input-lids").val()  > 0 ) {
            $("#new-result").append(`${lidsColour} //: *${lidsUsed}*`)
        } else {
            $("#new-result").append(`You forgot to add lids!<br>`)
        };    

        $("#results").append(`</p></div>`); /*--Results Div Close--*/
    
    
    }); //End of calculate function 
 });
