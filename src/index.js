// All css importeras här.
import './css/base.css';
import './css/theme.css';
import './css/state.css';
import './css/module.css';
import './css/layout.css';

// All js importeras här.
import * as router from './js/router.js';

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
        page.default(document.getElementById('main'));
    }
}

// Rensar MAIN elementet.
const clearMain = () =>
{
    const main = document.getElementById('main');
    while(main.firstChild)
    {
        main.removeChild(main.lastChild);
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

    const main = document.createElement('MAIN');
          main.id = "main";

    document.body.appendChild(root);
    root.appendChild(main);

    root.insertAdjacentHTML(`afterbegin`,`
        <a href="/" title="Framsida">Framsida</a>
        <a href="/kontakt" title="Kontakta oss">Kontakt</a>`);
}

// Initierar SPA genom INIT.
// Alla ankar taggar får en ny funktion, som motverkar att webbläsaren
// "laddar-om" sidan.
// Sidan uppdateras till korrekt route.
window.onload = () =>
{

    init();

    document.querySelectorAll('a').forEach(a =>
    {
        a.addEventListener('click', (e) =>
        {
            e.preventDefault();
            history.replaceState(null, null, e.target.href);
            update();
        })
    });

    history.pushState(null, null, window.location);

    update();

}

// I princip: Webbläsar-pilar.
window.onpopstate = (e) =>
{
    update();
}

