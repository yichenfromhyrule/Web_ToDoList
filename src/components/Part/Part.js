import React from 'react';
import "./Part.css";
import Comments from "./Comments/Comments";
import CheckList from "./CheckList/CheckList";
import CheckListEditer from "./CheckList/CheckListEditer";

function Part() {
    return (
        <div className="partContainer_level1">
            <div className="partContainer_level2_a">
                <div className="partContainer_level3_a">
                    <div className="partContainer_level4_a">

                    </div>
                </div>
                <div className="partContainer_level3_b">
                    <div className="partContainer_level4_b">
                        <h1>To Do List</h1>
                    </div>
                </div>
                <div className="partContainer_level3_c">
                    <div className="partContainer_level4_a">
                        <Comments />
                    </div>
                </div>
            </div>

            <div className="partContainer_level2_b">
                <div className="partContainer_level3_f">
                    <div className="partContainer_level4_a">
                        <CheckList />
                    </div>
                </div>
                <div className="partContainer_level3_g">
                    <div className="partContainer_level4_a">
                        <CheckListEditer />
                    </div>
                </div>
                
            </div>

            <div className="partContainer_level2_c">
                <div className="partContainer_level3_d">
                    <div className="partContainer_level4_a">

                    </div>
                </div>
                <div className="partContainer_level3_e">
                    <div className="partContainer_level4_a">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Part
