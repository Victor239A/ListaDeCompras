import { guardarProducto, obtenerProducto } from "../../control/MiLocalStorage.js";

export function centro() {
  let div = document.createElement("div");
  div.className = "centro";
  div.id = "Seccion";

  let total = document.createElement("h2");
  total.className = "total";

  let inputProducto = document.createElement("input");
  inputProducto.type = "text";
  inputProducto.placeholder = "Producto";

  let inputPrecio = document.createElement("input");
  inputPrecio.type = "number";
  inputPrecio.placeholder = "Q 0.00";
  inputPrecio.step = "0.01";

  let btn = document.createElement("button");
  btn.textContent = "Agregar";

  let lista = document.createElement("ul");
  lista.className = "lista";

  let suma = 0;

  // 🔹 Función para actualizar la vista según lo que haya en localStorage
  function render() {
    let productos = obtenerProducto();
    lista.innerHTML = "";
    suma = 0;

    productos.forEach(p => {
      let item = document.createElement("li");
      item.textContent = `${p.nombre} - Q ${p.precio.toFixed(2)}`;
      lista.appendChild(item);
      suma += p.precio;
    });

    total.textContent = "Q " + suma.toFixed(2);
  }

  // 🔹 Al cargar la página mostramos lo que haya
  render();

  // 🔹 Evento agregar producto
  btn.addEventListener("click", () => {
    let nombre = inputProducto.value.trim();
    let valor = parseFloat(inputPrecio.value);

    if (nombre !== "" && !isNaN(valor) && valor > 0) {
      let producto = { nombre, precio: valor };
      guardarProducto(producto);
      render(); // refrescar DOM
      inputProducto.value = "";
      inputPrecio.value = "";
    }
  });

  // 🔹 Detectar cuando se borre o cambie el localStorage desde el DOM
  window.addEventListener("storage", (e) => {
    if (e.key === "carrito") {
      render(); // refrescar la lista
    }
  });

  div.appendChild(total);
  div.appendChild(inputProducto);
  div.appendChild(inputPrecio);
  div.appendChild(btn);
  div.appendChild(lista);

  return div;
}
