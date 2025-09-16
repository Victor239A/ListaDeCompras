import { header } from "./componentes/header/header.js";
import { seccion } from "./componentes/task/task.js";
import { centro } from "./componentes/seccion/seccion.js";
import { formulario } from "./componentes/footer/footer.js";

function main() {
    let section = document.createElement('section');

    section.appendChild(header());

    section.appendChild(seccion());

    section.appendChild(centro());

    section.appendChild(formulario());

    return section;
}

document.body.appendChild(main());