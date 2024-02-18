buttons = document.querySelectorAll('button');
buttons.forEach(e => {
    e.onclick = function(){
        var demo = document.getElementById('demo');
        demo.className = e.innerText;
    }
});