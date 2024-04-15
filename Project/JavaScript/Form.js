const inputs = document.getElementsByClassName('textInput');
const labels = document.getElementsByClassName('textlabel');

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("focus", function() {
        labels[i].style.top = '-70%';
    });

    inputs[i].addEventListener("blur", function() {
        if (inputs[i].value === "") {
            labels[i].style.top = '-10%';
        }
    });
}

// Sameg
// Thanks for the amazing comment Omar
const inputs1 = document.getElementsByClassName('textInput1');
const labels1 = document.getElementsByClassName('textlabel1');

for (let i = 0; i < inputs1.length; i++) {
    inputs1[i].addEventListener("focus", function() {
        labels1[i].style.top = '-90%';
    });

    inputs1[i].addEventListener("blur", function() {
        if (inputs1[i].value === "") {
            labels1[i].style.top = '-10%';
        }
    });
}
