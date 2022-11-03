/*eslint-env es6*/

$(document).ready(function(){ 

   $("#no-of-formats").on("change", function() { 
    switch (Number($("#no-of-formats").val())) {
        case 6:
            $("#fm1, #fm2, #fm3, #fm4, #fm5, #fm6").show();
            break;
        case 5: 
            $("#fm1, #fm2, #fm3, #fm4, #fm5").show();
            $("#fm6").hide();
            break;
        case 4:
            $("#fm1, #fm2, #fm3, #fm4").show();
            $("#fm5, #fm6").hide();
            break;
        case 3:
            $("#fm1, #fm2, #fm3").show();
            $("#fm4, #fm5, #fm6").hide();
            break;
        case 2:
            $("#fm1, #fm2").show();
            $("#fm3, #fm4, #fm5, #fm6").hide();
            break;
        case 1:  
            $("#fm1").show();
            $("#fm2, #fm3, #fm4, #fm5, #fm6").hide();
            break;
    }
   }); 
//--
    $("#calc-button").on("click", function() {
    
//-The Numbers --         
    function getCaseFormat(n) {
        
        switch (Number(n)) {
            case 1:
                return `330__12 //:`;              
            break;
            case 2:
                return `330__24 //:`;               
            break;
            case 3:
                return `330_6*4 //:`;               
            break;
            case 4:
                return `440__12 //:`;         
            break;
            case 5:
                return `440__24 //:`;
            break;
            case 6:
                return `440_6*4 //:`;        
            break;
        }
        
    };
        
    let in1CaseFormat = getCaseFormat($("#format1").val());
    let in2CaseFormat = getCaseFormat($("#format2").val());
    let in3CaseFormat = getCaseFormat($("#format3").val());
    let in4CaseFormat = getCaseFormat($("#format4").val());
    let in5CaseFormat = getCaseFormat($("#format5").val());
    let in6CaseFormat = getCaseFormat($("#format6").val());
        
//-- THIS BIT DOESNT WORK

    
    function getMultBy(n) {
    console.log(`One Thru Six // /${n}/ //` + typeof n )
       return n === 1 || 4 ? 12 : 24; 
    }
        
        console.log(getMultBy(1));
    let in1MultBy = getMultBy($("#format1").val());
        
        
//-- THIS BIT DOESNT WORK ^^^^^^^^^^^^^     
let in1 = Number($("#inputAmtCases1").val() ).toLocaleString();
let in2 = Number($("#inputAmtCases2").val() ).toLocaleString();
let in3 = Number($("#inputAmtCases3").val() ).toLocaleString();
let in4 = Number($("#inputAmtCases4").val() ).toLocaleString();
let in5 = Number($("#inputAmtCases5").val() ).toLocaleString();
let in6 = Number($("#inputAmtCases6").val() ).toLocaleString();
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
const bgInput = $("#bg-input").val().toUpperCase();
        
//------THE MAIN OUTPUT -------------------------------------

        $(".nR").remove() /* Clears the slate */
        $("#results").append(`<div class="nR">`); /*--Results Div Open--*/
        
/*GYLE*/$(".nR").append(`<p>${bgInput}</p>`); 
        
/*PAKD*/$(".nR").append(`PACKED__<br>`); 
        if ( in1 > .1 ) {$(".nR").append(`${in1CaseFormat} *${in1}* <br>`); }
        if ( in2 > .1 ) {$(".nR").append(`${in2CaseFormat} *${in2}* <br>`); }
        if ( in3 > .1 ) {$(".nR").append(`${in3CaseFormat} *${in3}* <br>`); }
        if ( in4 > .1 ) {$(".nR").append(`${in4CaseFormat} *${in4}* <br>`); }
        if ( in5 > .1 ) {$(".nR").append(`${in5CaseFormat} *${in5}* <br>`); }
        if ( in6 > .1 ) {$(".nR").append(`${in6CaseFormat} *${in6}* <br>`); }
    
/*CANS*/$(".nR").append(`<br>CANS__<br>`);   
        if (input330 >.1) {$(".nR").append(`330_${canType330} //: *${used330}*<br>`)};
        if (input440 >.1) {$(".nR").append(`440_${canType440} //: *${used440}*<br>`)}; 
        if (input330 <.1 && input440 <1) {$(".nR").append(`You forgot to add cans!<br>`)};   
/*LIDS*/$(".nR").append(`<br>LIDS__<br>`);    
        if (inputLids >.1) {$(".nR").append(`${lidsColour} //: *${lidsUsed}*`)};
        if (inputLids <.1) {$(".nR").append(`You forgot to add lids!<br>`)};    
        $("#results").append(`</div>`); /*--Results Div Close--*/
    
    
    }); //End of calculate function 
});
