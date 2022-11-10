const html = `
<header id="header">
    <div class="wrapper">
        <div class="brand">
            <a class="brand_link" href="/" title="Hem"></a>
            <p class="brand_logotype">Klipp.</p>
        </div>
        <button id="menuButton" class="button" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="feather feather-menu">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
        </button>
    </div>
</header>
`;

export default (root) =>
{
    root.insertAdjacentHTML('beforeend', html);
}