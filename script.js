document.addEventListener('DOMContentLoaded', function () {
let dragEls = document.getElementsByClassName('grab');

function dragging(draggable){
    
    let pos = { top: 0, left: 0, x: 0, y: 0 };

    var mouseDownHandler = function (e) {
        draggable.style.cursor = 'grabbing';
        pos = {
            // The current scroll
            left: draggable.scrollLeft,
            //top: draggable.scrollTop,
            // Get the current mouse position
            x: e.clientX,
            //y: e.clientY,
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    }



    var mouseMoveHandler = function (e) {
        draggable.style.userSelect = 'none';
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        //const dy = e.clientY - pos.y;

        // Scroll the element
        //draggable.scrollTop = pos.top - dy;
        draggable.scrollLeft = pos.left - dx;
    };

    var mouseUpHandler = function () {
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
        draggable.style.cursor = 'grab';
        draggable.style.removeProperty('user-select');
    };
    draggable.addEventListener('mousedown', mouseDownHandler);
}
for(el of dragEls) {
    el.scrollTop = 0;
    el.scrollLeft = 0;
    dragging(el);
};

//Close cookies menu on click
document.getElementById("accept-cookies").addEventListener('click',function(e){
    document.getElementById("cookies").classList.add('invisible');
});


var toTopBtn = document.getElementById("to-top");
toTopBtn.classList.add('invisible');

//if screen is low enough, show toTopBtn 
function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = window.screen.height / 2;

    if (scrolled > coords) {
        toTopBtn.classList.remove('invisible');
    }
    if (scrolled < coords) {
       toTopBtn.classList.add('invisible');
    }
}

//Smooth scroll to top
function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -50);
        setTimeout(backToTop, 0);
    }
}

window.addEventListener('scroll', trackScroll);
toTopBtn.addEventListener('click', backToTop);
});