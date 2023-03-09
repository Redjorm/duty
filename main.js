/* BASE DE DATOS */
const tarjetas = [
  {
    id: 1,
    titulo: 'Titulo 1',
    descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    imagen: 'https://picsum.photos/250/250?random=1'
  },
  {
    id: 2,
    titulo: 'Titulo 2',
    descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    imagen: 'https://picsum.photos/250/250?random=2'
  },
  {
    id: 3,
    titulo: 'Titulo 3',
    descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    imagen: 'https://picsum.photos/250/250?random=3'
  },
  {
    id: 4,
    titulo: 'Titulo 4',
    descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    imagen: 'https://picsum.photos/250/250?random=4'
  }
]

let coleccion = {}

function pintarTarjetas () {
  const tarajetasContenedorHTML = document.getElementById('tarjetasContenedor')

  let html = ''

  for (const tarjeta of tarjetas) {
    html += `<article class="tarjeta">
                <img src="${tarjeta.imagen}" alt="${tarjeta.titulo}" class="imagen__tarjeta">
                <div class="cuerpo__tarjeta">
                <h2 class="titulo__tarjeta">${tarjeta.titulo}</h2>
                <p class="descripcion__tarjeta">
                ${tarjeta.descripcion}
                </p>
                <button class="agregar__btn" id="${tarjeta.id}">agregar</button>
                </div>
            </article>`
  }

  tarajetasContenedorHTML.innerHTML = html
}

function pintarColeccion () {
  const coleccionContenedorHTML = document.getElementById('coleccionContenedor')

  let html = ''

  for (const key in coleccion) {
    console.log()
    html += `<article class="tarjeta">
                <img src="${coleccion[key].imagen}" alt="${coleccion[key].titulo}" class="imagen__tarjeta">
                <div class="cuerpo__tarjeta">
                <h2 class="titulo__tarjeta">${coleccion[key].titulo}</h2>
                <p class="descripcion__tarjeta">
                ${coleccion[key].descripcion}
                </p>
                <button class="eliminar__btn" id="${coleccion[key].id}">Eliminar</button>
                </div>
            </article>`
  }

  coleccionContenedorHTML.innerHTML = html
}

function agregarTarjeta () {
  const seccionHTML = document.querySelector('.seccion__tarjetas')

  seccionHTML.addEventListener('click', function (e) {
    if (e.target.classList.contains('agregar__btn')) {
      const id = Number(e.target.id)

      let econtrarTarjeta = null

      for (const tarjeta of tarjetas) {
        if (tarjeta.id === id) {
          econtrarTarjeta = tarjeta
          break
        }
      }

      if (coleccion[econtrarTarjeta.id]) {
      } else {
        coleccion[econtrarTarjeta.id] = econtrarTarjeta
      }

      pintarColeccion()
    }
  })
}

function removerTarjeta () {
  const seccionHTML = document.querySelector('.contenedor__coleccion')
  seccionHTML.addEventListener('click', function (e) {
    if (e.target.classList.contains('eliminar__btn')) {
      const id = Number(e.target.id)
      delete coleccion[id]
      pintarColeccion()
    }
  })
}

function main () {
  pintarTarjetas()

  agregarTarjeta()

  removerTarjeta()
}

main()
