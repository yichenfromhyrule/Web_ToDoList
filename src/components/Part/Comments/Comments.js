import React from 'react';
import './Comments.css';

function Comments() {
    return (
        <div className="comments_Container">
            <div className="comments_input_Container">
                <div className="comments_inputBox">
                    <input type="text" name="name" className="comments_inputBox" />
                </div>
            </div>

            <div className="comments_submit_Container">
                <div className="comments_submitBox">
                    <input type="submit" value="Submit" className="comments_submitBox" />
                </div>
            </div>
        </div>
    )
}

export default Comments
