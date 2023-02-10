export interface product {
    id: string;
    outline?: string;
    specification?: string[];
    characteristic?: string[];
    optional?: string[];
    img?: string | string[];
}

export type allProduct =
    [
        { 차량차단기: product[] }, { 리모콘: product[] }, { RF카드: product[] }, { 주차권발행: product[] },
        { 차량번호인식: product[] }, { 요금계산기: product[] }, { 주차부스: product[] }, { 신호관제: product[] }
    ]

export type detailData = {
    id: string | undefined;
    name: string;
    content: string | string[] | undefined
}

export type navLi = { [key: string]: string[] }

export type navLiList = [
    navLi,
    navLi,
    navLi,
    navLi,
    navLi
]

export type productList = {
    [index: string]: string | string[] | undefined
}