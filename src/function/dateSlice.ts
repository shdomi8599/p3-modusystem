import { question, reference } from "../type"

//페이지 길이에 맞춰서 데이터를 짤라주는 함수
export const dateSlice = (data: reference[] | question[], announcementCount: number, page: number) => {
    if (page === 1) {
        return data.slice(0, 10 - announcementCount)
    }
    if (page === 2) {
        return data.slice(10 - announcementCount, (10 - announcementCount) + 10 * (page - 1))
    }
    return data.slice((10 - announcementCount) + 10 * (page - 2), (10 - announcementCount) + 10 * (page - 1))
}