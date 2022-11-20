const html = `
<section class="page">
    <h1 class="page_title">Behöver din frilla renoveras?</h1>
    <p class="page_text">Vi har de bästa frisörerna i stan, boka en tid hos oss redan idag!</p>
    <a class="button_solid" href="/boka-tid" title="Boka en tid">Boka en tid</a>
</section>
`;

export default (main) =>
{
    main.insertAdjacentHTML('afterbegin', html);
}