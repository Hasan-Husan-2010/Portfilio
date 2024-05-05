VanillaTilt.init(document.querySelectorAll(".work"), {
    max: 15,
    speed: 200
});
let btn = document.querySelector('.a4');

var debounce = (func, wait, immediate) => {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

function scrollCheck(){
    console.log('ScrollY = ' + window.scrollY);
    if(window.scrollY > 1400){
        btn.classList.add('show');
    } else {
        btn.classList.remove('show');
    }
}
window.addEventListener('scroll', debounce(scrollCheck, 30));