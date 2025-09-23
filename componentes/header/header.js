import { descargar } from "../download/download.js"; 

export function header() {
    let header = document.createElement('header');
    header.className = "header";
    header.id = "miHeader"; 

    let img = document.createElement('img');
    img.src = "assets/descarga.png";
    img.className = "img";
    
    img.addEventListener("click", () => {
        descargar("Seccion"); 
    });

    header.appendChild(img);
    return header;
}
