import React from "react";
import { Card, Icon } from "semantic-ui-react";

const AboutItem = ({ title, color, iconName }) => {
    return (
        <Card raised color={color} style={{ textAlign: "center" }}>
            <Card.Content>
                <Icon size="big" name={iconName} color={color} style={{ marginBottom: "15px" }} />
                <Card.Header content={title} />
                {/* <Card.Meta content="Musicians" />
            <Card.Description content="Jake is a drummer living in New York." /> */}
            </Card.Content>
        </Card>
    );
};

export default AboutItem;
