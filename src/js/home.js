const html = `
<h1>Framsida!</h1>
`;

export default (main) =>
{
    main.insertAdjacentHTML('afterbegin', html);
}