import React from 'react';
import "./CheckList.css";

function CheckList() {
    return (
        <div className="checkList_Container">
            <div className="checkList_Check_Box_Container"></div>
            <div className="checkList_Button_Container">
                <button className="checkList_Edit_Button">编辑</button>
            </div>
            
        </div>
    )
}

export default CheckList
