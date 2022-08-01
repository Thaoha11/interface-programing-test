
var url = "https://freemind-test.netlify.app/.netlify/functions/test"

const start = () => {
    getEmployees()
    handleSubmit()
}
const getEmployees = (callback) => {
    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(callback)
}

const createEmployees = (data, callback) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(data)
    }
    fetch(url, options)
        .then(function (response) {
            response.json()
        })
        .then(callback)
}


const handleSubmit = () => {
    var submitForm = document.getElementById('submit')
    submitForm.onclick = function () {
        const name = document.querySelector('input[name="name"]').value
        const phone = document.querySelector('input[name="phone"]').value
        const position = document.querySelector('select').value
        const exp = document.querySelector('textarea').value
        const email = document.querySelector('input[type="email"]').value
        const image = document.querySelector('#input').files[0].name;

        const formData = {
            name: name,
            phone: phone,
            position: position,
            exp: exp,
            image: image,
            email: email
        }
        createEmployees(formData)
    }

}
start()
