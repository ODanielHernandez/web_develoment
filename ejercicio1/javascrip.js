function displayUserDataInScreen(name) {

    if (document.getElementById('r1').checked) {
        valueType = document.getElementById('r1').value;
    } else {
        valueType = document.getElementById('r2').value;
    }
    
    document.getElementById('p1').innerHTML = '¡Hola ' + name + ' !';
    document.getElementById('p2').innerHTML = 'Tú eres: ' + valueType;
}

