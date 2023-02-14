import React from "react";

const ExitPage = ({clickButton}:{clickButton:()=>void}) =>{


return <div id="exit_page">
    <img id="exit_x" src="http://localhost:3001/uploads/아이콘/free-icon-x-657059.png" onClick={clickButton} alt='exit'/>
</div>
}

export default ExitPage