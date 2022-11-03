//Cambiar el color del titular del negro actual a rojo y además debe quedar centrado.
// El único cambio será en el bloque cambiar y el código de función cambiar()

// function cambiar() {
//     let colors = document.getElementById('titular')
//     colors.style.color = "red";
//     colors.style.textAlign = "center";
// }

// function crearDiv() {
//     let body = document.querySelector('body')
//     let div = document.createElement('div');
//     let texto = document.createElement('p');
//     texto.textContent = 'Javascript permite crear paginas dinamicas';
//     div.appendChild(texto)
//     body.appendChild(div)
//     div.style.color = "white";
//     div.style.backgroundColor = "red";
//     div.style.textAlign = "center";
//     // div.setAttribute("style","background:red; color:white; text-align: center")
// }


// function borrarDiv() {
//     let subtitulo = document.getElementById("subtitulo");
//     if (subtitulo) {
//         return subtitulo.remove()
//     }
// }

// //ejercicio 5
// La página web modelo contiene tres imágenes.
//  Cada imagen está en un bloque figure con un elemento figcaption para un pie de foto. Al pulsar sobre cualquier imagen se debe mostar su atributo alt en su pie de foto. Si el pie ya está relleno se borrará su contenido y no se escribirá nada.
// Cada imagen es como un botón que 
// alterna el pie de foto entre vacio (sin texto) y el valor del atributo alt de cada una.


// function ponerPie(parametro) { // parametro= document
//     let textUnderPicture = parametro.querySelector('figcaption') // suma= 2+2 
//     let photo = parametro.querySelector('img')

//     if (textUnderPicture.innerText === "") { //innerText es una propiedad del objeto textUnderPicture
//         textUnderPicture.innerText = photo.alt  //agrego el alt de photo como valor de la propiedad innerText de textUnderPicture 
//     } else {
//         textUnderPicture.innerText = ""  //igualo el valor de la propiedad del objeto textUnderPicture a vacio: ""
//     }
// }




// En este script debes leer todos los elementos tipo imagen de la página y mostrar sus urls 
// en un bloque tipo div cuyo id es fuentes y que ya existe en la página modelo usada para estos ejercicios.
//  El script se ejecutará al pulsar el botón con el texto fuentes

// El bloque ya está creado solo tienes que crear la función denominada fuentesImg() asociada al
//  botón fuentes

// function fuentesImg(){
//     let imagenes= document.querySelectorAll('img');
//     let fuentes= document.getElementById('fuentes');
//     let src=""
//     for (let i = 0; i < imagenes.length; i++) {
//         src += imagenes[i].src
//     }
//     fuentes.innerText= src
// }


