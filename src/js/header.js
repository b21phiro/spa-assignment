const html = `
<header id="header">
    <div class="wrapper">
        <div class="brand">
            <a class="brand_link" href="/" title="Hem"></a>
            <p class="brand_logotype">Klipp.</p>
        </div>
        <nav class="header_nav">
            <a class="header_link" href="/" title="Hem">Hem</a>
            <a class="header_link" href="/boka-tid">Boka</a>
            <a id="anchor_login" class="header_link" href="logga-in" title="Logga in">Logga in</a>
            <a id="anchor_logout" class="header_link" href="logga-ut" title="Logga ut">Logga ut</a>
        </nav>
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

const inSession = () =>
{
    document.getElementById('anchor_login')
        .style.display = 'none';
    document.getElementById('anchor_logout')
        .style.display = 'inline-flex';
}

const notInSession = () =>
{
    document.getElementById('anchor_login')
        .style.display = 'inline-flex';
    document.getElementById('anchor_logout')
        .style.display = 'none';
}

const clickAnimation = (elem) =>
{
    elem.classList.add('pressed');
    setTimeout(() =>
    {
        elem.classList.remove('pressed');
    }, 150)
}

export default (root) =>
{
    root.insertAdjacentHTML('beforeend', html);

    document.getElementById('menuButton')
        .addEventListener('click', (e) =>
        {
            clickAnimation(document.getElementById('menuButton'));
        });

    if (sessionStorage.getItem('id'))
    {
        inSession();
    }
    else
    {
        notInSession();
    }
}