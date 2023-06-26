    window.addEventListener("DOMContentLoaded", () => {
        const storedValue = localStorage.getItem("userData");
        if (storedValue) {
            users = JSON.parse(storedValue);
            users.forEach(user => {
                addToTable(user);
            });
            const lastItem = users[users.length-1];
            availableId = ++lastItem.id;
        };
    });

class User {
    constructor(id, firstName, lastName, email, phone) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
    };
};

let users = [];
let availableId = 0;

const form = document.querySelector("#main_form");

const firstNameInput = document.querySelector('#name');
const lastNameInput = document.querySelector('#last_name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#password');
const tableBody = document.querySelector("#table-body");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: formData,
       
    }).then((response) => {
        if ( response.ok) {
            return response.json();
        } else {
            throw new Error('Form submission failed');
        }
    }).then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    })

    
    if (form.checkValidity()) {
        let firstsName = firstNameInput.value;
        let lastName = lastNameInput.value;
        let email = emailInput.value;
        let phone = phoneInput.value;

        const newUser = new User(availableId++, firstsName, lastName, email, phone);
        users.push(newUser);

        addToTable(newUser);

        let uploadedUser = localStorage.getItem("userData");
        let people;
        if(uploadedUser) {
            people = JSON.parse(uploadedUser);
         } else {
            people = [];
        };

        people.push(newUser);
        const stringifedPeople = JSON.stringify(people);
        localStorage.setItem("userData",stringifedPeople);

        form.reset();
    };
});

const erro = "User not found"
const getData = document.querySelector("#fetch_btn");
const fetchInput = document.querySelector("#desiredName");
const fetchForm = document.querySelector("#fetchForm");

getData.addEventListener("click", () => {
    let retrived = localStorage.getItem("userData");
    const retrivedArray = JSON.parse(retrived);

    for(let i = 0; i < retrivedArray. length; i++) {
        const retrivedUser = retrivedArray[i];
        if(retrivedUser.firstName === fetchInput.value) {
            firstNameInput.value = retrivedUser.firstName;
            lastNameInput.value = retrivedUser.lastName;
            emailInput.value = retrivedUser.email;
            phoneInput.value = retrivedUser.phone;
            const tableRow = document.getElementById(retrivedUser.id);
            if(tableRow) {
                tableRow.remove();
            };
            localStorage.setItem("userData", JSON.stringify(retrivedArray));
        };
        break;
    };
    fetchForm.reset();
});

let editableTd;
let editableTdType;

function addToTable(user) {
    const tr = document.createElement("tr");
    tr.id = user.id;
    const firstName = document.createElement("td");
    firstName.setAttribute('data-tdtype', 'firstName');
    firstName.textContent = user.firstName;
    const lastName = document.createElement("td");
    lastName.setAttribute('data-tdtype', 'lastName');
    lastName.textContent = user.lastName;
    const email = document.createElement("td");
    email.setAttribute('data-tdtype', 'email');
    email.textContent = user.email;
    const phone = document.createElement("td");
    phone.setAttribute('data-tdtype', 'phone');
    phone.textContent = user.phone;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    const table = document.querySelector("#table-body");

    tr.appendChild(firstName);
    tr.appendChild(lastName);
    tr.appendChild(email);
    tr.appendChild(phone);
    tr.appendChild(deleteBtn);
    tableBody.appendChild(tr);

    deleteBtn.addEventListener("click", (event) => {
        let tr = event.target.closest("tr");
        tr.remove();
        const userId = Number(tr.id);
        for (let i = 0; i < users.length; i++) {
            if (users[i].id === userId) {
                users.splice(i, 1);
                break;
            };
        };

        let itemtoBeRemoved = localStorage.getItem("userData");
        const itemReterived = JSON.parse(itemtoBeRemoved);
        const remainingItems = itemReterived.filter(item => item.id !== userId);

        const returnRemaingValue = JSON.stringify(remainingItems);
        localStorage.setItem("userData", returnRemaingValue);
    });  
    
    table.addEventListener("click", (event) => {
        const td = event.target.closest('td');

        if (event.target !== td) return;

        if(editableTd && editableTd !== td) {
            const container = editableTd.querySelector(".edit-container");
            const textArea = container.querySelector("textArea");
            editableTd.textContent = textArea.value;
            container.remove();
        };

        if(editableTd !== td) {
            const textArea = document.createElement("textarea");
            textArea.value = td.textContent;
            const updateBtn = document.createElement("button");
            updateBtn.innerText = "Update";
            updateBtn.id = td.parentNode.id; 
            console.log(updateBtn.id)
            const container = document.createElement("div");
            container.classList.add("edit-container"); 
            container.appendChild(textArea);
            container.appendChild(updateBtn);
            td.textContent = "";
            td.appendChild(container);
            textArea.style.resize = 'none';
            textArea.style.padding = 20 + "px";
            
            updateBtn.addEventListener("click", (e) => {
                e.stopPropagation();

                const localstorageData = localStorage.getItem("userData");
                const parsedStorageData = JSON.parse(localstorageData);

                for(let i = 0; i < parsedStorageData.length; i++) {
                    let eachUser = parsedStorageData[i];

                    if(eachUser.id === Number(updateBtn.id) ) {
                        eachUser[editableTdType] = updateBtn.parentNode.firstChild.value;
                    } 
                };
                localStorage.setItem("userData", JSON.stringify(parsedStorageData));
                td.textContent = textArea.value;
                container.remove();
                editableTd = null;
            });

            textArea.addEventListener("click", (textAreaEvent) => {
                textAreaEvent.stopPropagation();
            });
            editableTd = td;
            editableTdType = td.dataset.tdtype;
        };
    });
};

