/*eslint-env es6*/

$(document).ready(function(){ 
console.log("Welcome to TheMonkTool Console. This is where I debug!")
console.log("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _")
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
    // Check whether any formats selected are 330/440 (below or above value of 4 respectively)
    // then show the respective can inputs if they are
    $(".format-select").on("change", function() {
        let any330 = $(".format-select").filter(function(){
            return $(".format-select").val() <= 3 }).length > 0;
        let any440 = $(".format-select").filter(function(){
            return $(".format-select").val() >= 5 }).length > 0;
        $("#selected-330").toggle(any330);
        $("#selected-440").toggle(any440);
    });

    
//--
   $("#calc-button").on("click", function( ) { 
        //Case Formats Packed, the number of different formats that were packed in a packaging run.
        const CFP = [
            $("#format1").val(), 
            $("#format2").val(), 
            $("#format3").val(),
            $("#format4").val(),
            $("#format5").val(),
            $("#format6").val()
        ];
        //Option chosen by user for each of the formats packed (CFP).    
        const formatTypes = [
            [`330__12 //:`,12],
            [`330__24 //:`,24],
            [`330_6*4 //:`,24],
            [`440__12 //:`,12],
            [`440__24 //:`,24],
            [`440_6*4 //:`,24],
            [``, 0]
        ];
        
        //This function sets the user's input format type, to whichever they have chosen.    
        function getCaseFormat(n){
            switch (Number(n)) {
                case 1:
                    return formatTypes[0][0];              
                break;
                case 2:
                    return formatTypes[1][0];               
                break;
                case 3:
                    return formatTypes[2][0];               
                break;
                case 5:
                    return formatTypes[3][0];         
                break;
                case 6:
                    return formatTypes[4][0];
                break;
                case 7:
                    return formatTypes[5][0];        
                break;
            default:
                    return formatTypes[6][0];        
                break;
        };
            }
        
        //Running each format through the function     
        let in1CaseFormat = getCaseFormat(CFP[0]);
        let in2CaseFormat = getCaseFormat(CFP[1]);
        let in3CaseFormat = getCaseFormat(CFP[2]);
        let in4CaseFormat = getCaseFormat(CFP[3]);
        let in5CaseFormat = getCaseFormat(CFP[4]);
        let in6CaseFormat = getCaseFormat(CFP[5]);
        
        let in1 = Number($("#inputAmtCases1").val());
        let in2 = Number($("#inputAmtCases2").val());
        let in3 = Number($("#inputAmtCases3").val());
        let in4 = Number($("#inputAmtCases4").val());
        let in5 = Number($("#inputAmtCases5").val());
        let in6 = Number($("#inputAmtCases6").val());
    //--
        let inputLids = $("#input-lids").val()
        let input330 = $("#input-330").val()
        let input440 = $("#input-440").val()
    //--
        let lidsUsed = Number( inputLids * 625 ).toLocaleString();
        let used330 = Number( input330 * 351 ).toLocaleString();
        let used440 = Number( input440 * 351 ).toLocaleString();
    //--
        let lidsColour = $("#input-lids-colour").val().toUpperCase();
        let canType330 = $("#input-330-can-type").val().toUpperCase();
        let canType440 = $("#input-440-can-type").val().toUpperCase();
    //-- Brand & Gyle for display on the MAIN OUTPUT
            
//------THE MAIN OUTPUT -------------------------------------



        $(".nR").remove() /* Clears the slate */
        $("#results").append(`<div class="nR">`); /*--Results Div Open--*/
        
/*GYLE*/$(".nR").append(`<p>`+ $("#bg-input").val().toUpperCase() + `</p>`);  
        
/*PAKD*/$(".nR").append(`PACKED__<br>`);

        const appendIfPacked = (amount, x) => {
            if (amount > 0) {return $(".nR").append(`${x} *${amount.toLocaleString()}* <br>`); }
        }; 

        appendIfPacked(in1,in1CaseFormat);
        appendIfPacked(in2,in2CaseFormat);
        appendIfPacked(in3,in3CaseFormat);
        appendIfPacked(in4,in4CaseFormat);
        appendIfPacked(in5,in5CaseFormat);
        appendIfPacked(in6,in6CaseFormat);
    
/*CANS*/$(".nR").append(`<br>CANS__<br>`);   
        if (input330 > 0 ) {$(".nR").append(`330_${canType330} //: *${used330}*<br>`)};
        if (input440 > 0 ) {$(".nR").append(`440_${canType440} //: *${used440}*<br>`)}; 
        if (input330 < 1 && input440 < 1) {$(".nR").append(`You forgot to add cans!<br>`)};   
/*LIDS*/$(".nR").append(`<br>LIDS__<br>`);    
        if (inputLids > 0) {$(".nR").append(`${lidsColour} //: *${lidsUsed}*`)};
        if (inputLids < 1) {$(".nR").append(`You forgot to add lids!<br>`)};    
        $("#results").append(`</div>`); /*--Results Div Close--*/
    
    
    }); //End of calculate function 
});
