import { imgGroup, allImg } from "./type"

//아마도 모든 이미지는 이런 형태로 저장해놓고 위에 배열처럼 4개씩 저장되는 새로운 배열안에 필터를 통해 넣어주는 방식으로 사용해야할듯?
const allImgData =
    [
        { title: '한국방송통신대학교', src: ['1-1', '1-2'], categori: ['차량번호인식방식'] },
        { title: 'DNP 코퍼레이션', src: ['2-1', '2-2'], categori: ['차량차단기', '차량번호인식방식'] },
        { title: '춘천 안디옥 교회', src: ['3-1', '3-2', '3-3', '3-4'], categori: ['차량차단기', '주차권발행방식', '요금계산기', '주차부스'] },
        { title: '평창동 평창아파트', src: ['4-1', '4-2', '4-3', '4-4'], categori: ['차량번호인식방식'] },
        { title: '인천 아라뱃길 여객터미널', src: ['5-1', '5-2', '5-3'], categori: ['차량차단기', '주차권발행방식', '요금계산기', '주차부스'] },
        { title: '경북 상주 지엘아파트', src: ['6-1'], categori: ['차량차단기', 'RF카드방식'] },
        { title: '김포 삼용아파트', src: ['7-1'], categori: ['차량차단기', 'RF카드방식'] },
        { title: '성동구치소', src: ['8-1', '8-2', '8-3'], categori: ['차량차단기', 'RF카드방식'] },
        { title: '미아리 KT강북지사', src: ['9-1', '9-2'], categori: ['차량차단기'] },
        { title: '아현동 소의초등학교', src: ['10-1'], categori: ['차량차단기', '주차부스'] },
        { title: '만리동 봉래초등학교', src: ['11-1'], categori: ['차량차단기', '주차부스'] },
        { title: '천안 중앙빌딩', src: ['12-1'], categori: ['차량차단기', '요금계산기', '주차권발행방식'] },
        { title: '독산동 새올빌딩', src: ['13-1', '13-2'], categori: ['차량차단기', '요금계산기', '신호관제', '주차권발행방식'] },
        { title: '광희동 광희빌딩', src: ['14-1', '14-2', '14-3'], categori: ['차량차단기', '주차부스', '요금계산기', '주차권발행방식'] },
        { title: '인천 경기지방 병무청', src: ['15-1'], categori: ['차량차단기', 'RF카드방식', '주차부스'] },
        { title: '대경 프라자', src: ['16-1'], categori: ['차량차단기', '요금계산기', '주차권발행방식', '신호관제'] },
        { title: '송도 더샵 그린스퀘어', src: ['17-1'], categori: ['차량차단기'] },
        { title: '마포 현대 하이엘 오피스텔', src: ['18-1'], categori: ['차량차단기', '주차부스', '요금계산기', '주차권발행방식', '신호관제'] },
        { title: '미아리 효성빌딩', src: ['19-1', '19-2'], categori: ['차량차단기'] },
        { title: '경북 영주농협', src: ['20-1'], categori: ['차량차단기', '요금계산기', '주차권발행방식', '신호관제'] },
        { title: '성산동 농협', src: ['21-1'], categori: ['차량차단기'] },
        { title: '안산 농협 수암지점', src: ['22-1', '22-2'], categori: ['차량차단기', '주차권발행방식'] },
        { title: '군포 우방 유쉘아파트', src: ['23-1', '23-2'], categori: ['차량차단기'] },
        { title: '충북 제천 시외버스 터미널', src: ['24-1'], categori: ['차량차단기'] },
        { title: '통일부 남북회담본부', src: ['25-1'], categori: ['차량차단기', 'RF카드방식'] },
        { title: '광흥창 한국조폐공사', src: ['26-1'], categori: ['차량차단기'] },
        { title: '면목동 주차장', src: ['27-1'], categori: ['차량차단기', '주차부스', '요금계산기'] },
        { title: '진접 우리네마트', src: ['28-1'], categori: ['차량차단기', '주차부스', '요금계산기'] },
        { title: '평택항 곡물터미널', src: ['29-1'], categori: ['차량차단기'] },
        { title: '진관동 노인요양병원', src: ['30-1'], categori: ['차량차단기', '신호관제'] },
        { title: '인천 한중물류', src: ['31-1'], categori: ['차량차단기'] },
        { title: '천안 고려신학대학교', src: ['32-1'], categori: ['차량차단기', '주차부스', '요금계산기', '신호관제', '차량번호인식방식'] },
        { title: '대치4동 문화센터', src: ['33-1'], categori: ['차량차단기'] },
        { title: '이천 디엑텍(주)', src: ['34-1'], categori: ['차량차단기'] },
        { title: '안산 상록경찰서', src: ['35-1'], categori: ['주차부스'] },
        { title: '미아리 신구아파트', src: ['36-1'], categori: ['차량차단기', 'RF카드방식'] },
        { title: '수원 노인 복지회관', src: ['37-1'], categori: ['차량차단기', '주차부스'] },
        { title: '독산동 서울 공고', src: ['38-1'], categori: ['차량차단기'] },
        { title: '삼각지 성당', src: ['39-1'], categori: ['차량차단기', '인터폰'] },
        { title: '상봉동 국일교회', src: ['40-1'], categori: ['차량차단기', '인터폰'] },
        { title: '논현동 타임존 빌라', src: ['41-1', '41-2'], categori: ['차량차단기'] },
        { title: '군산 코아루 아파트', src: ['42-1'], categori: ['차량차단기', 'RF카드방식', '인터폰'] },
        { title: '안산 경안고등학교', src: ['43-1'], categori: ['차량차단기', 'RF카드방식', '인터폰'] },
        { title: '가양동 금강프라자', src: ['44-1'], categori: ['주차부스'] },
        { title: '산본 금정 하이뷰', src: ['45-1'], categori: ['주차부스'] },
        { title: '김해 시립병원', src: ['46-1'], categori: ['차량차단기', '주차권발행방식'] },
        { title: '돈암동 드림빌아파트', src: ['47-1'], categori: ['차량차단기'] },
        { title: '대우 한강 베네시티', src: ['48-1'], categori: ['차량차단기', '주차부스', '주차권발행방식'] },
        { title: '부천 역곡동 리치빌라트', src: ['49-1'], categori: ['차량차단기'] },
        { title: '부천 극동아파트', src: ['50-1'], categori: ['차량차단기'] },
        { title: '삼각지 현대아파트', src: ['51-1'], categori: ['차량차단기', 'RF카드방식'] },
        { title: '면목동 양지주차장', src: ['52-1'], categori: ['차량차단기'] },
        { title: '상계동 우방아파트', src: ['53-1'], categori: ['차량차단기', '주차부스'] },
        { title: '화성 서문축산공장', src: ['54-1'], categori: ['차량차단기'] },
        { title: '부천 성주아파트', src: ['55-1'], categori: ['차량차단기'] },
        { title: '독산동 세일중학교', src: ['56-1'], categori: ['차량차단기'] },
        { title: '오대산 소금강 자동차야영장', src: ['57-1'], categori: ['차량차단기', '주차부스', '요금계산기'] },
        { title: '신내동 동성아파트', src: ['58-1'], categori: ['차량차단기'] },
        { title: '의왕 현대 유료주차장', src: ['59-1'], categori: ['차량차단기', '주차부스', '요금계산기'] },
        { title: '안산 우주 일렉트로니스', src: ['60-1'], categori: ['차량차단기'] },
        { title: '역삼동 신흥빌라', src: ['61-1'], categori: ['차량차단기'] },
        { title: '용인 성산초등학교', src: ['62-1'], categori: ['주차부스'] },
        { title: '안양 석수초등학교', src: ['63-1', '63-2'], categori: ['차량차단기', '주차부스'] },
        { title: '옥천 성화기업택배 물류집하장', src: ['64-1'], categori: ['차량차단기'] },
        { title: '의왕 오전초등학교', src: ['65-1'], categori: ['주차부스'] },
        { title: '인천 레미콘공장', src: ['66-1'], categori: ['차량차단기'] },
        { title: '충북 진천 동덕제약', src: ['67-1', '63-2'], categori: ['차량차단기'] },
        { title: '천안 행복한 둥지빌라', src: ['68-1'], categori: ['차량차단기'] },
        { title: '명일동 태천 해오름아파트', src: ['69-1'], categori: ['차량차단기', 'RF카드방식'] },
        { title: '평택 갤러시아 포토닉스공장', src: ['70-1'], categori: ['차량차단기'] },
    ]

export const photoCategori = ["차량차단기", "인터폰", "RF카드방식", "주차권발행방식", "차량번호인식방식", "요금계산기", "주차부스", "신호관제"]

//카테고리별 개수 카운팅
export const countCategori: number[] = [];
countCategori.push(allImgData.length)
for (let i = 0; i < photoCategori.length; i++) {
    countCategori.push(allImgData.filter(x => x.categori.includes(photoCategori[i])).length)
}
photoCategori.unshift('전체목록')

// 카테고리 목록을 누를때마다 배열이 재구성되는걸 도와주는 함수
export const imgFilter = (name: string) => {
    const result: allImg = []
    let imgGroup: imgGroup = []
    let dataArr = allImgData.filter(x => x.categori.includes(name))
    if (name === '전체목록') dataArr = allImgData
    for (let data of dataArr) {
        //4개가 될때까지 채우고 4개가되면 저장하고 초기화
        if (imgGroup.length < 4) {
            imgGroup.push(data)
            if (imgGroup.length === 4) {
                result.push(imgGroup)
                imgGroup = []
            }
        }
        //마지막에 위에서 다돌고 남는애들도 넣어줘야함, 길이가 0이상일때만 넣기로
        if (dataArr.indexOf(data) === dataArr.length - 1 && imgGroup.length > 0) {
            result.push(imgGroup)
        }
    }
    return result
}
