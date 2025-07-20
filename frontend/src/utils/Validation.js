export function checkLength(text, minLimit = 1, maxLimit = undefined) {
    const trimmed = text.trim();
    if (trimmed.length < minLimit)
        return false;
    if (maxLimit !== undefined && trimmed.length > maxLimit)
        return false;
    return true;
}

export function checkName(name) {
    const trimmed = name.trim();
    if (/^[A-Za-z\s.'’,\-]+$/.test(trimmed) && trimmed.length >= 3 && trimmed.length <= 50)
        return true;
    return false;
}

export function validateEmail(email) {
    const format = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return format.test(email);
}

export function validatePassword(password) {
    // Needs update to allow special characters..
    const format = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d.!@#$%^&*]{10,}$/;
    if ((password.length) > 200) return false
    return format.test(password);
}

