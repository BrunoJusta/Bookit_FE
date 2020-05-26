import API_URL from './config.js'

const bookitService = {

    //obter raças
    async getMenus(){
        const response = await fetch(`${API_URL}menus/`, {
            method: "GET"            
        })

        if(response.ok){
            return response.json()
        }else{
            throw Error(response)
        }

    },
    async registerUser(name, lastName, number, email, birthDate, genre, password, password2){
        const response = await fetch(`${API_URL}users/register`, {
            method: "POST",
            body: JSON.stringify({ name, lastName, number, email, birthDate, genre, password, password2 })      
        })

        if(response.ok){
            return response.json()
        }else{
            throw Error(response)
        }
    }




}

export default bookitService;