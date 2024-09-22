let btn = document.getElementById('generate_btn')
btn.addEventListener('click', function() {
    const captcha = generate_captcha(5); // Change the number to adjust string length
    document.getElementById('captcha').innerText = captcha;
});

function generate_captcha(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}
