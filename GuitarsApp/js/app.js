import { db } from './guitarras.js'

// Iterar arrays
// ciclos
// for(let i = 0; i < db.length; i++)[
//     console.log(db[i].nombre)   
// ]

// Método de Arrays para Iterar

const createCard = (guitar) => {
    const div = document.createElement('div')
    div.className = 'col-md-6 col-lg-4 my-4 row align-items-center'
    const html = `<div class="col-4">
                    <img class="img-fluid" src="./img/${ guitar.imagen }.jpg" alt="imagen guitarra">
                </div>
                <div class="col-8">
                    <h3 class="text-black fs-4 fw-bold text-uppercase">${ guitar.nombre }</h3>
                    <p>${ guitar.descripcion }</p>
                    <p class="fw-black text-primary fs-3">$${ guitar.precio }</p>
                    <button 
                        type="button"
                        class="btn btn-dark w-100 "
                    >Agregar al Carrito</button>
                </div>`
    div.innerHTML = html
    return div
}

const container = document.querySelector('main div')

db.forEach((guitar) => { 
    console.log(guitar.nombre) 
    container.appendChild(createCard(guitar))
})