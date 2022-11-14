/*eslint-env es6*/

$(document).ready(function(){ 
// -- \\\\\\\\\\\\\\\\\\\\\ TABS \\\\\\\\\\\\\\\\\\\\\\\   -- \\
    
    $("#tab1").on("click", function() { 
        $("#final-packed").show();
        $("#splash, #bbe, #pallet-time-est, #coming-soon").hide(); 
    });
    
     $("#tab2").on("click", function() { 
        $("#bbe").show();
        $("#splash, #final-packed, #pallet-time-est, #coming-soon").hide(); 
    });
    
     $("#tab3").on("click", function() { 
        $("#pallet-time-est").show();
        $("#splash, #final-packed, #bbe, #coming-soon").hide(); 
    });
    
     $("#tab4").on("click", function() { 
        $("#coming-soon").show();
        $("#splash, #final-packed, #bbe, #pallet-time-est").hide(); 
    });
     
});
