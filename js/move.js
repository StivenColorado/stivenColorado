function main()
{
    const cajas = document.getElementsByClassName('contenedores')    
    let contador = 0;
    let b = "f"
    let vueltas = 1
    let elementsAmount = cajas.length-1
    //console.log(elementsAmount)
    cajas[0].style.display = 'flex'
    function ocultar()
    {
        //vueltas var is for stop the slider 
        if(vueltas<=9)
        {
            if(contador>0)
            {
                cajas[contador-1].style.display = 'none'
                cajas[contador-1].style.backgroundColor = 'none'
            }else if(b=="v")
            {
                cajas[elementsAmount-1].style.display = 'none'
            }
            cajas[contador].style.display = 'flex'
            
            contador+=1 
            if(contador==elementsAmount)
            {
                contador=0
                b="v"
            }
            vueltas+=1
            //console.log(vueltas)
        }
    }
    if(contador<=elementsAmount)
    {
        let tiempo = setInterval(() => {
            ocultar()
        }, 2000);
    }

    let box = document.getElementsByClassName('boxSlider')
    let slider = document.getElementsByClassName('allSliders')
    amount = slider.length
    let top = 150
    let bottom = 0
    let contado = 0

    setInterval(() => {
    if(contado<=2)
    {
        slider[0].style.transform = `translateY(-${top}px)`
        slider[0].style.animationFillMode = 'forwards'
        slider[0].style.transition = 'linear 1s'
        top+=150
        //console.log(contado)
        //console.log(top)
        contado =contado + 1
        if(contado==3)
        {
            top = 0
            slider[0].style.transform = `translateY(-${top}px)`
            contado = -1 //theres a dead second 
        }
    }

    let screen = window.innerWidth
    }, 6000);
    const btn = document.getElementsByClassName('openNav')
    btn[0].onclick = function()
    {
        pressBtn(btn[0])
    }
}

let pressBtn = function(e)
{
    //activar animacion 
    e.style.animation = 'btnNav 500ms linear forwards'
}
