import emailjs from '@emailjs/browser';
export const sendEmail = (e) => {
    e.preventDefault();
    emailjs
        .sendForm('service_qtp6nzh', 'template_7nm78bf', e.target, {
            publicKey: '4kC_Mg0f7T03H6ZlE',
        })
        .then(
            () => {
                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );
};