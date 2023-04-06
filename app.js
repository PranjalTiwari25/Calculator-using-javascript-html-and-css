(function () {

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn-n');
    let clear = document.querySelector('.btn-c');
    let equal = document.querySelector('.btn-eq');

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.innerHTML;
            screen.value += value;
        })
    });
    clear.addEventListener('click', function (e) {
        screen.value = '';
    })


    equal.addEventListener('click', function (e) {
        if (screen.value === '') {
            screen.value = "";
            console.log("if");
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })



})();