export function header(){

    let header = document.createElement('header');
    header.className = "header";

    let img = document.createElement('img')
    img.src = "assets/descarga.png"
    header.appendChild(img)
    img.className = "img";
    
    return header;
}