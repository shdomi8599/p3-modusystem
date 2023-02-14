import React from "react";

const MainGreetings = () => {
    return <section id="main_section">
        <div id="greetings_box">
            <div>
                안녕하십니까? 주차관제 전문회사<span id="greeting_logo_box"><img className="greetings_logo" src={"http://localhost:3001/uploads/로고/MODOO2.png"} alt={'logo1'}/></span>
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;입니다
                <p />
                먼저 저희 홈페이지를 방문해 주셔서 진심으로 감사드립니다.
                <p />
                저희 모두시스템은 주차차단기, 주차권발행기, 요금계산기, 주차부스등을 이용하여 최적의 주차관리를 추구하는 <span id="impact_message"> "주차관제 시스템 전문회사"</span> 입니다.
                <p />
                아파트, 관공서, 주차장, 공장, 교회, 빌라, 병원등은 물론 주차관제가 필요한 곳이라면 어디든지
                직접 찾아가 성실한 현장조사를 바탕으로 최적의 주차관리가 되도록 고객님께 성심을 다 할 것을 약속드립니다.
                <p />
                또한, 제품의 철저한 품질보증은 물론 완벽한 시공, 신속한 A/S를 통하여 고객이 만족 할 수 있도록 저희 임직원
                <p />
                일동은 최선의 노력을 다 하겠습니다.
                <p />
                한번의 만남이 소중한 인연이 될 수 있도록 변치않는 모두시스템이 되겠습니다.
                <p />
                감사합니다.
            </div>
            <div><span id="greeting_logo_box"><img className="greetings_logo" id="greetings_bottom_logo" src={"http://localhost:3001/uploads/로고/MODOO2.png"} alt={'logo2'} /></span>임직원 일동 올림</div>
        </div>
    </section>
}

export default MainGreetings;