import React from "react";
import { Card, Segment } from "semantic-ui-react";
import ProjectItem from "../components/ProjectItem";

const Project = () => {
    return (
        <div>
            <Segment inverted color="teal" piled>
                PROJECTS
            </Segment>
            <Card.Group stackable itemsPerRow={2}>
                <ProjectItem
                    img="images/vttwproj.png"
                    header="U.S. Stocks watch NEW"
                    meta="Python, JavaScript, Django, ReactJS, CSS, MySQL, Postgre SQL"
                    description="This is update version of U.S. Stock watch, which support Responsive WebDesign (RWD), integrated customer trading analysis report and latest U.S. stock news. Other features such as stock basic information, ADR & ETF filters, categories filters, corporate actions,... are also included."
                />
                <ProjectItem
                    img="images/vttw.png"
                    header="U.S. Stocks watch"
                    meta="Python, JavaScript, Django, ReactJS, CSS, MySQL, Postgre SQL"
                    description="This project is created for demonstrating US stock market information. Data include individual stock info along with company basic data, financial report, earning calendars. Filter ETFs and ADRs with specific categories, types, and regions. Other information such as corporate actions, FIX connection monitoring,…etc."
                />
                <ProjectItem
                    img="images/Quote.png"
                    header="Backend Quote"
                    meta="Python, MySQL, Redis, PyQT"
                    description="Backend quote system for TAIFEX Futures, The program gets real-time quote from broker's streaming and process those tick data to kbar and front-end trading information. Products includes major Futures contracts, major stock symbols and major FOREX & Indices Futures. "
                />

                <ProjectItem
                    img="images/taiquant_1.png"
                    header="TX Watch"
                    meta="Python, Flask, MySQL,  JavaScript, CSS, Mongo, Redis, Plotly"
                    description="This project is created for helping day traders to find intra-day buy and sell signals. The charting is collected and calculated by tick values. By getting the real-time ticks, analyze and parse the very detail information within each Kbar and volumes in order to find the momentum and trends."
                />
                {/* <ProjectItem
                    img="images/taiquant_2.png"
                    header="TX Watch II"
                    meta="Python, Flask, Mongo, MySQL, JavaScript, CSS, Redis, Plotly"
                    description="This is created for monitoring the trend of major stocks and futures in both Taiwan and foreign market. Charts and figures are arranged and displayed by the up and down factors with eye-catching color and arrangement."
                /> */}
                <ProjectItem
                    img="images/TraderToGoMain.png"
                    header="Auto Trading"
                    meta="C#.NET, MySQL, SQLite"
                    description="This project is created for Futures contracts auto trading. It collects strategies buying and selling signals from trading software Marticharts and deliver signals directly to brokers ordering system. It supports trading strategies management, proportion ordering, ordering contracts replacement, real-time position monitoring and profit/loss calculation (charting)."
                />
                <ProjectItem
                    img="images/PositionWatch.png"
                    header="Position Watch"
                    meta="C#.NET, MySQL, SQLite"
                    description="This project is used for monitoring current holding position. Trading strategies may came from different signal or different trading platform. It can help trader to watch their real-time position within one monitor. This project current support three major Future contracts, TX, TE, TF in TAIFEX."
                />
                <ProjectItem
                    img="images/strategy1.png"
                    header="TX Trading Strategy"
                    meta="Python, Flask, JavaScript, CSS, MySQL, Mongo, Redis, Plotly"
                    description="There are sample strategies collected in this project. Strategies collect daily after-market major Institutional information position as a base to form trading signals. Each strategy run through back-testing and show historical information by readable charts."
                />
            </Card.Group>
        </div>
    );
};

export default Project;
