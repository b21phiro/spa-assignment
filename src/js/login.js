const html = `
<div id="login">
    <section class="section">
        <h1 class="section_title">Logga in</h1>
        <p class="section_text">Som inloggad användare kan du boka tider hos oss snabbt och enkelt!</p>    
    </section>
    <form id="loginForm" class="form" method="post">
    
        <div class="notice">
            <svg class="notice_symbol feather feather-alert-triangle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            <section class="notice_section">
                <h4 class="notice_title">Oj hehe!</h4>
                <p classs="notice_text">Något gick snett, prova igen!</p>
            </section>
        </div>
    
        <!--Mejl address-->
        <label class="input">
            <p class="input_label">Mejl address</p>
            <input class="input_field" type="email" name="email" title="Email"/>
            <div class="input_notice">
                <svg class="feather feather-alert-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <p class="input_notice_text">Något gick fel!</p>
            </div>
        </label>
        
        <!--Mobilnummer-->
        <label class="input">
            <p class="input_label">Mobilnummer</p>
            <input class="input_field" type="tel" name="tel" title="Mobilnummer"/>
            <div class="input_notice">
                <svg class="feather feather-alert-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <p class="input_notice_text">Något gick fel!</p>
            </div>
        </label>
        
        <!--Håll mig inloggad-->
        <label id="checkboxLabel" class="checkbox" for="keepSession" title="Håll mig inloggad" >
            <svg class="feather feather-check-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <polyline points="9 11 12 14 22 4"></polyline>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
            </svg>
            <svg class="feather feather-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            </svg>
            <p>Håll mig inloggad!</p>
        </label>
        
        <input id="keepSession" style="display:none;" type="checkbox" name="keepSession"/>
        
        <input class="button button_solid" type="submit" name="submit" value="Logga in" title="Logga in"/>
        
    </form>
</div>
`;

// Visar felmeddelande under input inom "input_notice" diven.
// Kräver att input har ett sådant "input_notice" element,
// annars ger ett falskt resultat.
// Tar emot ett meddelande med, som printas ut.
const displayInputError = (input, msg) =>
{
    const label = input.parentNode;
    let noticeDIV;
    for(let child of label.children)
    {
        if (child.classList.contains('input_notice'))
        {
            noticeDIV = child;
            break;
        }
    }
    if (!noticeDIV)
    {
        console.error("Input does not have an \"input_notice\" div-element!");
        return false;
    }
    label.classList.add('have_error');
    noticeDIV.children[1].innerText = msg;
}

// Tar bort "have_error" klassen från input-etiketten.
const removeInputError = (input) =>
{
    input.parentNode.classList.remove('have_error');
}

// Validerar fel hos alla element som get.
// Hittas inget, ges resultatet "sant" tillbaka.
// Hittas det något fel i någon av inmatningarna, ges ett falskt resultat tillbaka.
// Beroende av "displayInputError" och "removeInputError" funktionerna, för
// att visa felmeddelanden hos inmatningarnas felrutor.
const validateFormElements = (elements) =>
{

    let result = true;

    const email_regexp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
    const tel_regexp = new RegExp(/^((((0{2}?)|(\+){1})46)|0)7[\d]{8}/g);

    for (let input of elements)
    {
        switch (input.type)
        {
            case 'email':
                if (!email_regexp.test(input.value))
                {
                    result = false;
                    displayInputError(input, "Nja, tror inte riktigt på den där mejladressen.");
                }
                else
                {
                    removeInputError(input);
                }
                break;
            case 'tel':
                if (!tel_regexp.test(input.value))
                {
                    result = false;
                    displayInputError(input, "Hmm, ser inte ut att vara ett kontaktbart nummer!");
                }
                else
                {
                    removeInputError(input);
                }
                break;
            default:
                continue;
                break;
        }
    }
    return result;
}

export default (main) =>
{
    main.insertAdjacentHTML('afterbegin', html);

    // Checkar i boxen
    document.querySelector('#keepSession').addEventListener('change', (e) =>
    {
        if (e.target.checked)
        {
            document.getElementById('checkboxLabel').classList.add('is_checked');
        }
        else
        {
            document.getElementById('checkboxLabel').classList.remove('is_checked');
        }
    });

    document.getElementById('loginForm').onsubmit = (e) =>
    {
        e.preventDefault();
        const form = e.target;
        const result = validateFormElements(form.elements);
        if (!result)
        {
            console.log("FAIL");
        }
        else
        {
            alert("SUBMIT");
        }
    }

}