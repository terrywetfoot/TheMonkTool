/*eslint-env es6*/

$(document).ready(function(){ 

//TO DO:
    // Make things more user friendly (add text for each user input)
    // Remove the Date from each time DD/MM/YY
    // Allow user input time as start time
    // Add the option for breaks 
    

 $("#no-of-pallets, #pallet-format, #machine-speed, #fillheads-on").on("change", function() { 

    const runningSpeed = $("#machine-speed").val()/60;
    const palletFormat = $("#pallet-format").val();
    const headsOn = $("#fillheads-on").val();
    const time = new Date();
    let timeOfNextPallet = new Date(time.valueOf());


    //Pallet build time returned in minutes 
    const palletTimesAtMax = palletFormat / runningSpeed
    const palletBuildTime = palletTimesAtMax / headsOn;
    const targetBuildTime = palletBuildTime.toFixed(0)
    

    //Reminder to set the machine speed accordingly, if running at more than 5200 on 440ml cans. 
    if (Number($("#machine-speed").val()) > 5200 && $("#pallet-format").val() === '1512'){
      $("#warning").show();
    } else if (Number($("#machine-speed").val()) > 5200 && $("#pallet-format").val() === '2160') {
      $("#warning").show();
    } else {
      $("#warning").hide();
    };
    

    //Printing the pallet times 
    $("#pallet-time-list, #fastest-time").remove();
    $("#display-pallet-times").append(`<h4 id="fastest-time">Target time for each pallet: `+targetBuildTime+` minutes</h4>
      <ol id="pallet-time-list"></ol>`);
    for (let i = 1; i < $("#no-of-pallets").val(); i++) { 
    timeOfNextPallet.setTime(timeOfNextPallet.getTime() + palletBuildTime * 60000);
    let printTime = new Date(timeOfNextPallet).toTimeString().substring(0, 5);
     $("#pallet-time-list").append(`<li>`+printTime+`</li>`)
    };
    });

})