import API_URL from './config.js'
import router from '../router';
import store from '../store';

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
    async getAreas() {
        const response = await fetch(`${API_URL}areas`, {
            method: "GET"
        })
        if (response.ok) {
            return response.json()
        } else {
            throw Error(response)
        }
    },
    async getWorkshops() {
        const response = await fetch(`${API_URL}workshops`, {
            method: "GET"
        })
        if (response.ok) {
            return response.json()
        } else {
            throw Error(response)
        }
    },
    async getSchools() {
        const response = await fetch(`${API_URL}schools`, {
            method: "GET"
        })
        if (response.ok) {
            return response.json()
        } else {
            throw Error(response)
        }
    },
    async getIngredients() {
        let user
        if (localStorage.getItem("loggedUser")) {
            user = JSON.parse(localStorage.getItem("loggedUser"))
        }
        const response = await fetch(`${API_URL}ingredients`, {
            method: "GET",
            headers: {
                'x-access-token': user.token
            },
        })
        if (response.ok) {
            return response.json()
        } else {
            throw Error(response)
        }
    },
    async getExtras() {
        let user
        if (localStorage.getItem("loggedUser")) {
            user = JSON.parse(localStorage.getItem("loggedUser"))
        }
        const response = await fetch(`${API_URL}extras`, {
            method: "GET",
            headers: {
                'x-access-token': user.token
            },
        })
        if (response.ok) {
            return response.json()
        } else {
            throw Error(response)
        }
    },
    async getDecorations() {
        let user
        if (localStorage.getItem("loggedUser")) {
            user = JSON.parse(localStorage.getItem("loggedUser"))
        }
        const response = await fetch(`${API_URL}decors`, {
            method: "GET",
            headers: {
                'x-access-token': user.token
            },
        })
        if (response.ok) {
            return response.json()
        } else {
            throw Error(response)
        }
    },
    async getOutfits() {
        let user
        if (localStorage.getItem("loggedUser")) {
            user = JSON.parse(localStorage.getItem("loggedUser"))
        }
        const response = await fetch(`${API_URL}outfits`, {
            method: "GET",
            headers: {
                'x-access-token': user.token
            },
        })
        if (response.ok) {
            return response.json()
        } else {
            throw Error(response)
        }
    },
    async getUsers() {
        let user
        if (localStorage.getItem("loggedUser")) {
            user = JSON.parse(localStorage.getItem("loggedUser"))
        }
        const response = await fetch(`${API_URL}users`, {
            method: "GET",
            headers: {
                'x-access-token': user.token
            },
        })
        if (response.ok) {
            return response.json()
        } else {
            throw Error(response)
        }
    },
    async editUsers(ID, newPassword, newPassword2, newNumber, newType) {
        alert(newType)
        let user
        if (localStorage.getItem("loggedUser")) {
            user = JSON.parse(localStorage.getItem("loggedUser"))
        }
        const response = await fetch(`${API_URL}users/${ID}`, {
            method: "PUT",
            headers: {
                'x-access-token': user.token
            },
            body: JSON.stringify({
                newPassword: newPassword,
                newPassword2: newPassword2,
                newNumber: newNumber,
                type: newType
            })
        })
        if (response.ok) {
            return response.json()
        } else {
            throw Error(response)
        }
    },
    async getCurrentMenu(ID) {
        let user
        if (localStorage.getItem("loggedUser")) {
            user = JSON.parse(localStorage.getItem("loggedUser"))
        }
        const response = await fetch(`${API_URL}menus/${ID}`, {
            method: "GET",
            headers: {
                'x-access-token': user.token
            },
        })
        if (response.ok) {
            return response.json()
        } else {
            throw Error(response)
        }
    },
    async getCurrentMenuIngs(ID) {
        let user
        if (localStorage.getItem("loggedUser")) {
            user = JSON.parse(localStorage.getItem("loggedUser"))
        }
        const response = await fetch(`${API_URL}menus/${ID}/ingredients`, {
            method: "GET",
            headers: {
                'x-access-token': user.token
            },
        })
        if (response.ok) {
            return response.json()
        } else {
            throw Error(response)
        }
    },
    async getCurrentArea(ID) {
        let user
        if (localStorage.getItem("loggedUser")) {
            user = JSON.parse(localStorage.getItem("loggedUser"))
        }
        const response = await fetch(`${API_URL}areas/${ID}`, {
            method: "GET",
            headers: {
                'x-access-token': user.token
            },
        })
        if (response.ok) {
            return response.json()
        } else {
            throw Error(response)
        }
    },
    async logout() {
        let user
        if (localStorage.getItem("loggedUser")) {
            user = JSON.parse(localStorage.getItem("loggedUser"))
        }
        const response = await fetch(`${API_URL}logout`, {
            method: "POST",
            headers: {
                'x-access-token': user.token
            },
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
    async login(email, password) {
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
            return response.json()
        } else {
            throw Error(response.json())
        }
    },
    async addBooking(id, reason, date, school, initHour, endHour, numberPeople, outfit, observations, menu, decor, extras, ing) {
        let user
        if (localStorage.getItem("loggedUser")) {
            user = JSON.parse(localStorage.getItem("loggedUser"))
        }
        const response = await fetch(`${API_URL}login`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=utf-8',
                'x-access-token': user.token
            },
            body: JSON.stringify({
                userID: id,
                reason: reason,
                date:date,
                school:school,
                initHour:initHour,
                endHour:endHour,
                numberPeople:numberPeople,
                outfit:outfit,
                observations:observations,
                menu:menu,
                decor:decor,
                extras:extras,
                ing:ing
            })
        })

        if (response.ok) {
            return response.json()
        } else {
            throw Error(response.json())
        }
    }
}
export default bookitService;