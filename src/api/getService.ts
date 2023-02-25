import axios from 'axios'

export const getService = async (name: string) => {
    return await axios(`http://localhost:3001/service/${name}`)
        .then(res => res.data)
}