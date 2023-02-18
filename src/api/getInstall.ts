import axios from 'axios'

export const getInstall = async (name: string) => {
    return await axios(`http://localhost:3001/install/${name}`)
        .then(res => res.data)
}