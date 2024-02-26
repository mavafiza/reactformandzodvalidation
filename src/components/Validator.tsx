export default function validateForm({ name, age, email, password }) {
	if (!name.trim()) {
		return 'Username required';
	} else if (!isNaN(Number(name))) { 
        return 'Username cannot be a number';
    }

	if (!age) {
        return 'Age required';
    } else if (isNaN(parseInt(age)) || parseInt(age) <= 18) { // Verificar si age es un número entero mayor a 18
        return 'Age must be an integer greater than 18';
    }

	const regex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!email) {
		return 'Email required';
	} else if (regex.test(email.toLocalLowerCase)) {
		return 'Email address is invalid';
	}
	if (!password) {
		return 'Password is required';
	} else if (password.length < 6) {
		return 'Password needs to be 6 characters or more';
	}

	return null;
}