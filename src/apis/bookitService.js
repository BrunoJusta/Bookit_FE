import API_URL from './config.js'
import router from '../router';

const bookitService = {

    async getMenus() {
        const response = await fetch(`${API_URL}menus`, {
            method: "GET"
        })

        if (response.ok) {
            return response.json()
        } else {
            throw Error(response)
        }

    },
    async getMenuTypes() {
        const response = await fetch(`${API_URL}menuTypes`, {
            method: "GET"
        })

        if (response.ok) {
            return response.json()
        } else {
            throw Error(response)
        }

    },
    async registerUser(name, lastName, number, email, birthDate, genre, password, password2) {
        alert(name)
        const response = await fetch(`${API_URL}users`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=utf-8'
              },
            body: JSON.stringify({
                name: name,
                lastName: lastName,
                number: number,
                email: email,
                birthDate: birthDate,
                genre: genre,
                password: password,
                password2: password2
            })
        })

        if (response.ok) {
            return response.json()
        } else {
            throw Error(response)
        }
    },
    async login(email,password) {
        const response = await fetch(`${API_URL}login`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=utf-8'
              },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })

        if (response.ok) {
                router.push({
                name: 'home',
                       })
            return response.json()
        } else {
            throw Error(response)
        }
    }




}

export default bookitService;