export default (main = null) =>
{
    sessionStorage.clear();
    history.replaceState(null, null, '/');
    location.reload();
}