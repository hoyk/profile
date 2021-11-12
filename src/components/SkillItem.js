import React from "react";
import { Item, Container, Icon } from "semantic-ui-react";
import Rating from "../components/Rating";

const SkillItem = ({ img, title, meta, description, color, stars }) => {
    return (
        <Item style={{ margin: "30px 0px" }}>
            <Item.Image size="tiny" src={img} />

            <Item.Content>
                <Item.Header>{title}</Item.Header>

                <Rating value={stars} color={color} />

                <Item.Meta content={meta} />
                <Item.Description>
                    <Container textAlign="justified">{description}</Container>
                </Item.Description>
            </Item.Content>
        </Item>
    );
};

export default SkillItem;
