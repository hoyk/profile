import React from "react";
import { Item } from "semantic-ui-react";

const ExperienceItem = ({ img, title, company, meta, description }) => {
    return (
        <Item style={{ margin: "20px" }}>
            <Item.Image size="tiny" src={img} />

            <Item.Content>
                <Item.Header>{title}</Item.Header>
                <Item.Meta content={company} />
                <Item.Meta content={meta} />
                <Item.Description>{description}</Item.Description>
            </Item.Content>
        </Item>
    );
};

export default ExperienceItem;
