const html = `
<main id="main">
    <div class="wrapper"></div>
</main>
`;

export default (root) =>
{
    root.insertAdjacentHTML('beforeend', html);
}