const calculate = () => {

    const inputTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    

    // convert celsius to fahrenheit
    const celToFah = (celci) => {
        let fahrenheit = ((celci * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // Convert Fahrenheit to Celsius
    const fahToCel = (fahre) => {
        let celsius = ((fahre - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if (valueTemp == 'celci') {
        document.getElementById("result").innerHTML = celToFah(inputTemp) + "&#176; Fahrenheit";
    }

    else {
        document.getElementById("result").innerHTML = fahToCel(inputTemp) + "&#176; Celsius";
    }
}