import axios from 'axios'

export const getProduct = async () => {
    return await axios(`http://localhost:3001/product`)
        .then(res => res.data)

}