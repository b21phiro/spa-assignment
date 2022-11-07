const html = `
<h1>Kontakt!</h1>
`;

export default (main) =>
{
    main.insertAdjacentHTML('afterbegin', html);
}