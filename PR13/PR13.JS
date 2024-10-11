const studentForm = document.getElementById("studentForm");
const studentTableBody = document.getElementById("studentTableBody");
let students = [];
let currentEditingIndex = null;
studentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const grade = document.getElementById("grade").value;
    const gender =

        document.querySelector('input[name="gender"]:checked').value;

    const hobbies = [];
    const hobbyInputs =

        document.querySelectorAll('input[name="hobbies"]:checked');

    hobbyInputs.forEach((input) => {
        hobbies.push(input.value);
    });
    const student = { name, age, grade, gender, hobbies };
    if (currentEditingIndex !== null) {
        students[currentEditingIndex] = student;
        currentEditingIndex = null;
    } else {
        students.push(student);
    }
    renderStudentTable();
    studentForm.reset();
});
function renderStudentTable() {
    studentTableBody.innerHTML = '';
    students.forEach((student, index) => {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
<td>${student.name}</td>
<td>${student.age}</td>
<td>${student.grade}</td>
<td>${student.gender}</td>
<td>${student.hobbies.join(", ")}</td>
<td>
<button class='btn btn-primary edit-btn'>Edit</button>
<button class='btn btn-danger delete-btn'>Delete</button>
</td>`;
        studentTableBody.appendChild(newRow);
        newRow.querySelector(".delete-btn").addEventListener("click", ()=> {

            students.splice(index, 1);
            renderStudentTable();
        });
        newRow.querySelector(".edit-btn").addEventListener("click", () => {

            document.getElementById("name").value = student.name;
            document.getElementById("age").value = student.age;
            document.getElementById("grade").value = student.grade;
            document.querySelector(`input[name="gender"][value="${student

                .gender}"]`).checked = true;

            document.querySelectorAll('input[name="hobbies"]').forEach(input => {

                input.checked = student.hobbies.includes(input.value);
            });
            currentEditingIndex = index;
        });
    });
}