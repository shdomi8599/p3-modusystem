export interface product {
    id: string;
    outline?: string;
    specification?: string[];
    characteristic?: string[];
    optional?: string[];
    img?: string | string[];
}

export interface allData {
    id?: string;
    address1?: string | null;
    address2?: string;
    content?: string;
    tel?: string;
    option?: string[];
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

export type navLiList = navLi[]

export type productList = {
    [index: string]: string | string[] | undefined
}

export type img = {
    title: string;
    src: string[];
    categori: string[];
}

export type imgGroup = img[]

export type allImg = imgGroup[]

export interface announcement {
    id: string;
    title: string;
    content: string;
    author: string;
    createAt: string;
    view: number;
    password: number | string
}
export interface question extends announcement {
    link?: string;
}

export interface reference extends announcement {
    link: string;
}

export type stringKeyObj = {
    [key: string]: string
}

export type filterTitle = {
    title: string
}
export type filterAuthor = {
    author: string
}
export type filterContent = {
    content: string
}