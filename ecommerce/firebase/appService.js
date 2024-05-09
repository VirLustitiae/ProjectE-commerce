import { api } from "./api"

export const storeProducts = async (productData) => {
    try {
        const response = await api.post('/products.json', productData)
        console.log(response.data.name)
    } catch (err) {
        console.log(err)
    }
}

export const getAllProducts = async () => {
    
    try {
        const products = []
        const response = await api.get('/products.json')

        for(key in response.data) {
            const product = {
                ...response.data[key],
                id: key,
            }
            products.push(product)
        }
        return products;
    } catch(err) {
        console.log(err)
    }

}

export const deleteProducts = async () => {
    try {
        const response = await api.delete("/products/"+"-Nx3B3PzXZgzr9KBDDNd"+".json")
        console.log(response)
    } catch(err) {
        console.log("ERRO: ", err)
    }
}

export const updateProducts = async () => {
    try {
        const response = await api.put('/products/-Nx3B3_QWPLibh-gocYY.json', {
            title: "Fazer o Trabalho Final de React Native",
            description: "Todo mundo vai trabalhar",
            priority: "alta"
        })
    } catch(err) {
        console.log("ERRO: ", err)
    }
}


//const getProductbyId = () => {}