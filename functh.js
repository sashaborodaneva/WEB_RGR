function summary() {
    document.getElementById("pop").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.btn')) {
  
      let dropdowns = document.getElementsByClassName("menu");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


function shrek(){
    window.open("file:///C:/Users/aleks/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/%D0%A3%D1%87%D0%B5%D0%B1%D0%B0/3%20%D0%BA%D1%83%D1%80%D1%81/1%20%D1%81%D0%B5%D0%BC%D0%B5%D1%81%D1%82%D1%80/WEB/WEB_RGR/shrek.html")
}
function mad(){
    window.open("file:///C:/Users/aleks/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/%D0%A3%D1%87%D0%B5%D0%B1%D0%B0/3%20%D0%BA%D1%83%D1%80%D1%81/1%20%D1%81%D0%B5%D0%BC%D0%B5%D1%81%D1%82%D1%80/WEB/WEB_RGR/mad.html")
}
function led(){
    window.open("file:///C:/Users/aleks/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/%D0%A3%D1%87%D0%B5%D0%B1%D0%B0/3%20%D0%BA%D1%83%D1%80%D1%81/1%20%D1%81%D0%B5%D0%BC%D0%B5%D1%81%D1%82%D1%80/WEB/WEB_RGR/led.html")
}
function simps(){
    window.open("file:///C:/Users/aleks/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/%D0%A3%D1%87%D0%B5%D0%B1%D0%B0/3%20%D0%BA%D1%83%D1%80%D1%81/1%20%D1%81%D0%B5%D0%BC%D0%B5%D1%81%D1%82%D1%80/WEB/WEB_RGR/simps.html")
}
function corp(){
    window.open("file:///C:/Users/aleks/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/%D0%A3%D1%87%D0%B5%D0%B1%D0%B0/3%20%D0%BA%D1%83%D1%80%D1%81/1%20%D1%81%D0%B5%D0%BC%D0%B5%D1%81%D1%82%D1%80/WEB/WEB_RGR/corp.html")
}
function html(){
    window.open("file:///C:/Users/aleks/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/%D0%A3%D1%87%D0%B5%D0%B1%D0%B0/3%20%D0%BA%D1%83%D1%80%D1%81/1%20%D1%81%D0%B5%D0%BC%D0%B5%D1%81%D1%82%D1%80/WEB/WEB_RGR/code.html")
};
function css(){
    window.open("file:///C:/Users/aleks/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/%D0%A3%D1%87%D0%B5%D0%B1%D0%B0/3%20%D0%BA%D1%83%D1%80%D1%81/1%20%D1%81%D0%B5%D0%BC%D0%B5%D1%81%D1%82%D1%80/WEB/WEB_RGR/codecss.html")
}
function calc(){
    window.open("file:///C:/Users/aleks/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/%D0%A3%D1%87%D0%B5%D0%B1%D0%B0/3%20%D0%BA%D1%83%D1%80%D1%81/1%20%D1%81%D0%B5%D0%BC%D0%B5%D1%81%D1%82%D1%80/WEB/WEB_RGR/calc.html")
}


 function myFunction(elmnt, clr) {
  elmnt.style.color = clr;
}
function setclick1(){
    let r = Math.round(Math.random()*255); 
    let g = Math.round(Math.random()*255); 
    let b = Math.round(Math.random()*255); 
    let color = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.body.style.background = color;
}
function setclick2(){
    let r = Math.round(Math.random()*255); 
    let g = Math.round(Math.random()*255); 
    let b = Math.round(Math.random()*255); 
    let color = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('click2').style.backgroundColor = color;
}
function setclick3(){
    alert('Добрый день! Это всплывающее окно, нажмите "ОК" и продолжайте смотреть).' + ' Сегодня: ' + Date())
}
function setclick4(){
    let img = document.getElementById('picture');
    img.style.visibility = 'visible';
}
function setclick5(){
    let img = document.getElementById('picture');
    if (img.style.visibility = 'visible') {
        img.animate ([
            {transform: 'translate3D(0, 0, 0)'}, 
            {transform: 'translate3D(0, -200px, 0)'},
            {transform: 'translate3D(-200px, 0, 0)'}, 
            {transform: 'translate3D(200px, 0, 0)'},
            {transform: 'rotatex: 0deg'}, 
            {transform: 'rotatex: 360deg'}
        ], {
            duration: 2500,
            iterations: Infinity
        })
    }
}
function setclick6(){
    let img = document.getElementById('picture');
    img.style.visibility = 'hidden';
}


function setclick0(){
    function val(x,y){
        return (x + (Math.random() * (y-x)));
    }
    let object = " ";
    for (let i = 0; i < 60; i++){
        let a = val(2, 30);
        object += '<div class="object" style="height: ' + a + 'px; width: ' + a + 'px; background-color: rgba('+val(0, 300)+','+val(0, 300)+','+ val(0, 300)+'); animation-duration: '+val(10, 30)+'s; top: '+val(0 ,100)+'%; left: '+val(0 ,100)+'%;"></div>'
    }
    document.body.innerHTML = object;
}


