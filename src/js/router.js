const routes = [];

const addRoute = (...route) =>
{
    routes.push(route);
}

const handle = () =>
{
    const url = window.location;
    for (let route of routes[0])
    {
        if (route.path == url.pathname)
        {
            return route;
            break;
        }
    }
    return false;
}

export { addRoute, handle }