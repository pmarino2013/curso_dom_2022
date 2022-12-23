let contenedor = document.querySelector("#contenedor");

let subtitulo = document.createElement("h3");
subtitulo.innerText = "Árbol de nodos";

let imagen = document.createElement("img");
imagen.src =
  "https://ikastaroak.birt.eus/edu/argitalpen/backupa/20200331/1920k/es/DAW/DWEC/DWEC06/es_DAW_DWEC06_Contenidos/DWEC06_CONT_R04_arbol.png";
imagen.width = "300";
imagen.alt = "árbol de nodos";

// contenedor.appendChild(subtitulo);
// contenedor.appendChild(imagen);

contenedor.append(subtitulo, imagen);

const autor = {
  nombre: "Steve Gates",
  usuario: "",
  correo: "stevewinner@outlook.com",
  descriptcion:
    "Fanático de la tecnología y profesor de las artes de programación con javascript",
  imagen:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsSVzcOZEqLQk9Ma142okaHnitwOAvlaCgTw&usqp=CAU",
};

const crearTarjeta = () => {
  document.querySelector("#contenedor_tarjeta").innerHTML = "";

  let columnaTarjeta = document.createElement("div");
  columnaTarjeta.className = "col";

  let tarjetaAutor = `<div class="card" style="width: 18rem">
  <img
    src="${autor.imagen}"
    class="card-img-top pt-2"
    alt="${autor.nombre}"
  />
  <div class="card-body">
    <h5 class="card-title">${autor.nombre}</h5>
    <p class="card-text">
      ${autor.descriptcion}
    </p>
    <p class="text-muted">
  ${autor.correo}
    </p>
    <button class="btn btn-primary" onclick="eventoClick(event)">Ver perfil</button>
  </div>
  </div>`;

  columnaTarjeta.innerHTML = tarjetaAutor;
  document.querySelector("#contenedor_tarjeta").append(columnaTarjeta);
};

const modificarAutor = (event) => {
  console.log(event);
  event.preventDefault();

  autor.nombre = document.querySelector("#nombre").value;
  autor.usuario = document.querySelector("#usuario").value;
  autor.correo = document.querySelector("#email").value;

  crearTarjeta();
  limpiarFormulario();
};

// const eventoClick = (event) => {
//   console.log(event);
// };
const limpiarFormulario = () => {
  document.getElementById("formulario").reset();
};

document
  .getElementById("formulario")
  .addEventListener("submit", modificarAutor);

crearTarjeta();
