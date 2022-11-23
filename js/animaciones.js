function animaciones()
{
    let pantalla = window.innerWidth;
    //console.log('screen size is:'+pantalla)
    window.addEventListener('scroll', () => {
        let barras = document.getElementsByClassName('colorBars')
        let secciones = document.getElementsByClassName('secciones')
        let contenedorContacto = document.getElementsByClassName('contentContainer4')
        let skill = document.getElementById('skills')//reference 1
        let skill2 = document.getElementById('textSkills')//reference 2
        let design = document.getElementById('contentContact')//reference 3
        let pos = skill.getBoundingClientRect().top;
        let pos2 = skill2.getBoundingClientRect().top;
        let pos3 = design.getBoundingClientRect().top;
        //console.log(pos3)
        if(pantalla > 750)
        {
            if(pos <=600){
                for(i=0;i<barras.length;i++)
                {
                    barras[i].style.animation = 'barrasColores 500ms alternate forwards'
                }//esto es para la barra de habilidades (porcentaje)
                for(i=0;i<secciones.length;i++)
                {
                    secciones[i].style.animation = 'deslizarSkillMostrar 1s alternate forwards'
                }//esto es para el texto de creatividad
            }
            if(pos3 > 600)
            {
                design.style.animation = 'designClipShow 2s alternate forwards'
            }
            //##################################  ocultar
            if(pos>600)
            {
                for(i=0;i<barras.length;i++)
                {
                    barras[i].style.animation = 'barrasSinColores 500ms alternate forwards'
                }//barra de porcentaje

                for(i=0;i<secciones.length;i++)
                {
                    secciones[i].style.animation = 'deslizarSkillOcultar 1s alternate forwards'
                }//esto es para el texto de creatividad
            }
        }
        if(pos3 > 990)
            {
                design.style.animation = 'designClipHidde 2s alternate forwards'
            }
        if(pantalla < 750)
        {
            //console.log(pos2)
            if(pos <=600){
                for(i=0;i<barras.length;i++)
                {
                    barras[i].style.animation = 'barrasColores 800ms alternate forwards'
                }//esto es para la barra de habilidades (porcentaje)

                for(i=0;i<secciones.length;i++)
                {
                    secciones[i].style.animation = 'deslizarSkillMostrar 1s alternate forwards'
                }//esto es para el texto de creatividad
            }
            if(pos3 > 600)
            {
                design.style.animation = 'designClipShow 2s alternate forwards'
            }
            //##################################  ocultar
            if(pos>600)
            {
                for(i=0;i<barras.length;i++)
                {
                    barras[i].style.animation = 'barrasSinColores 500ms alternate forwards'
                }//barra de porcentaje

                for(i=0;i<secciones.length;i++)
                {
                    secciones[i].style.animation = 'deslizarSkillOcultar 1s alternate forwards'
                }//esto es para el texto de creatividad
            }

            if(pos3 > 600)
            {
                design.style.animation = 'designClipShow 2s alternate backwards'
            }
        }
    })

    /*let activador = document.getElementById('todo')
    activador.onclick = function(){
        let nube = document.getElementById('nube')
        prueba(nube)
    }*/

    let contador = 0;

    let btnNav = document.getElementById('open')
    let btnNav2 = document.getElementById('closeNav')
    let alternar = document.getElementsByClassName('opcionesPhone')

    btnNav.onclick = function(){//activar menu  
        abrirMenu()
    }

    btnNav2.onclick = function(){//activar menu  
        cerrarMenu()
    }
    alternar[0].onclick = function(){cerrarMenu()}
    alternar[1].onclick = function(){cerrarMenu()}
    alternar[2].onclick = function(){cerrarMenu()}
    alternar[3].onclick = function(){cerrarMenu()}

}


let prueba = function(e)
{
    e.style.animation = 'moveCloud 500ms alternate forwards'
}

let abrirMenu  = function ()
{
    
   // console.log('ingreso')
    let menu = document.getElementById('todo')
    //let nube = document.getElementById('nube')
    let opciones = document.getElementById('fullnav')
    let btnNav = document.getElementById('open')
    let btnNav2 = document.getElementById('closeNav')

    menu.style.display = 'flex'
    menu.style.animation = 'openNav 500ms alternate forwards'
    opciones.style.animation = 'deslizarAbajoOpciones 1s alternate forwards'
    opciones.style.animationDelay ='50ms'
    btnNav2.style.animation = 'virarClose 2s alternate forwards'
}


let cerrarMenu  = function ()
{
    
    //console.log('ingreso')
    let menu = document.getElementById('todo')
    let opciones = document.getElementById('fullnav')
    let btnNav = document.getElementById('open')
    let btnNav2 = document.getElementById('closeNav')

    menu.style.animation = 'closeNav 3s alternate forwards'
    opciones.style.animation = 'deslizarArribaOpciones 500ms alternate forwards'
    btnNav2.style.animation = 'virarOpen 2s alternate forwards'
}

