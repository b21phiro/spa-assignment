const html = `
<footer id="footer">
    <div class="wrapper">
        <p class="author">b21phiro</p>
    </div>
</footer>
`;

export default () =>
{
    root.insertAdjacentHTML('beforeend', html);
}