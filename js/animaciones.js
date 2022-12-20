function animaciones(){let pantalla=window.innerWidth;window.addEventListener('scroll',()=>{let barras=document.getElementsByClassName('colorBars')
let secciones=document.getElementsByClassName('secciones')
let contenedorContacto=document.getElementsByClassName('contentContainer4')
let skill=document.getElementById('skills')
let skill2=document.getElementById('textSkills')
let design=document.getElementById('contentContact')
let pos=skill.getBoundingClientRect().top;let pos2=skill2.getBoundingClientRect().top;let pos3=design.getBoundingClientRect().top;if(pantalla>750){if(pos<=600){for(i=0;i<barras.length;i++){barras[i].style.animation='barrasColores 500ms alternate forwards'}
for(i=0;i<secciones.length;i++){secciones[i].style.animation='deslizarSkillMostrar 1s alternate forwards'}}
if(pos3>600){design.style.animation='designClipShow 2s alternate forwards'}
if(pos>600){for(i=0;i<barras.length;i++){barras[i].style.animation='barrasSinColores 500ms alternate forwards'}
for(i=0;i<secciones.length;i++){secciones[i].style.animation='deslizarSkillOcultar 1s alternate forwards'}}}
if(pos3>990){design.style.animation='designClipHidde 2s alternate forwards'}
if(pantalla<750){if(pos<=600){for(i=0;i<barras.length;i++){barras[i].style.animation='barrasColores 800ms alternate forwards'}
for(i=0;i<secciones.length;i++){secciones[i].style.animation='deslizarSkillMostrar 1s alternate forwards'}}
if(pos3>600){design.style.animation='designClipShow 2s alternate forwards'}
if(pos>600){for(i=0;i<barras.length;i++){barras[i].style.animation='barrasSinColores 500ms alternate forwards'}
for(i=0;i<secciones.length;i++){secciones[i].style.animation='deslizarSkillOcultar 1s alternate forwards'}}
if(pos3>600){design.style.animation='designClipShow 2s alternate backwards'}}})
let contador=0;let btnNav=document.getElementById('open')
let btnNav2=document.getElementById('closeNav')
let alternar=document.getElementsByClassName('opcionesPhone')
btnNav.onclick=function(){abrirMenu()}
btnNav2.onclick=function(){cerrarMenu()}
alternar[0].onclick=function(){cerrarMenu()}
alternar[1].onclick=function(){cerrarMenu()}
alternar[2].onclick=function(){cerrarMenu()}
alternar[3].onclick=function(){cerrarMenu()}}
let prueba=function(e){e.style.animation='moveCloud 500ms alternate forwards'}
let abrirMenu=function(){let menu=document.getElementById('todo')
let opciones=document.getElementById('fullnav')
let btnNav=document.getElementById('open')
let btnNav2=document.getElementById('closeNav')
menu.style.display='flex'
menu.style.animation='openNav 500ms alternate forwards'
opciones.style.animation='deslizarAbajoOpciones 1s alternate forwards'
opciones.style.animationDelay='50ms'
btnNav2.style.animation='virarClose 2s alternate forwards'}
let cerrarMenu=function(){let menu=document.getElementById('todo')
let opciones=document.getElementById('fullnav')
let btnNav=document.getElementById('open')
let btnNav2=document.getElementById('closeNav')
menu.style.animation='closeNav 3s alternate forwards'
opciones.style.animation='deslizarArribaOpciones 500ms alternate forwards'
btnNav2.style.animation='virarOpen 2s alternate forwards'}