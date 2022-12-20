function main2(){let cursor=document.querySelector('.cursor')
let text=document.querySelector('section.contenedores')
let secondContainer=document.querySelector('div.container2')
let thirdContainer=document.querySelector('div.container3')
let lastContainer=document.querySelector('div.container4')
let bandera='v'
window.addEventListener('mousemove',(e)=>{if(bandera=='v'){cursor.style.backgroundColor='rgb(255,255,255,1)'
cursor.style.color='black'}else{cursor.style.backgroundColor='red'
cursor.style.color='rgb(255,255,255,1)'}
cursor.style.top=(e.pageY-20)+'px'
cursor.style.left=(e.pageX-20)+'px'
bandera='v'})
text.addEventListener('mousemove',()=>{bandera='f'})
secondContainer.addEventListener('mousemove',()=>{bandera='f'})
thirdContainer.addEventListener('mousemove',()=>{bandera='f'})
lastContainer.addEventListener('mousemove',()=>{bandera='f'})}