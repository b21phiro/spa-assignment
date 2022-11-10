// All css importeras här.
import './css/base.css';
import './css/theme.css';
import './css/state.css';
import './css/module.css';
import './css/layout.css';

// All js importeras här.
import * as router from './js/router.js';
import main from './js/main.js';
import header from './js/header.js';
import footer from './js/footer.js';

// Lägger in alla valida-rutter hos routern.
router.addRoute
(
    {
        path: "/",
        title: "Framsida",
        page: import('./js/home')
    },
    {
        path: "/kontakt",
        title: "Kontakt",
        page: import('./js/contact')
    },
);

// Uppdaterar sidan beroende på URL.
const update = async () =>
{
    // Rensar innehållet ur MAIN.
    clearMain();

    // Hämtar nuvarande sida, om det finns någon.
    const result = router.handle();

    // Om det inte finns en sida, visas ett 404 error.
    // Annars hämtas sidan, och monteras på MAIN elementet.
    if (!result)
    {
        console.error("Error 404");
    }
    else
    {
        const page = await result.page;
        documentTitle(result.title);
        page.default(document.getElementById('main').children[0]);
    }
}

// Rensar MAIN elementet.
const clearMain = () =>
{
    const main = document.getElementById('main');
    const wrapper = main.children[0];
    while(wrapper.firstChild)
    {
        wrapper.removeChild(wrapper.lastChild);
    }
}

// Byter ut dokument titeln till en ny text.
const documentTitle = (text) =>
{
    document.title = `${text} | Klipp Mig`;
}

// Initierar SPA, genom att först skapa rot-elementet (som allt monteras på).
// HEADER, MAIN och FOOTER element skapas här med.
const init = () =>
{
    const root = document.createElement('DIV');
          root.id = "root";

    document.body.appendChild(root);

    header(root);
    main(root);
    footer(root);
}

// Initierar SPA genom INIT.
// Alla ankar taggar får en ny funktion, som motverkar att webbläsaren
// "laddar-om" sidan.
// Sidan uppdateras till korrekt route.
window.onload = () =>
{

    init();

    history.replaceState(null, null, window.location);

    update();

}

// I princip: Webbläsar-pilar.
window.onpopstate = (e) =>
{
    e.preventDefault();
    history.replaceState(null, null, window.location);
    update();
}

window.onclick = (e) =>
{
    if (e.target.tagName == 'A' && e.target.target != '_blank')
    {
        e.preventDefault();
        history.pushState(null, null, new URL(e.target.href));
        update();
    }
}

