import axios from 'axios'
const url = 'https://localhost:5001/api/admin'

export default class proxy {

    async getProductos() {
        const values = await axios.get(url + '/GetProductos')
        return values;
    }

    async insertProducto(data) {

        const res = await axios.post(url + '/AddProducto', data)
        return res
    }

    async updateProducto(data) {
        
        const v = await axios.post(url + '/UpdateProducto', data)
        return v

    }

    async deleteProducto(id) {
            const re = await axios.delete(url + '/DeleteProducto?idProducto=' + id)
            return re
    }

    async getUsuarios() {
        const values = await axios.get(url + '/GetUsuarios')
        return values;
    }

    async updateUsuario(data) {
        
        const v = await axios.post(url + '/UpdateUsuario', data)
        return v

    }

    async insertUsuario(data) {

        const res = await axios.post(url + '/AddUsuario', data)
        return res
    }

    async deleteUsuario(id) {
        const re = await axios.delete(url + '/DeleteUsuario?idUsuario=' + id)
        return re
    }

    async getPapeles() {
        const values = await axios.get(url + '/GetPapel')
        return values;
    }

    async insertPapel(data) {
        const values = await axios.post(url+'/AddPapel',data)
        return values;
    }

    async AddTicket(data) {
        const value = await axios.post(url + '/AddTicket',data)
        return value;
    }

    async validarLogin(data) {
        const value = await axios.post(url + '/Login', data)
        return value;
    }
    
}




