export function centro() {
    // contenedor principal
    let div = document.createElement("div");
    div.className = "centro";
  
    // campo para producto (no se usará para almacenar)
    let inputProducto = document.createElement("input");
    inputProducto.type = "text";
    inputProducto.placeholder = "Producto";
  
    // campo para precio (solo este se almacena)
    let inputPrecio = document.createElement("input");
    inputPrecio.type = "number";
    inputPrecio.placeholder = "Q 0.00";
    inputPrecio.step = "0.01";
  
    // botón
    let btn = document.createElement("button");
    btn.textContent = "Agregar";
  
    // total
    let total = document.createElement("h2");
    total.textContent = "Q 0.00";
    total.className = "total";
  
    // lógica del total (solo números)
    let suma = 0;
    btn.addEventListener("click", () => {
      let valor = parseFloat(inputPrecio.value);
      if (!isNaN(valor) && valor > 0) {
        suma += valor;
        total.textContent = "Q " + suma.toFixed(2);
        inputProducto.value = "";
        inputPrecio.value = "";
      }
    });
  
    // agregar al contenedor
    div.appendChild(total);
    div.appendChild(inputProducto);
    div.appendChild(inputPrecio);
    div.appendChild(btn);
  
    return div;
  }
  