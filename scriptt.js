function calculateSimpInterest() {
    var principal = parseFloat(document.getElementById('principal1').value);
    var rate = parseFloat(document.getElementById('rate1').value);
    var years = parseInt(document.getElementById('years1').value);

    var interest = (principal * rate * years) / 100;
    
    var resultElement = document.getElementById('result1');
    resultElement.innerHTML = 'Interest: $' + interest.toFixed(2);
}

var continuous = false;

function calculateCompInterest() {
    var principal = parseFloat(document.getElementById('principal2').value);
    var rate = parseFloat(document.getElementById('rate2').value);
    var years = parseInt(document.getElementById('years2').value);
    if (continuous) {
        var interest = principal * Math.pow(Math.E, rate / 100 * years) - principal;
    }
    else {
    
        var count = parseInt(document.getElementById('numOfCompounds').value);

        var interest = 1 + rate / (100 * count);
        interest = Math.pow(interest, count * years);
        interest = principal * interest - principal;
    }
    var resultElement = document.getElementById('result2');
    resultElement.innerHTML = 'Interest: $' + interest.toFixed(2);
}

function continuousInterest() {
    const checkBox = document.getElementById("continuousInterest");
    if (checkBox.checked) {
        continuous = true; 
        document.getElementById('numOfCompounds').style.display = "none";
        document.getElementById('numOfCompoundsLabel').style.display = "none";
        document.getElementById('compoundInfoPage').innerHTML = "Compounding continuously (repeatedly) is ideal for earning interest. The calculation involves the mathematical number of e."
    }
    else {
        continuous = false;  
        document.getElementById("numOfCompounds").style.display = "inline-block";
        document.getElementById('numOfCompoundsLabel').style.display = "inline-block";
        document.getElementById('compoundInfoPage').innerHTML = "Compound interest occurs when the interest rate is compounded on the principal multiple times throughout the year.";
    }
}

const selectElement = document.getElementById("selectBox");

selectElement.addEventListener("change", function() {
  // Code to execute when the select value changes
  var selectedValue = this.value;
  if (selectedValue == "compound") {
    document.getElementById("compound-interest").style.display = "block";
    document.getElementById("simple-interest").style.display = "none";
  }
  if (selectedValue == "simple") {
    document.getElementById("compound-interest").style.display = "none";
    document.getElementById("simple-interest").style.display = "block";
  }
});


const simpInfo = document.getElementById("simpleInfoPage")
document.getElementById('simpleInfo').onclick = function() {
    if (simpInfo.style.display == 'none') {simpInfo.style.display = "block";}
    else {simpInfo.style.display = "none";}
};

const compInfo = document.getElementById("compoundInfoPage")
document.getElementById('compoundInfo').onclick = function() {
    if (compInfo.style.display == 'none') {compInfo.style.display = "block";}
    else {compInfo.style.display = "none";}
};