import React from "react";
import { Segment, Header, Image, Divider, Container } from "semantic-ui-react";
import NameItem from "./NameItem";

const Left = () => {
    return (
        <div>
            <Segment>
                <div style={{ marginTop: "10px" }}>
                    <Header as="h3">
                        HO YIKANG
                        <Header.Subheader>Programmer, Trader</Header.Subheader>
                    </Header>
                </div>

                <Image src="images/mypic2.jpg" size="small" circular centered style={{ marginTop: "20px" }} />
                <Header>
                    <Header.Subheader>
                        <Container textAlign="justified">
                            Passionate about solving problems hidden behind financial market and code.
                        </Container>
                    </Header.Subheader>
                </Header>
                <Divider />

                <NameItem title="Name" content="Ho Yi Kang" />
                <NameItem title="Email" content="ykang.ho@gmail.com" />
                <NameItem title="Cell" content="0926-169-252" />
                <NameItem title="Skype" content="ykang.ho" />
            </Segment>
        </div>
    );
};

export default Left;
