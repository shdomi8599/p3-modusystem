import axios from 'axios'

export const getPhoto = async (name: string) => {
    return await axios(`http://localhost:3001/photo/${name}`)
        .then(res => res.data)
}