import React, {useEffect, useReducer, useRef, useState} from 'react';
import styles from './EmployeeDetails.module.css';
import ExperienceIcon from "@/icons/ExperienceIcon";
import ProjectIcon from "@/icons/ProjectIcon";
import CustomerSatisfaction from "@/icons/CustomerSatisfaction";

const EmployeeDetails: React.FC = () => {

    return (
        <div className={styles.container}>
            <div className={styles.firstSection}>
                <div className={styles.mainInfo}>
                    <div className={styles.description}>
                        <span className={styles.name}>Джон Доу</span>
                        <span className={styles.position}>Директор</span>
                    </div>
                    <div className={styles.infoInNumbers}>
                        <div className={styles.dataInNumbers}>
                            <div className={styles.iconContainer1}>
                                <ExperienceIcon/>
                            </div>
                            <div className={styles.texts}>
                                <span className={styles.number}>7+ </span>
                                <span className={styles.text}>лет опыта</span>
                            </div>
                        </div>
                        <div className={styles.dataInNumbers}>
                            <div className={styles.iconContainer2}>
                                <ProjectIcon/>
                            </div>
                            <div className={styles.texts}>
                                <span className={styles.number}>70+ </span>
                                <span className={styles.text}>проектов</span>
                            </div>
                        </div>
                        <div className={styles.dataInNumbers}>
                            <div className={styles.iconContainer3}>
                                <CustomerSatisfaction/>
                            </div>
                            <div className={styles.texts}>
                                <span className={styles.number}>50+ </span>
                                <span className={styles.text}>клиентов</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.firstImageContainer}>
                    <img className={styles.firstImage} src="/employee1.jpg" alt=""/>
                </div>
            </div>
            <div className={styles.thirdSection}>
                <div className={styles.sectionName}>
                    <span className={styles.name}>Курсы</span>
                </div>
                <div className={styles.containerCards}>
                    <div className={styles.card}>
                        <h3 className={styles.title}>Курс 1</h3>
                        <div className={styles.bar}>
                            <div className={styles.emptybar}></div>
                            <div className={styles.filledbar}></div>
                            <div className={styles.courseDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit.
                            </div>
                        </div>

                    </div>


                    <div className={styles.card}>
                        <h3 className={styles.title}>Курс 2</h3>
                        <div className={styles.bar}>
                            <div className={styles.emptybar}></div>
                            <div className={styles.filledbar}></div>
                            <div className={styles.courseDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit.
                            </div>
                        </div>

                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.title}>Курс 3</h3>
                        <div className={styles.bar}>
                            <div className={styles.emptybar}></div>
                            <div className={styles.filledbar}></div>
                            <div className={styles.courseDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit.
                            </div>
                        </div>

                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.title}>Курс 4</h3>
                        <div className={styles.bar}>
                            <div className={styles.emptybar}></div>
                            <div className={styles.filledbar}></div>
                            <div className={styles.courseDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit.
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={styles.thirdSection}>
                <div className={styles.sectionName}>
                    <span className={styles.name}>Сертификаты</span>
                </div>
                <div className={styles.containerCards}>
                    <div className={styles.card}>
                        <h3 className={styles.title}>Сертификат 1</h3>
                        <div className={styles.bar}>
                            <div className={styles.emptybar}></div>
                            <div className={styles.filledbar}></div>
                            <div className={styles.courseDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit.
                            </div>
                        </div>

                    </div>


                    <div className={styles.card}>
                        <h3 className={styles.title}>Сертификат 2</h3>
                        <div className={styles.bar}>
                            <div className={styles.emptybar}></div>
                            <div className={styles.filledbar}></div>
                            <div className={styles.courseDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit.
                            </div>
                        </div>

                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.title}>Сертификат 3</h3>
                        <div className={styles.bar}>
                            <div className={styles.emptybar}></div>
                            <div className={styles.filledbar}></div>
                            <div className={styles.courseDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit.
                            </div>
                        </div>

                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.title}>Сертификат 4</h3>
                        <div className={styles.bar}>
                            <div className={styles.emptybar}></div>
                            <div className={styles.filledbar}></div>
                            <div className={styles.courseDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit.
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className={styles.secondSection}>
                <div className={styles.sectionName}>
                    <span className={styles.name}>Клиенты</span>
                </div>
                <div className={styles.slider}>
                    <div className={styles['slide-track']}>
                        <div className={styles.slide}>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100"
                                 width="250" alt=""/>
                        </div>
                        <div className={styles.slide}>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100"
                                 width="250" alt=""/>
                        </div>
                        <div className={styles.slide}>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100"
                                 width="250" alt=""/>
                        </div>
                        <div className={styles.slide}>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100"
                                 width="250" alt=""/>
                        </div>
                        <div className={styles.slide}>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100"
                                 width="250" alt=""/>
                        </div>
                        <div className={styles.slide}>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100"
                                 width="250" alt=""/>
                        </div>
                        <div className={styles.slide}>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100"
                                 width="250" alt=""/>
                        </div>
                        <div className={styles.slide}>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100"
                                 width="250" alt=""/>
                        </div>
                        <div className={styles.slide}>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100"
                                 width="250" alt=""/>
                        </div>
                        <div className={styles.slide}>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100"
                                 width="250" alt=""/>
                        </div>
                        <div className={styles.slide}>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100"
                                 width="250" alt=""/>
                        </div>
                        <div className={styles.slide}>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100"
                                 width="250" alt=""/>
                        </div>
                        <div className={styles.slide}>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100"
                                 width="250" alt=""/>
                        </div>
                        <div className={styles.slide}>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100"
                                 width="250" alt=""/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default EmployeeDetails;