import React from "react";
import { Icon } from "semantic-ui-react";

const NameItem = ({ title, content }) => {
    return (
        <div style={{ display: "flex", justifyContent: "flex-start", margin: "20px 0px 10px 0px" }}>
            <div>
                <Icon name="caret right" color="red"></Icon>
            </div>
            <div style={{ flex: 1 }}>
                <b>{title}</b>
            </div>
            <div style={{ flex: 2 }}>{content}</div>
        </div>
    );
};

export default NameItem;
