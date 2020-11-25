console.log('starting Script.....');

// Employees Array
let Employees = [];

// Generating Random Company
const companies = ['RawEngineering', 'ContentStack', 'SurfBoard'];
const random = () => {
    return Math.floor(Math.random() * companies.length);
}

const Employee = function (firstName, lastName) {
    this.empid = faker.random.uuid();
    this.firstName = firstName;
    this.lastName = lastName;
    this.company = companies[random()];
    this.email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${this.company.toLowerCase()}.com`;
    
};

const table = document.getElementsByClassName('table')[0];

// Create Card Function
const createCard = (firstName, lastName, company) => {

    // creating card
    const card = document.createElement('div');
    card.classList.add('card');

    // creating img child 
    const profilePic = document.createElement('div');
    profilePic.classList.add('profile-pic');

    // creating name of Employee child
    const employeeName = document.createElement('h5');
    employeeName.classList.add('name');
    employeeName.innerHTML = `${firstName} ${lastName}`;

    // creating company child
    const companyName = document.createElement('p');
    companyName.innerText = company;
    companyName.classList.add('company');

    // appending to childs card;
    card.append(profilePic);
    card.append(employeeName);
    card.append(companyName);

    return card;
}

const createEmployee = (firstName, lastName) => {
    const employee = new Employee(firstName, lastName);
    Employees.push(employee);
    table.appendChild(createCard(firstName,lastName,employee.company));
    console.log(Employees);
    return employee;
}

console.log(Employees);