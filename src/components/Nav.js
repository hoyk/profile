import React, { useState } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Nav = () => {
    const [active, setActive] = useState("");
    const handleItemClick = (e, { name }) => setActive(name);
    return (
        <Menu borderless stackable>
            {/* <Link to="/about">
                <Menu.Item name="about" active={active === "about"} onClick={handleItemClick}>
                    ABOUT ME
                </Menu.Item>
            </Link> */}

            <Link to="/experience" style={{ padding: "3px 1px 3px 1px" }}>
                <Menu.Item name="experience" active={active === "experience"} onClick={handleItemClick}>
                    EXPERIENCE
                </Menu.Item>
            </Link>

            <Link to="/education" style={{ padding: "3px 1px 3px 1px" }}>
                <Menu.Item name="education" active={active === "education"} onClick={handleItemClick}>
                    EDUCATION
                </Menu.Item>
            </Link>

            <Link to="/skills" style={{ padding: "3px 1px 3px 1px" }}>
                <Menu.Item name="skills" active={active === "skills"} onClick={handleItemClick}>
                    SKILLS
                </Menu.Item>
            </Link>

            <Link to="/projects" style={{ padding: "3px 1px 3px 1px" }}>
                <Menu.Item name="projects" active={active === "projects"} onClick={handleItemClick}>
                    PROJECTS
                </Menu.Item>
            </Link>

            <Menu.Menu position="right">
                <Menu.Item>
                    <a href="https://www.linkedin.com/in/ykangho/" target="_blank">
                        <Icon name="linkedin" size="large" color="blue" />
                    </a>
                    <a href="mailto:ykang.ho@gmail.com">
                        <Icon name="mail" size="large" color="grey" />
                    </a>
                    <a href="skype:ykang.ho?call">
                        <Icon name="skype" size="large" color="blue" />
                    </a>
                    <a
                        href="https://1drv.ms/b/s!AmtZGfwJhhP6i-QL-UABE1XATC8ssw?e=tkEkhu"
                        target="_blank"
                        download
                        style={{ marginLeft: "20px" }}
                    >
                        <Icon name="download" color="grey" />
                    </a>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
};

export default Nav;
