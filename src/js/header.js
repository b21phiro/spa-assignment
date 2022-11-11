const html = `
<header id="header">
    <div class="wrapper">
        <div class="brand">
            <a class="brand_link" href="/" title="Framsida"></a>
            <p class="brand_text">Klipp Mig Då</p>
        </div>
    </div>
</header>
`;

export default (root) =>
{
    root.insertAdjacentHTML('beforeend', html);
}