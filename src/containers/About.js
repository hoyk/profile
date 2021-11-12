import React from "react";
import { Header, Card, Icon } from "semantic-ui-react";
import AboutItem from "../components/AboutItem";

const About = () => {
    return (
        <div>
            <Header as="h3" dividing>
                About me
            </Header>
            <Card.Group stackable itemsPerRow={4}>
                <AboutItem title="EXPERIENCE" color="blue" iconName="computer" />
                <AboutItem title="EDUCATION" color="teal" iconName="book" />
                <AboutItem title="SKILLS" color="olive" iconName="clipboard" />
                <AboutItem title="PROJECTS" color="orange" iconName="folder open" />
            </Card.Group>
        </div>
    );
};

export default About;
