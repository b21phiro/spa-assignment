const html = `
<section class="page">
    <h1 id="title" class="page_title">Behöver din frilla renoveras?</h1>
    <p class="page_text">Vi har de bästa frisörerna i stan, boka en tid hos oss redan idag!</p>
    <a class="button_solid" href="/boka-tid" title="Boka en tid">Boka en tid</a>
</section>
`;

function greetUser(name)
{
    document.getElementById('title')
        .innerHTML = `Hej <span class="highlight">${name}</span>! Behöver du klippa dig?`;
}

export default (main) =>
{
    main.insertAdjacentHTML('afterbegin', html);

    if (sessionStorage.getItem('id'))
    {
        const user = { id: sessionStorage.getItem('id'), name: sessionStorage.getItem('name') };
        greetUser(user.name);
    }
}