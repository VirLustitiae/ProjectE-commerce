import { api } from "./api";

export const storeProducts = async (productData) => {
    try {
        const response = await api.post('/products.json', productData);
        return { success: true, data: response.data };  // Indica sucesso e retorna os dados.
    } catch (err) {
        console.error(err);
        return { success: false, error: err };  // Indica falha e retorna o erro.
    }
};

export const getAllProducts = async () => {
    const products = [];
    try {
        const response = await api.get('/products.json');
        for (const key in response.data) {
            const product = { ...response.data[key], id: key };
            products.push(product);
        }
        return products;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export const deleteProducts = async (productId) => {
    try {
        const response = await api.delete(`/products/${productId}.json`);
        return response.data;
    } catch (err) {
        console.error("ERRO: ", err);
        throw err;
    }
};

export const updateProducts = async (productId, productData) => {
    try {
        const response = await api.put(`/products/${productId}.json`, productData);
        return response.data;
    } catch (err) {
        console.error("ERRO: ", err);
        throw err;
    }
};
