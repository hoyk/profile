import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

const ProjectItem = ({ img, header, meta, description }) => {
    return (
        <Card>
            <Image src={img} wrapped ui={false} />

            <Card.Content>
                <Card.Header>
                    <a href="https://www.vttw.info" target="_blank">
                        {header}
                    </a>
                </Card.Header>
                <Card.Meta>
                    <span className="date">{meta}</span>
                </Card.Meta>
                <Card.Description>{description}</Card.Description>
            </Card.Content>
        </Card>
    );
};

export default ProjectItem;
