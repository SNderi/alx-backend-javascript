export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Amanda",
  lastName: "Wairimu",
  age: 18,
  location: "Kirinyaga",
}

const student2: Student = {
  firstName: "Yanrique",
  lastName: "Ouma",
  age: 34,
  location: "Kisumu",
}

const studentsList: Array<Student> = [
  student1,
  student2,
];

const styleSheet = `
  html {
    margin: 0;
    height: 100%;
  }
  body {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    margin: 10%;
  }
  table {
    border-collapse: collapse;
  }
  thead {
    font-weight: bold;
  }
  td {
    padding: 10px;
    border: 1px solid gray;
    cursor: pointer;
  }
  td:hover {
    background: gainsboro;
  }
  td:nth-child(1) {
    text-align: center;
  }
`;

export const studentsTable = (students: Array<Student>): void => {
  const table = document.createElement('table');
  const th = document.createElement('thead');
  const tr = document.createElement('tr');
  const tb = document.createElement('tbody');
  tr.insertAdjacentHTML('beforeend', '<td>FirstName</td>');
  tr.insertAdjacentHTML('beforeend', '<td>Location</td>');
  th.insertAdjacentElement('beforeend', tr);

  for (const student of students) {
    const br = document.createElement('tr');
    br.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    br.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    tb.insertAdjacentElement('beforeend', br);
  }

  table.insertAdjacentElement('beforeend', th);
  table.insertAdjacentElement('beforeend', tb);
  document.body.insertAdjacentElement('beforeend', table);
};

studentsTable(studentsList);
const styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = styleSheet;
document.head.insertAdjacentElement('beforeend', styleSheetElement);
document.title = 'Task 0';
