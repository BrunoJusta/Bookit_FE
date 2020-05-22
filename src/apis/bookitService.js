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

    },}

export default bookitService;