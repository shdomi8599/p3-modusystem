import * as React from 'react';
import DaumPostcode from 'react-daum-postcode';
import ExitPage from '../../components/ExitPage';

const KakaoAdress = ({ addressData }: { addressData: (data: any) => void }): JSX.Element => {
    const [openPostcode, setOpenPostcode] = React.useState<boolean>(false);
    const handle = {
        clickButton: () => {
            setOpenPostcode(current => !current);
        },
        selectAddress: (data: any) => {
            addressData(data.address)
            console.log(`
                주소: ${data.address},
                우편번호: ${data.zonecode}
            `)
            setOpenPostcode(false);
        },
    }

    return (
        <div>
            <button onClick={handle.clickButton}>주소 찾기</button>
            {openPostcode &&
                <>
                    <DaumPostcode
                        style={{ position: 'absolute', width: '520px', left: '190px', height: '460px', border: '1px solid black' }}
                        onComplete={handle.selectAddress}  // 값을 선택할 경우 실행되는 이벤트
                        autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
                        defaultQuery='' // 팝업을 열때 기본적으로 입력되는 검색어 
                    />
                    <ExitPage clickButton={handle.clickButton} />
                </>}
        </div>
    )
}

export default KakaoAdress;