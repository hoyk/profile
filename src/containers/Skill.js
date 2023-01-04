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
            description="In the field of data analysis, pandas, numpy, matplotlib are the major tools. Scrapy, Beautifulsoup for web scraping, Backtrader, vectorbt for trading and backtesting. Plotly, Streamlit for charting and backend frame."
          />

          <Divider />

          <SkillItem
            img="images/Django.jpg"
            title="Django"
            stars={4.5}
            color="orange"
            description="Most frequently used backend framework for the projects. Stable, will developed communities' resources and highly intergration with Python language for development."
          />

          <Divider />

          <SkillItem
            img="images/Javascript.png"
            title="Javascript"
            stars={4}
            color="orange"
            description="Most frequently used frontend language, in the field of creating financial chart, data fetching and website."
          />

          <Divider />

          <SkillItem
            img="images/React.png"
            title="React.js"
            stars={4}
            color="orange"
            description="Front-end framework for all the projects. Most frequently used packages such as Nextjs, Zustand, react-query,...etc"
          />
        </Item.Group>

        <Divider />

        <Header as="h2" content="Other tech" />

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <SkillOthers name="Backtrader" color="orange" />
          <SkillOthers name="Trading strategy" color="orange" />
          <SkillOthers name="Plotly" color="orange" />
          <SkillOthers name="FIX" color="green" />
          <SkillOthers name="React-Redux" color="blue" />
          <SkillOthers name="Zustand" color="blue" />
          <SkillOthers name="Nextjs" color="blue" />
          <SkillOthers name="C#.NET" color="blue" />
          <SkillOthers name="MySQL" color="teal" />
          <SkillOthers name="Redis" color="teal" />
          <SkillOthers name="MongoDB" color="teal" />
          <SkillOthers name="Flask" color="violet " />
          <SkillOthers name="Git" color="violet" />
          <SkillOthers name="RESTful API" color="violet" />
          <SkillOthers name="Time series data analysis" color="orange" />
        </div>
      </Grid.Column>
      <Grid.Column computer={2} only="computer"></Grid.Column>
    </Grid>
  );
};

export default Skill;
