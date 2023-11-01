function submitForm() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const dateOfBirth = document.getElementById('date-of-birth').value;
    const country = document.getElementById('country').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    const message = `
        First Name: ${firstName}
        Last Name: ${lastName}
        Date of Birth: ${dateOfBirth}
        Country: ${country}
        Gender: ${gender}
        Profession: ${profession}
        Email: ${email}
        Mobile: ${mobile}
    `;

    alert(message);
}