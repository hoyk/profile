import React from "react";
import { Item, Divider, Grid, Segment, Button, Header } from "semantic-ui-react";
import SkillItem from "../components/SkillItem";
import SkillOthers from "../components/SkillOthers";

const Skill = () => {
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <Segment inverted color="teal" piled>
                        SKILLS
                    </Segment>
                </Grid.Column>
            </Grid.Row>
            <Grid.Column computer={2} only="computer"></Grid.Column>
            <Grid.Column computer={12} mobile={16}>
                <Item.Group>
                    <SkillItem
                        img="images/Python.png"
                        title="Python"
                        stars={4.5}
                        color="orange"
                        description="Using python for around six years. In the field of data analysis, pandas, numpy, matplotlib are the major tools. Scrapy, Beautifulsoup for web scraping, Backtrader, vectorbt for trading and backtesting. Plotly, Streamlit for charting and backend frame."
                    />

                    <Divider />

                    <SkillItem
                        img="images/Django.jpg"
                        title="Django"
                        stars={4.5}
                        color="orange"
                        description="Mainly use Django as a backend services for projects. Django REST framework are most frequently used for building standard RESTful API. Djoser and django-rest-framework-simplejwt for user access and authentication "
                    />

                    <Divider />

                    <SkillItem
                        img="images/Javascript.png"
                        title="Javascript"
                        stars={4}
                        color="orange"
                        description="Most frequently used for frontend projects, especially in financial charting, data fetching and user interaction."
                    />

                    <Divider />

                    <SkillItem
                        img="images/React.png"
                        title="React"
                        stars={4}
                        color="orange"
                        description="Most frequently used as a front-end framework, especially in projects with multiple resources, complex data structures"
                    />
                </Item.Group>

                <Divider />

                <Header as="h2" content="Other tech" />

                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <SkillOthers name="React-Redux" color="blue" />
                    <SkillOthers name="C#.NET" color="blue" />
                    <SkillOthers name="MySQL" color="teal" />
                    <SkillOthers name="Redis" color="teal" />
                    <SkillOthers name="MongoDB" color="teal" />
                    <SkillOthers name="Flask" color="violet " />
                    <SkillOthers name="Git" color="violet" />
                    <SkillOthers name="RESTful API" color="violet" />
                    <SkillOthers name="Time series data analysis" color="orange" />
                    <SkillOthers name="Backtrader" color="orange" />
                    <SkillOthers name="Vectorbt" color="orange" />
                    <SkillOthers name="Trading strategy" color="orange" />
                    <SkillOthers name="Plotly" color="orange" />
                    <SkillOthers name="FIX" color="green" />
                </div>
            </Grid.Column>
            <Grid.Column computer={2} only="computer"></Grid.Column>
        </Grid>
    );
};

export default Skill;
