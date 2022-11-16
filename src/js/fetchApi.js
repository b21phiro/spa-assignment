const api =
{
    server: './../backend/booking/'
};

const get = (endpoint) =>
{
    return fetch(`${api.server}${endpoint}_XML.php`);
}

export { get };