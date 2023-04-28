class User {
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    };
};

const form = document.querySelector("#main_form");

const firstNameInput = document.querySelector('#name');
const lastNameInput = document.querySelector('#last_name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm_password');
const visibility = document.querySelector('.fa-regular');

const formContainer = document.querySelectorAll("#form_group");
formContainer.forEach((container) => {
    let children = container.children;
    for (let child of children) {
        child.addEventListener("input", () => {
            if (!child.checkValidity() === true) {
                child.classList.add("previously-focused");

            } else {
                child.classList.remove("previously-focused");
            };
        });
        child.addEventListener("blur", () => {
            if (!child.checkValidity() === true) {
                child.classList.remove("previously-focused");
            };
        });
    };
});

visibility.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        visibility.classList.remove("fa-eye-slash");
        visibility.classList.add("fa-eye");

    } else {
        passwordInput.type = "password";
        visibility.classList.remove("fa-eye");
        visibility.classList.add("fa-eye-slash");
    };
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.setAttribute("novalidate", "")
    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordInput.setCustomValidity('Passwords do not match.');

    } else {
        confirmPasswordInput.setCustomValidity('');
    };

    confirmPasswordInput.reportValidity();

    let firstsName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let email = emailInput.value;
    let password = passwordInput.value;
    let confirmpassword = confirmPasswordInput.value;

    const newUser = new User(firstsName, lastName, email, password, confirmpassword);

    console.log(newUser.firstName);
    form.reset();
});


