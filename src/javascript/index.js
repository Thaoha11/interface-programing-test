const url = 'http://localhost:3000/employees'

const getEmployees = (callback) => {
    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(callback)
}

const createEmployee = (data, callback) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
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

    const submitForm = document.getElementById('submit')
    submitForm.onclick = function () {
        const name = document.querySelector('input[name="name"]').value
        const phone = document.querySelector('input[name="phone"]').value
        const position = document.querySelector('select').value
        const exp = document.querySelector('textarea').value
        const email = document.querySelector('input[type="email"]').value
        const image = document.querySelector('input[type="file"]')

        image.addEventListener('change', (e) => {
            const file = e.target.files[0].name
            console.log(file)
        })

        const formData = {
            name: name,
            phone: phone,
            position: position,
            exp: exp,
            image: image,
            email: email
        }

        createEmployee(formData)

    }


}
const render = () => {

}
getEmployees(render)
handleSubmit()
