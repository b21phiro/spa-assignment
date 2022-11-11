const html = `
<h1>Boka tid!</h1>
`;

export default (main) =>
{
    main.insertAdjacentHTML('afterbegin', html);
}