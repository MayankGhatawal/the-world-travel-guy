import React from "react";
import './Travelguide.css';

function Travelguide({ history }) {
    const handleButtonClick = () => {
        history.push('/BlogForm'); // Navigate to '/BlogForm' when button is clicked
    };

    return(
        <div>
            <div className="featured">BLOGS</div>
            <div className="button01">
                <button className="button" onClick={handleButtonClick}>&#10009; Add More</button>
            </div>
        </div>
    );
}

export default Travelguide;
