function descargar(nombreContenedor) {
    const div = document.getElementById(nombreContenedor);
    if (!div) {
        console.error("No se encontró el contenedor:", nombreContenedor);
        return;
    }

    html2canvas(div).then(canvas => {
        const enlace = document.createElement("a");
        enlace.href = canvas.toDataURL("image/png");
        enlace.download = "header.png";
        enlace.click();
    });
}

export { descargar };
