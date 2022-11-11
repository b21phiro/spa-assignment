const html = `
<footer id="footer">
    <div class="wrapper"></div>
</footer>
`;

export default (root) =>
{
    root.insertAdjacentHTML('beforeend', html);
}