/*eslint-env es6*/

//--

const calc = document.getElementById("calc-button");
calc.addEventListener("click", calculate);
function calculate() {
    
//-The Numbers --    
let input33012 = document.getElementById("330x12-input").value;
let input33024 = document.getElementById("330x24-input").value;
let input44012 = document.getElementById("440x12-input").value;
let input44024 = document.getElementById("440x24-input").value;
//--
let needed330 = input33012 * 12 + input33024 * 24;
let needed440 = input44012 * 12 + input44024 * 24;
let lidsNeeded = needed330 + needed440;
//--
let inputLids = document.getElementById("input-lids").value;
let input330 = document.getElementById("input-330").value;
let input440 = document.getElementById("input-440").value;
//--
let lidsUsed = inputLids * 625;
let used330 = input330 * 351;
let used440 = input440 * 351;
//--
let lidWaste = lidsNeeded - lidsUsed;
let waste330 = needed330 - used330;
let waste440 = needed440 - used440;

//--Display --
    document.getElementById("how-many-lids").innerHTML = lidsUsed;
    document.getElementById("how-many-cans-330").innerHTML = used330;
    document.getElementById("how-many-cans-440").innerHTML = used440;
//--
    document.getElementById("lid-waste").innerHTML = lidWaste;
    document.getElementById("330-waste").innerHTML = waste330;
    document.getElementById("440-waste").innerHTML = waste440;
    
};


