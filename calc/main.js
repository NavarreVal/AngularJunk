document.getElementById('sum').addEventListener('click', function () {
    var numberOne = document.getElementById('add-number-one').value;
    var numberTwo = document.getElementById('add-number-two').value;
    
    var result = (parseInt(numberOne) + parseInt(numberTwo));
    
    if (isNaN(result)) {
        alert("Please use only numbers!");
        return;
    } else {
    document.getElementById('result').innerHTML = result;
    }
    
});
    
document.getElementById('less').addEventListener('click', function() {
    var numberOne = document.getElementById('less-number-one').value;
    var numberTwo = document.getElementById('less-number-two').value;
    
    var result = (parseInt(numberOne) - parseInt(numberTwo));
    
    if (isNaN(result)) {
        alert("Please use only numbers!");
        return;
    } else {
    document.getElementById('result').innerHTML = result;
    }
    
});
    
document.getElementById('multiply').addEventListener('click', function() {
    var numberOne = document.getElementById('mult-number-one').value;
    var numberTwo = document.getElementById('mult-number-two').value;
    
    var result = (parseInt(numberOne) * parseInt(numberTwo));
    
    if (isNaN(result)) {
        alert("Please use only numbers!");
        return;
    } else {
    document.getElementById('result').innerHTML = result;
    }
    
});
    
//    if (isNAN(result)) {
//        alert("Please use only numbers!");
//        return;
//    } else {
//    document.getElementById('result').innerHTML = result;
//    }
