import emailjs from '@emailjs/browser';
export const sendEmail = (e,errorMessage) => {
    
    e.preventDefault();
    errorMessage.length===0&&emailjs
        .sendForm('service_qtp6nzh', 'template_7nm78bf', e.target, {
            publicKey: '4kC_Mg0f7T03H6ZlE',
        })
        .then(
            () => {
                window.scrollTo(0, 0);
                window.location.reload();
                alert("Vaš oglas je zaprimljen. Odgovoriti ćemo vam u najkraćem mogućem roku.");
            },
            (error) => {
                console.log('FAILED...', error.text);
                alert("Došlo je do greške, pokušajte ponovo!");
            },
        );
}
   