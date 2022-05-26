import React from "react";
import { Item, Container } from "semantic-ui-react";

const ExperienceItem = ({ img, companylink, title, company, meta, description }) => {
    return (
        <Item style={{ margin: "20px" }}>
            <a href={companylink} target="_blank">
                <Item.Image size="tiny" src={img} />
            </a>

            <Item.Content style={{ marginRight: "20px" }}>
                <Item.Header>{title}</Item.Header>
                <Item.Meta content={company} />
                <Item.Meta content={meta} />
                <Item.Description>{description}</Item.Description>
            </Item.Content>
        </Item>
    );
};

export default ExperienceItem;
