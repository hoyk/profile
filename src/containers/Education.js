import React from "react";
import EducationItem from "../components/EducationItem";
import { Item, Divider, Segment, Grid } from "semantic-ui-react";

const Education = () => {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Segment inverted color="olive" piled>
              EDUCATION
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Column computer={2} only="computer"></Grid.Column>
        <Grid.Column computer={12} mobile={16}>
          <Item.Group>
            <EducationItem
              img="images/NCCU.png"
              title="National Chengchi University"
              dep="Banking, 2016 ~"
              meta="Taipei, Taiwan"
            />
            <Divider />
            <EducationItem
              img="images/NCCU.png"
              title="National Chengchi University"
              dep="MBA, Graduate Institute of Technology and Innovation Management, 2011"
              meta="Taipei, Taiwan"
            />
            <Divider />
            <EducationItem
              img="images/THU.png"
              title="Tonghai University"
              dep="Computer Science, 2003"
              meta="Taichung, Taiwan"
            />
          </Item.Group>
        </Grid.Column>
        <Grid.Column computer={2} only="computer"></Grid.Column>
      </Grid>
    </div>
  );
};

export default Education;
