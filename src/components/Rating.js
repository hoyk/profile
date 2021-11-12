import React from "react";
import { Icon } from "semantic-ui-react";

function Rating({ value, color }) {
    return (
        <div className="rating">
            <span>
                <Icon name={value >= 1 ? "star" : value >= 0.5 ? "star half" : ""} color={color} />
            </span>
            <span>
                <Icon name={value >= 2 ? "star" : value >= 1.5 ? "star half" : ""} color={color} />
            </span>
            <span>
                <Icon name={value >= 3 ? "star" : value >= 2.5 ? "star half" : ""} color={color} />
            </span>
            <span>
                <Icon name={value >= 4 ? "star" : value >= 3.5 ? "star half" : ""} color={color} />
            </span>
            <span>
                <Icon name={value >= 5 ? "star" : value >= 4.5 ? "star half" : ""} color={color} />
            </span>
        </div>
    );
}

export default Rating;
