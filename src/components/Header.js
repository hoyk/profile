import React, { useState } from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import About from "../containers/About";
import Experience from "../containers/Experience";
import Project from "../containers/Project";
import Education from "../containers/Education";
import Skill from "../containers/Skill";
import { Link } from "react-router-dom";

const Header = () => {
    const panes = [
        {
            menuItem: "ABOUT ME",
            render: () => (
                <Tab.Pane attached={false}>
                    <About />
                </Tab.Pane>
            ),
        },
        {
            menuItem: "EXPERIENCE",
            render: () => (
                <Tab.Pane attached={false}>
                    <Experience />
                </Tab.Pane>
            ),
        },
        {
            menuItem: "EDUCATION",
            render: () => (
                <Tab.Pane attached={false}>
                    <Education />
                </Tab.Pane>
            ),
        },
        {
            menuItem: "SKILLS",
            render: () => (
                <Tab.Pane attached={false}>
                    <Skill />
                </Tab.Pane>
            ),
        },
        {
            menuItem: "PROJECTS",
            render: () => (
                <Tab.Pane attached={false}>
                    <Project />
                </Tab.Pane>
            ),
        },
        {
            menuItem: (
                <Menu.Item style={{ marginLeft: "auto" }}>
                    <a href="https://www.linkedin.com/in/ykangho/" target="_blank">
                        <Icon name="linkedin" size="large" color="blue" />
                    </a>
                    <a href="mailto:ykang.ho@gmail.com">
                        <Icon name="mail" size="large" color="grey" />
                    </a>
                    <a href="skype:ykang.ho?call">
                        <Icon name="skype" size="large" color="blue" />
                    </a>
                </Menu.Item>
            ),
            render: () => (
                <Tab.Pane attached={false}>
                    <About />
                </Tab.Pane>
            ),
        },
    ];

    return (
        <div>
            <Tab menu={{ attached: false, borderless: true }} panes={panes}></Tab>
        </div>
    );
};

export default Header;
