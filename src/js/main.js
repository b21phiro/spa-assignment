const html = `
<main id="main">
    <div class="wrapper"></div>
</main>`;

// Rensar MAIN elementet.
const clearMain = () =>
{
    const main = document.getElementById('main');
    while(main.firstChild)
    {
        main.removeChild(main.lastChild);
    }
}

export default (root) =>
{
    root.insertAdjacentHTML('beforeend', html);
}