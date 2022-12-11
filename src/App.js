import { Container, Grid, Segment } from "semantic-ui-react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Left from "./components/Left";
import Nav from "./components/Nav";
import About from "./containers/About";
import Education from "./containers/Education";
import Experience from "./containers/Experience";
import Project from "./containers/Project";
import Skill from "./containers/Skill";

function App() {
  return (
    <Container style={{ marginTop: "10px" }}>
      <Grid>
        <Grid.Column mobile={16} computer={4}>
          <Left />
        </Grid.Column>
        <Grid.Column mobile={16} computer={12}>
          <Router>
            <Nav />
            <Segment>
              <Routes>
                <Route path="" element={<Experience />} />
                <Route path="/about" element={<About />} />
                <Route path="/education" element={<Education />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Project />} />
                <Route path="/skills" element={<Skill />} />
              </Routes>
            </Segment>
            {/* <Header /> */}
          </Router>
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default App;
