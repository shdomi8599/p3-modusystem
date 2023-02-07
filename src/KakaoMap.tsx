import React, { useEffect } from "react";

//타입스크립트가 kakao를 찾지 못해서 declare를 통해 커스텀 타입을 알려주는 방법
declare global {
    var kakao: any;
}

const KakaoMap = () => {

    const { kakao } = window;

    useEffect(() => {
        const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        const options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(37.501496, 127.140322), //지도의 중심좌표.
            level: 2 //지도의 레벨(확대, 축소 정도)
        };

        const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

        var marker = new kakao.maps.Marker({ 
            // 지도 중심좌표에 마커를 생성합니다 
            position: map.getCenter() 
        }); 
        // 지도에 마커를 표시합니다
        marker.setMap(map);

        var content = '<div class ="label"><span class="left"></span><span class="center">모두시스템</span><span class="right"></span></div>';

        // 커스텀 오버레이가 표시될 위치입니다 
        var position = new kakao.maps.LatLng(37.501425, 127.140322);  
        
        // 커스텀 오버레이를 생성합니다
        var customOverlay = new kakao.maps.CustomOverlay({
            position: position,
            content: content   
        });
        
        // 커스텀 오버레이를 지도에 표시합니다
        customOverlay.setMap(map);
        
    }, [])

    return <div id="map" style={{ width: '900px', height: '350px' }}></div>
}

export default KakaoMap;