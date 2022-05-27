import React from "react";
import { Item, Divider, List, Segment } from "semantic-ui-react";
import ExperienceItem from "../components/ExperienceItem";

const Experience = () => {
    return (
        <div>
            <Segment inverted color="olive" piled>
                EXPERIENCE
            </Segment>
            <Item.Group>
                <ExperienceItem
                    img="images/Viewtrade.png"
                    companylink="https://www.viewtrade.com"
                    title="Technical Support"
                    company="ViewTrade, Taipei, Taiwan"
                    meta="2020/09 ~ Now"
                    description={
                        <List>
                            <List.Item>
                                <List.Icon name="caret right" color="orange" />
                                Tech support for FFI (Foreign Financial Institution) customers in Asia Pacific market
                            </List.Item>
                            <List.Item>
                                <List.Icon name="caret right" color="orange" />
                                Trading conneciton setup include FIX (Financial Information eXchange) and API connection
                            </List.Item>
                            <List.Item>
                                <List.Icon name="caret right" color="orange" />
                                U.S. real-time market data on front-end & back-end system
                            </List.Item>
                        </List>
                    }
                />

                <Divider />

                <ExperienceItem
                    img="images/Capital.png"
                    companylink="https://capital.com.tw"
                    title="Quantitative Researcher"
                    company="Capital Securities Corp., Taipei, Taiwan"
                    meta="2019/03 ~ 2020/04"
                    description={
                        <List>
                            <List.Item>
                                <List.Icon name="caret right" color="orange" />
                                Quantitative / Program trade derivative financial contracts
                            </List.Item>
                            <List.Item>
                                <List.Icon name="caret right" color="orange" />
                                Trading strategy development, historical data back testing in Backtrader
                            </List.Item>
                            <List.Item>
                                <List.Icon name="caret right" color="orange" />
                                Monitor daily portfolio and risk control
                            </List.Item>
                            <List.Item>
                                <List.Icon name="caret right" color="orange" />
                                Trading software development for quoting and ordering system.
                            </List.Item>
                            <List.Item>
                                <List.Icon name="caret right" color="orange" />
                                Financial data organization, trading database adn visualized website setup.
                            </List.Item>
                            <List.Item>
                                <List.Icon name="caret right" color="orange" />
                                Skilled at Python, C#, JavaScript, Excel VBA, Backtrader
                            </List.Item>
                        </List>
                    }
                />

                <Divider />

                <ExperienceItem
                    img="images/Sinopac.png"
                    companylink="https://www.spf.com.tw"
                    title="Proprietary Trader"
                    company="Sinopac Futures, Taipei, Taiwan"
                    meta="2017/07 ~ 2019/01"
                    description={
                        <List>
                            <List.Item>
                                <List.Icon name="caret right" color="orange" />
                                Proprietary trader, experience in the field of Indices Futures, Options, Forex
                            </List.Item>
                            <List.Item>
                                <List.Icon name="caret right" color="orange" />
                                Quantitative / Program trading, financial data analysis and back testing
                            </List.Item>
                            <List.Item>
                                <List.Icon name="caret right" color="orange" />
                                Achieve yearly profit target (18% of invest amount) within half year
                            </List.Item>
                            <List.Item>
                                <List.Icon name="caret right" color="orange" />
                                Strategies development, management
                            </List.Item>
                            <List.Item>
                                <List.Icon name="caret right" color="orange" />
                                Daily position monitoring and risk control{" "}
                            </List.Item>
                            <List.Item>
                                <List.Icon name="caret right" color="orange" />
                                Quoting / Ordering system development, data visualization
                            </List.Item>
                        </List>
                    }
                />

                <Divider />
                <ExperienceItem
                    img="images/amtran.gif"
                    companylink="https://www.amtran.com.tw"
                    title="Customer Service Manager"
                    company="AmTran Technology, Suchou, China"
                    meta="2013/05 ~ 2017/03"
                    description={
                        <List>
                            <List.Item>
                                <List.Icon name="caret right" color="orange" />
                                Lead a global customer service team
                            </List.Item>
                            <List.Item>
                                <List.Icon name="caret right" color="orange" />
                                Manage worldwide LCD TV, monitor products RMA services
                            </List.Item>
                            <List.Item>
                                <List.Icon name="caret right" color="orange" />
                                Manage and coordinate global repair center resources and after-sales service materials
                            </List.Item>
                            <List.Item>
                                <List.Icon name="caret right" color="orange" />
                                Field technical issues solving / product technical support
                            </List.Item>
                            <List.Item>
                                <List.Icon name="caret right" color="orange" />
                                After sales service and quality contracts setup and review
                            </List.Item>
                            <List.Item>
                                <List.Icon name="caret right" color="orange" />
                                Coordinate and solve field product quality and technical issues
                            </List.Item>
                            <List.Item>
                                <List.Icon name="caret right" color="orange" />
                                Technical training and technical document release
                            </List.Item>
                            <List.Item>
                                <List.Icon name="caret right" color="orange" />
                                Service cost prediction, service budget control
                            </List.Item>
                        </List>
                    }
                />

                <Divider />
                <ExperienceItem
                    img="images/Qisda.png"
                    companylink="https://www.qisda.com.tw"
                    title="Senior Engineer"
                    company="Qisda, Taipei, Taiwan"
                    meta="2010/09 ~ 2013/04"
                    description={
                        <List>
                            <List.Item>
                                <List.Icon name="caret right" color="orange" />
                                Technical issues solving and on-site support for mobile phone and portable devices.
                            </List.Item>
                            <List.Item>
                                <List.Icon name="caret right" color="orange" />
                                World wide field trial, live network test for LTE, WCDMA, GPRS and Operator network
                                certification test
                            </List.Item>
                            <List.Item>
                                <List.Icon name="caret right" color="orange" />
                                Test cases creation and modification for new product
                            </List.Item>
                            <List.Item>
                                <List.Icon name="caret right" color="orange" />
                                Quality issue analysis & control
                            </List.Item>
                            <List.Item>
                                <List.Icon name="caret right" color="orange" />
                                Product system and reliability test
                            </List.Item>
                            <List.Item>
                                <List.Icon name="caret right" color="orange" />
                                Auto test tool development and maintenance
                            </List.Item>
                        </List>
                    }
                />

                <Divider />
                <ExperienceItem
                    img="images/acer.jfif"
                    companylink="https://www.acer.com"
                    title="Field Trial Engineer"
                    company="Acer, Taipei, Taiwan"
                    meta="2008/12 ~ 2010/08"
                    description={
                        <List>
                            <List.Item>
                                <List.Icon name="caret right" color="orange" />
                                Worldwide field trial, live network test for LTE, WCDMA, GPRS and operator network
                                certification test
                            </List.Item>
                            <List.Item>
                                <List.Icon name="caret right" color="orange" />
                                Quality issue management and analysis
                            </List.Item>
                            <List.Item>
                                <List.Icon name="caret right" color="orange" />
                                System and reliability test of new product
                            </List.Item>
                            <List.Item>
                                <List.Icon name="caret right" color="orange" />
                                Auto test tool development & system setup
                            </List.Item>
                            <List.Item>
                                <List.Icon name="caret right" color="orange" />
                                Test cases maintenance and new test cases creation
                            </List.Item>
                        </List>
                    }
                />
            </Item.Group>
        </div>
    );
};

export default Experience;
