const html = `
<section>
    <h1>Logga in</h1>
    <p>Som inloggad användare kan du boka tider hos oss snabbt och enkelt!</p>    
</section>
<form method="post">

    <!--Mejl address-->
    <label>
        <p>Mejl address</p>
        
    </label>
    
</form>
`;

export default (main) =>
{
    main.insertAdjacentHTML('afterbegin', html);
}