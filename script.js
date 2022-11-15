
function GetFormData() {
    document.getElementById('form').addEventListener('submit', function(event){
        event.preventDefault()
})

let Name = document.getElementById('Name').value;
let Age = document.getElementById('Age').value;
let birthDate = document.getElementById('birthDate').value;

let Person =
{Name: Name,
    Age: Age,
    birthDate: birthDate}

console.log(Person)
}