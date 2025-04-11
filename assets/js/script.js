function validateForm() {
    let valid = true;

    document.getElementById('error-name').innerText = '';
    document.getElementById('error-email').innerText = '';
    document.getElementById('error-phone').innerText = '';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();


    if (name === '') {
    document.getElementById('error-name').innerText = 'Name is required.';
    valid = false;
    }


    if (email === '') {
    document.getElementById('error-email').innerText = 'Email is required.';
    valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    document.getElementById('error-email').innerText = 'Email is invalid.';
    valid = false;
    }


    if (phone === '') {
    document.getElementById('error-phone').innerText = 'Phone number is required.';
    valid = false;
    } else if (!/^\d{7,15}$/.test(phone)) {
    document.getElementById('error-phone').innerText = 'Enter a valid phone number.';
    valid = false;
    }

    return valid;
}