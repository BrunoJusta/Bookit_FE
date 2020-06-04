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
    async getUserBookings() {
        let user
        if (localStorage.getItem("loggedUser")) {
            user = JSON.parse(localStorage.getItem("loggedUser"))
        }
        const response = await fetch(`${API_URL}users/${user.id}/menuBookings`, {
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
    async getUserAreaBookings() {
        let user
        if (localStorage.getItem("loggedUser")) {
            user = JSON.parse(localStorage.getItem("loggedUser"))
        }
        const response = await fetch(`${API_URL}users/${user.id}/areaBookings`, {
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
    async getUserWorkshops() {
        let user
        if (localStorage.getItem("loggedUser")) {
            user = JSON.parse(localStorage.getItem("loggedUser"))
        }
        const response = await fetch(`${API_URL}users/${user.id}/workshopBookings`, {
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
    async getMenuBookings() {
        let user
        if (localStorage.getItem("loggedUser")) {
            user = JSON.parse(localStorage.getItem("loggedUser"))
        }
        const response = await fetch(`${API_URL}menuBookings`, {
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
    async getBookingsDecor() {
        let user
        if (localStorage.getItem("loggedUser")) {
            user = JSON.parse(localStorage.getItem("loggedUser"))
        }
        const response = await fetch(`${API_URL}menuBookings/decor`, {
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
    async getBookingsExtra() {
        let user
        if (localStorage.getItem("loggedUser")) {
            user = JSON.parse(localStorage.getItem("loggedUser"))
        }
        const response = await fetch(`${API_URL}menuBookings/extra`, {
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
    async getBookingsAddOns() {
        let user
        if (localStorage.getItem("loggedUser")) {
            user = JSON.parse(localStorage.getItem("loggedUser"))
        }
        const response = await fetch(`${API_URL}menuBookings/addOns`, {
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
    async deleteMenuBooking(ID) {
        let user
        if (localStorage.getItem("loggedUser")) {
            user = JSON.parse(localStorage.getItem("loggedUser"))
        }
        const response = await fetch(`${API_URL}menuBookings/${ID}`, {
            method: "DELETE",
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
    async deleteMenu(ID) {
        let user
        if (localStorage.getItem("loggedUser")) {
            user = JSON.parse(localStorage.getItem("loggedUser"))
        }
        const response = await fetch(`${API_URL}menus/${ID}`, {
            method: "DELETE",
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
    async getAreaBookings() {
        let user
        if (localStorage.getItem("loggedUser")) {
            user = JSON.parse(localStorage.getItem("loggedUser"))
        }
        const response = await fetch(`${API_URL}areasBookings`, {
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
    async deleteAreaBooking(ID) {
        let user
        if (localStorage.getItem("loggedUser")) {
            user = JSON.parse(localStorage.getItem("loggedUser"))
        }
        const response = await fetch(`${API_URL}areasBookings/${ID}`, {
            method: "DELETE",
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
    async editUsers(ID, newType) {
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
                newType: newType
            })
        })
        if (response.ok) {
            return response.json()
        } else {
            throw Error(response)
        }
    },
    async deleteUser(ID) {
        let user
        if (localStorage.getItem("loggedUser")) {
            user = JSON.parse(localStorage.getItem("loggedUser"))
        }
        const response = await fetch(`${API_URL}users/${ID}`, {
            method: "DELETE",
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
        const response = await fetch(`${API_URL}menuBookings`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=utf-8',
                'x-access-token': user.token
            },
            body: JSON.stringify({
                userID: id,
                reason: reason,
                date: date,
                school: school,
                initHour: initHour,
                endHour: endHour,
                numberPeople: numberPeople,
                outfit: outfit,
                observations: observations,
                menu: menu,
                decor: decor,
                extras: extras,
                ing: ing
            })
        })

        if (response.ok) {
            return response.json()
        } else {
            throw Error(response.json())
        }
    },
    async editMenu(id, name, type, ings) {
        let user
        if (localStorage.getItem("loggedUser")) {
            user = JSON.parse(localStorage.getItem("loggedUser"))
        }
        const response = await fetch(`${API_URL}menus/${id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json; charset=utf-8',
                'x-access-token': user.token
            },
            body: JSON.stringify({
                id: id,
                name: name,
                type: type,
                ings: ings,
            })
        })

        if (response.ok) {
            return response.json()
        } else {
            throw Error(response.json())
        }
    },
    async editArea(id, name, description) {
        let user
        if (localStorage.getItem("loggedUser")) {
            user = JSON.parse(localStorage.getItem("loggedUser"))
        }
        const response = await fetch(`${API_URL}areas/${id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json; charset=utf-8',
                'x-access-token': user.token
            },
            body: JSON.stringify({
                id: id,
                name: name,
                description: description
            })
        })
        if (response.ok) {
            return response.json()
        } else {
            throw Error(response)
        }
    },
    async deleteArea(ID) {
        let user
        if (localStorage.getItem("loggedUser")) {
            user = JSON.parse(localStorage.getItem("loggedUser"))
        }
        const response = await fetch(`${API_URL}areas/${ID}`, {
            method: "DELETE",
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
    async areaBooking(id, area, reason, date, initHour, endHour) {
        let user
        if (localStorage.getItem("loggedUser")) {
            user = JSON.parse(localStorage.getItem("loggedUser"))
        }
        const response = await fetch(`${API_URL}areasBookings`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=utf-8',
                'x-access-token': user.token
            },
            body: JSON.stringify({
                userID: id,
                area: area,
                reason: reason,
                date: date,
                initHour: initHour,
                endHour: endHour,
            })
        })

        if (response.ok) {
            return response.json()
        } else {
            throw Error(response.json())
        }
    },
    async editMenuBookings(id, state, decline, opinion) {
        let user
        if (localStorage.getItem("loggedUser")) {
            user = JSON.parse(localStorage.getItem("loggedUser"))
        }
        const response = await fetch(`${API_URL}menuBookings/${id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json; charset=utf-8',
                'x-access-token': user.token
            },
            body: JSON.stringify({
                id: id,
                state: state,
                decline: decline,
                opinion: opinion,
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