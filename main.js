const aside = document.querySelector('aside')
const asideImagen = document.querySelector('.aside-imagen')
const asideTexto = document.querySelector('.aside-texto')
const botonCambiarModos = document.getElementById('boton-cambiar-modos')
const body = document.querySelector('body')
const contenedorImagen = document.querySelector('.contenedor-imagen')
const inputImagen = document.getElementById('input-url')
const inputColorImagen = document.getElementById('color-fondo-imagen')
const spanColorImagen = document.getElementById('span-color-imagen')
const efectoImagen = document.getElementById('selector-de-efecto')
const filtroBrillo = document.getElementById('filtro-brillo')
const filtroOpacidad = document.getElementById('filtro-opacidad')
const filtroContraste = document.getElementById('filtro-contraste')
const filtroDesenfoque = document.getElementById('filtro-desenfoque')
const filtroEscalaDeGrises = document.getElementById('filtro-escala-de-grises')
const filtroSepia = document.getElementById('filtro-sepia')
const filtroHue = document.getElementById('filtro-hue')
const filtroSaturado = document.getElementById('filtro-saturado')
const filtroNegativo = document.getElementById('filtro-negativo')
const botonReestablecerFiltros = document.getElementById('reestablecer-filtros')
const inputTextoSuperior = document.getElementById('aside-texto-superior')
const inputTextoInferior = document.getElementById('aside-texto-inferior')
const sinTextoSuperior = document.getElementById('sin-texto-superior')
const sinTextoInferior = document.getElementById('sin-texto-inferior')
const textoSuperior = document.querySelector('.texto-superior')
const textoInferior = document.querySelector('.texto-inferior')
const selectorDeFuente = document.getElementById('selector-de-fuente')
const tamañoDeFuente = document.getElementById('tamaño-de-fuente')
const alinearTextoIzquierda = document.getElementById('texto-izquierda')
const alinearTextoCentro = document.getElementById('texto-centro')
const alinearTextoDerecha = document.getElementById('texto-derecha')
const inputColorDeTexto = document.getElementById('color-de-texto')
const colorDeTexto = document.getElementById('nombre-color-de-texto')
const inputColorDeFondoTexto = document.getElementById('color-de-fondo-texto')
const colorDeFondo = document.getElementById('nombre-color-de-fondo')
const inputFondoTransparente = document.getElementById('fondo-transparente')
const botonContornoNinguno = document.getElementById('contorno-ninguno')
const botonContornoClaro = document.getElementById('contorno-claro')
const botonContornoOscuro = document.getElementById('contorno-oscuro')
const inputEspaciado = document.getElementById('espaciado')
const inputInterlineado = document.getElementById('selector-interlineado')
const botonDescarga = document.querySelector('.boton-descarga')
const meme = document.querySelector('.main-meme')
const botonCerrar = document.querySelector('.boton-cerrar')
const fuente  = window.getComputedStyle(textoSuperior).fontSize
const padding = window.getComputedStyle(textoSuperior).paddingTop





const mostrarAside = (e) => {
    if(e.target.id==='boton-imagen') {
        aside.classList.add('display-flex')
        asideTexto.classList.remove('display-flex');
        asideImagen.classList.add('display-flex')
    } if(e.target.id==='boton-texto'){
        aside.classList.add('display-flex')
        asideTexto.classList.add('display-flex');
        asideImagen.classList.remove('display-flex')
    } 
}

const cerrarAside = () => {
    aside.classList.remove('display-flex')
}

const cambiarModos = () => {
    if(body.classList.value==='modo-oscuro') {
        body.classList.remove('modo-oscuro');
        body.classList.add('modo-claro');
        botonCambiarModos.innerHTML=`<i class="fa-regular fa-lightbulb"></i>Modo Oscuro`
    } else{
        body.classList.add('modo-oscuro');
        body.classList.remove('modo-claro');
        botonCambiarModos.innerHTML=`<i class="fa-regular fa-lightbulb"></i>Modo Claro`
    }
}

const insertarImagen = (e) => {
    contenedorImagen.style.backgroundImage=`url(${e.target.value})`
}

const cambiarColorImagenFondo = (e) => {
    spanColorImagen.innerText=e.target.value;
    contenedorImagen.style.backgroundColor=e.target.value
}

const cambiarEfectoImagen = (e) => {
    contenedorImagen.style.backgroundBlendMode=e.target.value
}

const filtrosImagen = () => {
    contenedorImagen.style.filter= `brightness(${filtroBrillo.value}) opacity(${filtroOpacidad.value}) contrast(${filtroContraste.value}%) blur(${filtroDesenfoque.value}px) grayscale(${filtroEscalaDeGrises.value}%) sepia(${filtroSepia.value}%) hue-rotate(${filtroHue.value}deg) saturate(${filtroSaturado.value}%) invert(${filtroNegativo.value})`
}

const reestablecerFiltros = () => {
    filtroBrillo.value=1
    filtroOpacidad.value=1
    filtroContraste.value=100
    filtroDesenfoque.value=0
    filtroEscalaDeGrises.value=0
    filtroSepia.value=0
    filtroHue.value=0
    filtroSaturado.value=100
    filtroNegativo.value=0    
    filtrosImagen()
}

const cambiarTextoSuperior = (e) => {
    textoSuperior.innerText=e.target.value
}

const removerTextoSuperior = () => {
    if(textoSuperior.classList.contains('display-flex')){
        textoSuperior.classList.remove('display-flex')
    } else{
        textoSuperior.classList.add('display-flex')
    }
}

const cambiarTextoInferior = (e) => {
    textoInferior.innerText=e.target.value
}

const removerTextoInferior = () => {
    if(textoInferior.classList.contains('display-flex')){
        textoInferior.classList.remove('display-flex')
    } else{
        textoInferior.classList.add('display-flex')
    }
}

const cambiarFuente = (e) => {
    textoSuperior.style.fontFamily=e.target.value
    textoInferior.style.fontFamily=e.target.value
}

const cambiarTamañodeFuente = (e) => {
    textoSuperior.style.fontSize=`${e.target.value}px`
    textoInferior.style.fontSize=`${e.target.value}px`
}

const alinearTexto = (posicion) => {
    textoSuperior.style.justifyContent=posicion
    textoInferior.style.justifyContent=posicion
}

const cambiarColorTexto = (e) => {
    textoSuperior.style.color=e.target.value
    textoInferior.style.color=e.target.value
    colorDeTexto.innerText=e.target.value;
}

const cambiarColorFondoTexto = (e) => {
    textoSuperior.style.backgroundColor=e.target.value
    textoInferior.style.backgroundColor=e.target.value
    colorDeFondo.innerText=e.target.value
}

const fondoTransparente = () => {
    if(inputFondoTransparente.checked) {
        textoSuperior.style.position='absolute'
        textoInferior.style.position='absolute'
        textoSuperior.style.backgroundColor='transparent'
        textoInferior.style.backgroundColor='transparent'
        inputColorDeFondoTexto.disabled=true
    } else{ 
        textoSuperior.style.position='static'
        textoInferior.style.position='static'
        textoSuperior.style.backgroundColor=inputColorDeFondoTexto.value
        textoInferior.style.backgroundColor=inputColorDeFondoTexto.value
        inputColorDeFondoTexto.disabled=false
    }
}

const cambiarContornoDeTexto = (borde) => {
    textoSuperior.style.textShadow=borde
    textoInferior.style.textShadow=borde
}

const cambiarEspaciado = (e) => {
    textoSuperior.style.padding=`${e.target.value}px 0`
    textoInferior.style.padding=`${e.target.value}px 0`
}

const cambiarInterlineado = (e) => {
    textoSuperior.style.lineHeight=e.target.value
    textoInferior.style.lineHeight=e.target.value
}

const descargarMeme = () => {
    domtoimage.toBlob(meme).then(function (blob) {
    window.saveAs(blob, "mi-meme.png");
    });
};

const responsive = () =>{
    tamañoDeFuente.value = parseInt(fuente);
    inputEspaciado.value = parseInt(padding);
    if(window.innerWidth <= 800){
        meme.style.height= `${window.innerWidth/1.2}px`
    }else{
        meme.style.height= '80vh'
    }
}



const init = () => {
    document.addEventListener('click',mostrarAside) 
    botonCambiarModos.addEventListener('click',cambiarModos)
    inputImagen.addEventListener('input',insertarImagen)
    inputColorImagen.addEventListener('input', cambiarColorImagenFondo)
    efectoImagen.addEventListener('input',cambiarEfectoImagen)
    filtroBrillo.addEventListener('input',filtrosImagen)
    filtroOpacidad.addEventListener('input',filtrosImagen)
    filtroContraste.addEventListener('input',filtrosImagen)
    filtroDesenfoque.addEventListener('input',filtrosImagen)
    filtroEscalaDeGrises.addEventListener('input',filtrosImagen)
    filtroSepia.addEventListener('input',filtrosImagen)
    filtroHue.addEventListener('input',filtrosImagen)
    filtroSaturado.addEventListener('input',filtrosImagen)
    filtroNegativo.addEventListener('input',filtrosImagen)
    botonReestablecerFiltros.addEventListener('click',reestablecerFiltros)
    inputTextoSuperior.addEventListener('input',cambiarTextoSuperior)
    sinTextoSuperior.addEventListener('click',removerTextoSuperior)
    inputTextoInferior.addEventListener('input',cambiarTextoInferior)
    sinTextoInferior.addEventListener('click',removerTextoInferior)
    selectorDeFuente.addEventListener('input',cambiarFuente)
    tamañoDeFuente.addEventListener('input',cambiarTamañodeFuente)
    alinearTextoIzquierda.addEventListener('click',()=>alinearTexto('flex-start'))
    alinearTextoCentro.addEventListener('click',()=>alinearTexto('center'))
    alinearTextoDerecha.addEventListener('click',()=>alinearTexto('flex-end'))
    inputColorDeTexto.addEventListener('input',cambiarColorTexto)
    inputColorDeFondoTexto.addEventListener('input',cambiarColorFondoTexto)
    inputFondoTransparente.addEventListener('input',fondoTransparente)
    botonContornoNinguno.addEventListener('click',()=>cambiarContornoDeTexto('none'))
    botonContornoClaro.addEventListener('click',()=>cambiarContornoDeTexto('rgb(255, 255, 255) 2px 2px, rgb(255, 255, 255) -2px 2px, rgb(255, 255, 255) 2px -2px, rgb(255, 255, 255) -2px -2px'))
    botonContornoOscuro.addEventListener('click',()=>cambiarContornoDeTexto('rgb(0, 0, 0) 2px 2px, rgb(0, 0, 0) -2px 2px, rgb(0, 0, 0) 2px -2px, rgb(0, 0, 0) -2px -2px'))
    inputEspaciado.addEventListener('input',cambiarEspaciado)
    inputInterlineado.addEventListener('input',cambiarInterlineado)
    botonDescarga.addEventListener('click',descargarMeme)
    botonCerrar.addEventListener('click',cerrarAside)
    window.addEventListener('resize',responsive)
    responsive()
}

init()




