const html = `
<h1>Logga in!</h1>
`;

export default (main) =>
{
    main.insertAdjacentHTML('afterbegin', html);
}