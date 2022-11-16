const api =
{
    server: './Webbprogrammering-Examples-master/booking'
};

const get = (endpoint) =>
{
    try
    {
        return fetch(`${api.server}${endpoint}_XML.php`);
    } catch(exception)
    {
        return console.error(exception);
    }
}

export { get };