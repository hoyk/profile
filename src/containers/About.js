import React from "react";
import { Header, Card, Icon, Grid } from "semantic-ui-react";
import AboutItem from "../components/AboutItem";

const About = () => {
    return (
        <div>
            {/* <Header as="h3" dividing>
                About me
            </Header> */}
            <Grid style={{ height: "80vh" }}>
                <Grid.Column computer={3} only="computer"></Grid.Column>
                <Grid.Column computer={10} mobile={16}>
                    <Card.Group stackable itemsPerRow={2}>
                        <AboutItem title="EXPERIENCE" color="blue" iconName="computer" />
                        <AboutItem title="EDUCATION" color="teal" iconName="book" />
                        <AboutItem title="SKILLS" color="olive" iconName="clipboard" />
                        <AboutItem title="PROJECTS" color="orange" iconName="folder open" />
                    </Card.Group>
                </Grid.Column>
                <Grid.Column computer={3} only="computer"></Grid.Column>
            </Grid>
        </div>
    );
};

export default About;
