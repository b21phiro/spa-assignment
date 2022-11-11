const html = `
<aside id="menu">
    <div id="menuBackground" class="menu_background"></div>
    <div class="menu_inner">
        <h4 class="menu_title">Navigation</h4>
        <nav class="menu_nav">
            <a class="menu_link" href="/" title="Hem">
                Hem
                <svg class="feather feather-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
            <a class="menu_link" href="boka-tid" title="Boka tid">
                Boka tid
                <svg class="feather feather-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
        </nav>
        <h4 class="menu_title">Funktioner</h4>
        <nav class="menu_nav">
            <a class="menu_link" href="/logga-in" title="Logga in">
                Logga in
                <svg class="feather feather-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </a>
        </nav>
    </div>
</aside>
`;

const currentAnchor = () =>
{
    const links = document.querySelectorAll('.menu_link');
    for (let link of links)
    {
        if (link.pathname == window.location.pathname)
        {
            link.classList.add('is_current');
            break;
        }
    }
}

const toggleMenu = () =>
{
    const menu = document.getElementById('menu');
    const background = menu.children[0];
    const inner = menu.children[1];

    const isShowingClass = 'is_showing';
    const menuShowClass = 'is_open';

    const animationSpeedInMs = 150;

    if (menu.classList.contains(menuShowClass))
    {
        background.classList.remove(isShowingClass);
        inner.classList.remove(isShowingClass);
        setTimeout(() => {
            menu.classList.remove(menuShowClass);
        }, animationSpeedInMs);
    }
    else
    {
        menu.classList.add(menuShowClass);
        setTimeout(() => {
            background.classList.add(isShowingClass);
            inner.classList.add(isShowingClass);
        }, animationSpeedInMs);
    }
}

export default (root) =>
{
    root.insertAdjacentHTML('beforeend', html);
    currentAnchor();

    document.getElementById('menuButton')
        .addEventListener('click', toggleMenu);

    document.getElementById('menuBackground')
        .addEventListener('click', toggleMenu);
}