interface Student{
    firstName: string;
    lastName: string;
    age: number;
    location: string
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Smith',
    age: 20,
    location: 'San Francisco'
}
const student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 22,
    location: 'New York'
}

const studentsList = [student1, student2]

const table = document.createElement('table')
const tbody = document.createElement('tbody')
table.appendChild(tbody)

studentsList.forEach((student: Student) => {
    const row = document.createElement('tr')
    const nameCell = document.createElement('td')
    const locationCell = document.createElement('td')

    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location

    row.appendChild(nameCell)
    row.appendChild(locationCell)
    tbody.appendChild(row)
})
document.body.appendChild(table)
