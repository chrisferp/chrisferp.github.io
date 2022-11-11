'use strict'
const GRANDE =document.querySelector('.grande')
const SLIDE  =document.querySelectorAll('.punto')

//Cuando click en punto
    //Saber la posicion de ese punto
    //Aplicar un transfor translateX al grande
    //Quitar la clase activo de todos los puntos
    //Añadir la clase punto al punto que hemos hecho click
    
    SLIDE.forEach(( cadaPunto , i)=> {
        SLIDE[i].addEventListener('click', ()=>{

        let posicion  = i
        let operacion = posicion * -33.35

        GRANDE.style.transform = `translateX(${ operacion }%)`

        SLIDE.forEach( (cadaPunto , i )=>{
            SLIDE[i].classList.remove('selected')
        })
        SLIDE[i].classList.add('selected')
    })
})
