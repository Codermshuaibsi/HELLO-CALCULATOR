function take(value) {
    let display = document.getElementById('output')
    display.value += value;

}

function clear() {
    let display = document.getElementById('output')
    display.value = "";
}


function result() {
    let display = document.getElementById('output');
    try {
        display.value = 'HELLO WORLD';
    } catch (e) {
        display.value = 'Error';
    }
}