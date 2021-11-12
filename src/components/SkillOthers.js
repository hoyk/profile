import React from "react";
import { Button } from "semantic-ui-react";

const SkillOthers = ({ name, color }) => {
    return (
        <div style={{ margin: "10px 0px" }}>
            <Button circular raised color={color} size="large">
                {name}
            </Button>
        </div>
    );
};

export default SkillOthers;
