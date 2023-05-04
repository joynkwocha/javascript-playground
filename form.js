class User {
    constructor(firstName, lastName, email, phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
    }
}

const user = [];

const form = document.querySelector("#main_form");

const firstNameInput = document.querySelector('#name');
const lastNameInput = document.querySelector('#last_name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#password');
const tableBody = document.querySelector("#table-body");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    if (form.checkValidity()) {
        let firstsName = firstNameInput.value;
        let lastName = lastNameInput.value;
        let email = emailInput.value;
        let phone = phoneInput.value;

        const newUser = new User(firstsName, lastName, email, phone);
        user.push(newUser);
        console.log(user);

        addToTable(newUser);
        form.reset();
    }
});

function addToTable (user) {
    const tr = document.createElement("tr");
    const firstName = document.createElement("td");
    firstName.textContent = user.firstName; 
    const lastName = document.createElement("td");
    lastName.textContent = user.lastName; 
    const email = document.createElement("td");
    email.textContent = user.email; 
    const phone = document.createElement("td"); 
    phone.textContent = user.phone; 
    const table = document.querySelector("#table-body");

    tr.appendChild(firstName);
    tr.appendChild(lastName);
    tr.appendChild(email);
    tr.appendChild(phone);
    tableBody.appendChild(tr);


    firstName.addEventListener("click", () => {
        const textArea = document.createElement("textarea");
        const updateBtn = document.createElement("button");
        updateBtn.innerText = "Update";
        const container = document.createElement("div");
        container.appendChild(textArea);
        container.appendChild(updateBtn);
        firstName.textContent = "";
        firstName.appendChild(container);
        textArea.value = user.firstName;
        textArea.style.resize = 'none';
        textArea.style.padding = 20 + "px";
        updateBtn.addEventListener("click", (e) => {
            e.stopPropagation();
                firstName.textContent = textArea.value;
                console.log(textArea.value)
                user.firstName = textArea.value;
                container.removeChild(textArea);
        })
    
        textArea.addEventListener("click", (textAreaEvent) => {
            textAreaEvent.stopPropagation();
        });
    });
    
};






