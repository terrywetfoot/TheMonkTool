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
        console.log("You Clicked Calculate!")
    
//-The Numbers --    
//function workerBot (inputAmt, formNo)  //      
let in1 = Number($("#inputAmtCases1").val() ).toLocaleString();    
let in1MultBy = 0;         
        if ( Number($("#format1").val()) === 1 || 4 ) {in1MultBy = 12;} else {in1MultBy = 24;};
let in1CaseFormat = '';
        
        switch ( Number($("#format1").val()) ) {
            case 1:
                in1CaseFormat = `330__12 //:`;              
            break;
            case 2:
                in1CaseFormat = `330__24 //:`;               
            break;
            case 3:
                in1CaseFormat = `330_6*4 //:`;               
            break;
            case 4:
                in1CaseFormat = `440__12 //:`;         
            break;
            case 5:
                in1CaseFormat = `440__24 //:`;
            break;
            case 6:
                in1CaseFormat = `440_6*4 //:`;        
            break;
        }
        
let in2 = Number($("#inputAmtCases2").val() ).toLocaleString();    
let in2MultBy = 0;         
        if ( Number($("#format2").val()) === 1 || 4 ) {in1MultBy = 12;} else {in2MultBy = 24;};
let in2CaseFormat = '';
        
        switch ( Number($("#format2").val()) ) {
            case 1:
                in2CaseFormat = `330__12 //:`;              
            break;
            case 2:
                in2CaseFormat = `330__24 //:`;               
            break;
            case 3:
                in2CaseFormat = `330_6*4 //:`;               
            break;
            case 4:
                in2CaseFormat = `440__12 //:`;         
            break;
            case 5:
                in2CaseFormat = `440__24 //:`;
            break;
            case 6:
                in2CaseFormat = `440_6*4 //:`;        
            break;
        }
                
let in3 = Number($("#inputAmtCases3").val() ).toLocaleString();    
let in3MultBy = 0;         
        if ( Number($("#format3").val()) === 1 || 4 ) {in1MultBy = 12;} else {in3MultBy = 24;};
let in3CaseFormat = '';
        
        switch ( Number($("#format3").val()) ) {
            case 1:
                in3CaseFormat = `330__12 //:`;              
            break;
            case 2:
                in3CaseFormat = `330__24 //:`;               
            break;
            case 3:
                in3CaseFormat = `330_6*4 //:`;               
            break;
            case 4:
                in3CaseFormat = `440__12 //:`;         
            break;
            case 5:
                in3CaseFormat = `440__24 //:`;
            break;
            case 6:
                in3CaseFormat = `440_6*4 //:`;        
            break;
        }
                        
let in4 = Number($("#inputAmtCases4").val() ).toLocaleString();    
let in4MultBy = 0;         
        if ( Number($("#format4").val()) === 1 || 4 ) {in1MultBy = 12;} else {in4MultBy = 24;};
let in4CaseFormat = '';
        
        switch ( Number($("#format4").val()) ) {
            case 1:
                in4CaseFormat = `330__12 //:`;              
            break;
            case 2:
                in4CaseFormat = `330__24 //:`;               
            break;
            case 3:
                in4CaseFormat = `330_6*4 //:`;               
            break;
            case 4:
                in4CaseFormat = `440__12 //:`;         
            break;
            case 5:
                in4CaseFormat = `440__24 //:`;
            break;
            case 6:
                in4CaseFormat = `440_6*4 //:`;        
            break;
        }
                
 let in5 = Number($("#inputAmtCases5").val() ).toLocaleString();    
let in5MultBy = 0;         
        if ( Number($("#format5").val()) === 1 || 4 ) {in1MultBy = 12;} else {in5MultBy = 24;};
let in5CaseFormat = '';
        
        switch ( Number($("#format5").val()) ) {
            case 1:
                in5CaseFormat = `330__12 //:`;              
            break;
            case 2:
                in5CaseFormat = `330__24 //:`;               
            break;
            case 3:
                in5CaseFormat = `330_6*4 //:`;               
            break;
            case 4:
                in5CaseFormat = `440__12 //:`;         
            break;
            case 5:
                in5CaseFormat = `440__24 //:`;
            break;
            case 6:
                in5CaseFormat = `440_6*4 //:`;        
            break;
        }               
        
        
let in6 = Number($("#inputAmtCases6").val() ).toLocaleString();    
let in6MultBy = 0;         
        if ( Number($("#format6").val()) === 1 || 4 ) {in1MultBy = 12;} else {in6MultBy = 24;};
let in6CaseFormat = '';
        
        switch ( Number($("#format6").val()) ) {
            case 1:
                in6CaseFormat = `330__12 //:`;              
            break;
            case 2:
                in6CaseFormat = `330__24 //:`;               
            break;
            case 3:
                in6CaseFormat = `330_6*4 //:`;               
            break;
            case 4:
                in6CaseFormat = `440__12 //:`;         
            break;
            case 5:
                in6CaseFormat = `440__24 //:`;
            break;
            case 6:
                in6CaseFormat = `440_6*4 //:`;        
            break;
        }               
            
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

        $(".nR").remove()
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
