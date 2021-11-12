import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Nav = () => {
    const [active, setActive] = useState("");
    const handleItemClick = (e, { name }) => setActive(name);
    return (
        <Menu borderless>
            <Link to="/about">
                <Menu.Item name="about" active={active === "about"} onClick={handleItemClick}>
                    ABOUT ME
                </Menu.Item>
            </Link>

            <Link to="/experience">
                <Menu.Item name="experience" active={active === "experience"} onClick={handleItemClick}>
                    EXPERIENCE
                </Menu.Item>
            </Link>

            <Link to="/education">
                <Menu.Item name="education" active={active === "education"} onClick={handleItemClick}>
                    EDUCATION
                </Menu.Item>
            </Link>

            <Link to="/skills">
                <Menu.Item name="skills" active={active === "skills"} onClick={handleItemClick}>
                    SKILLS
                </Menu.Item>
            </Link>

            <Link to="/projects">
                <Menu.Item name="projects" active={active === "projects"} onClick={handleItemClick}>
                    PROJECTS
                </Menu.Item>
            </Link>
        </Menu>
    );
};

export default Nav;
