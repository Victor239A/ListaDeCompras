export function centro() {
  // contenedor principal
  let div = document.createElement("div");
  div.className = "centro";

  // total arriba
  let total = document.createElement("h2");
  total.textContent = "Q 0.00";
  total.className = "total";

  // campo para producto
  let inputProducto = document.createElement("input");
  inputProducto.type = "text";
  inputProducto.placeholder = "Producto";

  // campo para precio
  let inputPrecio = document.createElement("input");
  inputPrecio.type = "number";
  inputPrecio.placeholder = "Q 0.00";
  inputPrecio.step = "0.01";

  // botón
  let btn = document.createElement("button");
  btn.textContent = "Agregar";

  // lista de artículos
  let lista = document.createElement("ul");
  lista.className = "lista";

  // lógica del total
  let suma = 0;
  btn.addEventListener("click", () => {
    let nombre = inputProducto.value.trim();
    let valor = parseFloat(inputPrecio.value);

    if (nombre !== "" && !isNaN(valor) && valor > 0) {
      // sumar al total
      suma += valor;
      total.textContent = "Q " + suma.toFixed(2);

      // mostrar artículo en lista
      let item = document.createElement("li");
      item.textContent = `${nombre} - Q ${valor.toFixed(2)}`;
      lista.appendChild(item);

      // limpiar campos
      inputProducto.value = "";
      inputPrecio.value = "";
    }
  });

  // agregar al contenedor
  div.appendChild(total);
  div.appendChild(inputProducto);
  div.appendChild(inputPrecio);
  div.appendChild(btn);
  div.appendChild(lista);

  return div;
}
