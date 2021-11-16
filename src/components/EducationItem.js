import React from "react";
import { Item } from "semantic-ui-react";

const EducationItem = ({ img, title, dep, meta, description }) => {
    return (
        <Item style={{ margin: "20px" }}>
            <Item.Image size="tiny" src={img} />

            <Item.Content style={{ marginRight: "20px" }}>
                <Item.Header>{title}</Item.Header>
                <Item.Description content={dep} />
                <Item.Meta content={meta} />
                <Item.Description>{description}</Item.Description>
            </Item.Content>
        </Item>
    );
};

export default EducationItem;
