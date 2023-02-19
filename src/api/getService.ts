import axios from 'axios'

export const getService = async (name:string,number:number=1) => {
    return await axios(`http://localhost:3001/service/${name}?page=${number}`)
        .then(res => res.data)
}