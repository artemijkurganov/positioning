let w = 0;
const element = document.querySelector('.progress_done');

function bigger(){
    if (w >= 320) clearInterval(_);
    element.style.width = w + 'px';
    w += 10;
}

let _ = setInterval(bigger, 80);