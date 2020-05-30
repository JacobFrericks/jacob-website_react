import React from 'react';
import styles from './Portfolio.module.css';
import aca_eagles from "../img/portfolio/aca_eagles/announcements.png";
import mid_iowa_vending from '../img/portfolio/mid_iowa_vending/quality_vending.png';
import cassie_tutoring from "../img/portfolio/cassie_tutor/home.png";
import color_game from "../img/portfolio/Color_Game_full.png";
import blueville from "../img/portfolio/blueville/main.png";
import d1i from "../img/portfolio/d1i/main-screen.png";
import awesome_scheduler from "../img/portfolio/awesome_scheduler/scheduler-main-screen.png";
import connect_four from "../img/portfolio/connectfour/game-pic.png";
import play_all_night from "../img/portfolio/playallnight/playallnight.png";

import aca_eagles_template from "../img/portfolio/aca_eagles/news.png";
import mid_iowa_vending_template from "../img/portfolio/mid_iowa_vending/quality_vending.png";
import cassie_tutoring_template from "../img/portfolio/cassie_tutor/home.png";
import play_all_night_template from "../img/portfolio/playallnight/playallnight.png";
import color_game_template from "../img/portfolio/Color_Game_full.png";
import d1i_template from "../img/portfolio/d1i/main-screen.png";
import blueville_template from "../img/portfolio/blueville/main.png";
import awesome_scheduler_template from "../img/portfolio/awesome_scheduler/scheduler-main-screen.png";
import connect_four_template from "../img/portfolio/connectfour/game-pic.png";


const Portfolio = () => {
    return (
        <section id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2>Portfolio</h2>
                        <br/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 portfolio-item">
                        <a href="#acaEagles" className="portfolio-link" data-toggle="modal">
                            <div className="caption">
                                <div className="caption-content">
                                    <i className="fa fa-search-plus fa-3x"/>
                                </div>
                            </div>
                            <img src={aca_eagles_template} className="img-responsive" alt=""/>
                        </a>
                    </div>
                    <div className="col-sm-4 portfolio-item">
                        <a href="#midIowaVending" className="portfolio-link" data-toggle="modal">
                            <div className="caption">
                                <div className="caption-content">
                                    <i className="fa fa-search-plus fa-3x"/>
                                </div>
                            </div>
                            <img src={mid_iowa_vending_template} className="img-responsive" alt=""/>
                        </a>
                    </div>
                    <div className="col-sm-4 portfolio-item">
                        <a href="#cassieTutor" className="portfolio-link" data-toggle="modal">
                            <div className="caption">
                                <div className="caption-content">
                                    <i className="fa fa-search-plus fa-3x"/>
                                </div>
                            </div>
                            <img src={cassie_tutoring_template} className="img-responsive" alt=""/>
                        </a>
                    </div>
                    <div className="col-sm-4 portfolio-item">
                        <a href="#playallnight" className="portfolio-link" data-toggle="modal">
                            <div className="caption">
                                <div className="caption-content">
                                    <i className="fa fa-search-plus fa-3x"/>
                                </div>
                            </div>
                            <img src={play_all_night_template} className="img-responsive" alt=""/>
                        </a>
                    </div>
                    <div className="col-sm-4 portfolio-item">
                        <a href="#colorgame" className="portfolio-link" data-toggle="modal">
                            <div className="caption">
                                <div className="caption-content">
                                    <i className="fa fa-search-plus fa-3x"/>
                                </div>
                            </div>
                            <img src={color_game_template} className="img-responsive" alt=""/>
                        </a>
                    </div>
                    <div className="col-sm-4 portfolio-item">
                        <a href="#district1invasion" className="portfolio-link" data-toggle="modal">
                            <div className="caption">
                                <div className="caption-content">
                                    <i className="fa fa-search-plus fa-3x"/>
                                </div>
                            </div>
                            <img src={d1i_template} className="img-responsive" alt=""/>
                        </a>
                    </div>
                    <div className="col-sm-4 portfolio-item">
                        <a href="#blueville" className="portfolio-link" data-toggle="modal">
                            <div className="caption">
                                <div className="caption-content">
                                    <i className="fa fa-search-plus fa-3x"/>
                                </div>
                            </div>
                            <img src={blueville_template} className="img-responsive" alt=""/>
                        </a>
                    </div>
                    <div className="col-sm-4 portfolio-item">
                        <a href="#awesomescheduler" className="portfolio-link" data-toggle="modal">
                            <div className="caption">
                                <div className="caption-content">
                                    <i className="fa fa-search-plus fa-3x"/>
                                </div>
                            </div>
                            <img src={awesome_scheduler_template}
                                 className="img-responsive" alt=""/>
                        </a>
                    </div>

                    <div className="col-sm-4 portfolio-item">
                        <a href="#connectfour" className="portfolio-link" data-toggle="modal">
                            <div className="caption">
                                <div className="caption-content">
                                    <i className="fa fa-search-plus fa-3x"/>
                                </div>
                            </div>
                            <img src={connect_four_template} className="img-responsive" alt=""/>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
        
};
    {/*<div className={styles.module}>*/}
    {/*    <div className={styles.title}> PORTFOLIO </div>*/}
    {/*    <div className="portfolio-modal modal fade" id="acaEagles" tabIndex={-1} role="dialog" aria-hidden="true">*/}
    {/*        <div className="modal-content">*/}
    {/*            <div className="container">*/}
    {/*                <div className="row">*/}
    {/*                    <div className="col-lg-8 col-lg-offset-2">*/}
    {/*                        <div className="modal-body">*/}
    {/*                            <h2>ACA Eagles</h2>*/}
    {/*                            <br/>*/}
    {/*                            <img src={aca_eagles} className="img-responsive img-centered" alt=""/>*/}
    {/*                            <p>This Android and IOS application was built for my old High School.*/}
    {/*                                It provides users direct access to the most recent news, announcements,*/}
    {/*                                events,*/}
    {/*                                general information about the school, and more.*/}
    {/*                                See <a href="https://play.google.com/store/apps/details?id=com.ankenychristianacademy.ankenychristianacademy">here</a> for*/}
    {/*                                more details. </p>*/}
    {/*                            <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"/> Close</button>*/}
    {/*                        </div>*/}
    {/*                    </div>*/}
    {/*                </div>*/}
    {/*            </div>*/}
    {/*        </div>*/}
    {/*    </div>*/}
    
    {/*    <div className="portfolio-modal modal fade" id="midIowaVending" tabIndex={-1} role="dialog"*/}
    {/*         aria-hidden="true">*/}
    {/*        <div className="modal-content">*/}
    {/*            <div className="container">*/}
    {/*                <div className="row">*/}
    {/*                    <div className="col-lg-8 col-lg-offset-2">*/}
    {/*                        <div className="modal-body">*/}
    {/*                            <h2>Mid Iowa Vending</h2>*/}
    {/*                            <br/>*/}
    {/*                            <img src={mid_iowa_vending} className="img-responsive img-centered" alt=""/>*/}
    {/*                            <p>Mid Iowa Vending is a website I created for a friend who is starting a*/}
    {/*                                vending machine business. This was*/}
    {/*                                created using Flutter (which uses Dart). I have setup a pipeline to have*/}
    {/*                                it test, build, and deploy*/}
    {/*                                automatically when a push to the master branch occurs.*/}
    {/*                                <br/><br/>*/}
    {/*                                The "Contact Us" page sends the provided information to*/}
    {/*                                an AWS Lambda, which will send an email to Mid Iowa Vending. The*/}
    {/*                                site is built on GitHub, and uses GitHub*/}
    {/*                                Actions for the pipeline. It is hosted on GitHub pages.*/}
    {/*                            </p>*/}
    {/*                            <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"/> Close</button>*/}
    {/*                        </div>*/}
    {/*                    </div>*/}
    {/*                </div>*/}
    {/*            </div>*/}
    {/*        </div>*/}
    {/*    </div>*/}
    
    {/*    <div className="portfolio-modal modal fade" id="cassieTutor" tabIndex={-1} role="dialog" aria-hidden="true">*/}
    {/*        <div className="modal-content">*/}
    {/*            <div className="container">*/}
    {/*                <div className="row">*/}
    {/*                    <div className="col-lg-8 col-lg-offset-2">*/}
    {/*                        <div className="modal-body">*/}
    {/*                            <h2>Cassie's Tutoring</h2>*/}
    {/*                            <br/>*/}
    {/*                            <img src={cassie_tutoring} className="img-responsive img-centered" alt=""/>*/}
    {/*                            <p>Cassie's Tutoring is a website that I created for my wife, who started*/}
    {/*                                tutoring on the side. It's targeted at 5th graders and under. This was*/}
    {/*                                created using ReactJs.*/}
    {/*                                <br/><br/>*/}
    {/*                                The "Contact Me" page sends the provided information to an AWS*/}
    {/*                                Lambda, which will*/}
    {/*                                send an email to us. The site is built on GitHub, and is hosted on*/}
    {/*                                GitHub pages.*/}
    {/*                            </p>*/}
    {/*                            <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"/> Close</button>*/}
    {/*                        </div>*/}
    {/*                    </div>*/}
    {/*                </div>*/}
    {/*            </div>*/}
    {/*        </div>*/}
    {/*    </div>*/}
    
    {/*    <div className="portfolio-modal modal fade" id="colorgame" tabIndex={-1} role="dialog" aria-hidden="true">*/}
    {/*        <div className="modal-content">*/}
    {/*            <div className="container">*/}
    {/*                <div className="row">*/}
    {/*                    <div className="col-lg-8 col-lg-offset-2">*/}
    {/*                        <div className="modal-body">*/}
    {/*                            <h2>Color Game</h2>*/}
    {/*                            <br/>*/}
    {/*                            <img src={color_game} className="img-responsive img-centered" alt=""/>*/}
    {/*                            <p>This is a game that helps you practice deciphering RGB color codes. I*/}
    {/*                                created this as a class*/}
    {/*                                project when learning web development. You can play the game now by*/}
    {/*                                clicking*/}
    {/*                                <a href="../colorgame/colorgame.html" target="_blank">here</a>.</p>*/}
    {/*                            <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"/> Close</button>*/}
    {/*                        </div>*/}
    {/*                    </div>*/}
    {/*                </div>*/}
    {/*            </div>*/}
    {/*        </div>*/}
    {/*    </div>*/}
    {/*    <div className="portfolio-modal modal fade" id="blueville" tabIndex={-1} role="dialog" aria-hidden="true">*/}
    {/*        <div className="modal-content">*/}
    {/*            <div className="container">*/}
    {/*                <div className="row">*/}
    {/*                    <div className="col-lg-8 col-lg-offset-2">*/}
    {/*                        <div className="modal-body">*/}
    {/*                            <h2>BlueVille</h2>*/}
    {/*                            <br/>*/}
    {/*                            <img src={blueville} className="img-responsive img-centered" alt=""/>*/}
    {/*                            <p>BlueVille was an android app that myself and three others created for an*/}
    {/*                                internal IBM hackathon in early 2014.*/}
    {/*                                The purpose for the hackathon was to use IBM’s Mobile Backend as a*/}
    {/*                                Service platform called BlueMix.*/}
    {/*                                This product was in open beta at the time of the hackathon, and they*/}
    {/*                                wanted a bunch of us to test it out.*/}
    {/*                                BlueVille mainly used the service that created a backend database. We*/}
    {/*                                used this database to synchronize information*/}
    {/*                                across all devices.</p>*/}
    
    {/*                            <p>BlueVille is a community networking application, whose users are a part*/}
    {/*                                of a community that is based on the geographical*/}
    {/*                                location of other app users. The app simulates the community that is*/}
    {/*                                naturally formed by people in the same place such*/}
    {/*                                as within your office, within the neighborhood you live in, or those*/}
    {/*                                attending the same play or sporting event.</p>*/}
    
    {/*                            <p>The difference between the BlueVille and other community based network*/}
    {/*                                apps like Nextdoor or Life360 is that a BlueVille*/}
    {/*                                community is dynamically formed of the people that are in the same*/}
    {/*                                geographic location as you. When you are at home the*/}
    {/*                                community is other users that live near you. When you are driving into a*/}
    {/*                                new city the community is other people in the city.*/}
    {/*                                When you go to a new restaurant your community is the other BlueVille*/}
    {/*                                users at the restaurant. Imagine walking into a new*/}
    {/*                                restaurant and shouting “Is the special any good tonight!!” That’s*/}
    {/*                                probably not going to happen, but BlueVille allows you*/}
    {/*                                to get the same information without looking like a fool.</p>*/}
    
    {/*                            <p>When a person installs BlueVille they decide the geographic size of the*/}
    {/*                                community they are interested in and what type*/}
    {/*                                of information they will receive. As they move through their day the*/}
    {/*                                community where they exist is dynamically changing.*/}
    {/*                                At anytime they can receive valuable information from those around*/}
    {/*                                them.</p>*/}
    
    {/*                            <p>The advantage of the BlueVille approach is that users with a common*/}
    {/*                                interest in geographic based information will be*/}
    {/*                                joined regardless of where they are located. They are not bound to*/}
    {/*                                information from a static community. This is important*/}
    {/*                                because in life the community that you are a member of is constantly*/}
    {/*                                changing. Here are a couple use cases for that*/}
    {/*                                demonstrate the usefulness of BlueVille and it’s dynamics community*/}
    {/*                                notifications.</p>*/}
    
    {/*                            <p>Use Case #1 – Traffic: You are driving along the expressway and suddenly*/}
    {/*                                traffic stops. You wonder “What is causing the*/}
    {/*                                traffic stoppage?”. Will you need to change your route or wait until*/}
    {/*                                traffic gets moving again. If you decide to change*/}
    {/*                                route to avoid the stoppage you would like to know the best alternate*/}
    {/*                                route. You registered for “Traffic” tags before you*/}
    {/*                                left home so when the person in the front of the line submits an item to*/}
    {/*                                BlueVille stating that a tow is removing a*/}
    {/*                                stalled vehicle and traffic will be flowing soon, you and everyone*/}
    {/*                                subscribed to “Traffic” notifications gets a notification*/}
    {/*                                that there is a stalled vehicle ahead, and you will be moving soon.</p>*/}
    
    {/*                            <p>Use Case #2 – Suspicious Person: You are at a hotel in a strange city and*/}
    {/*                                planning to leave for dinner. You are a medical*/}
    {/*                                doctor so when you arrive at the hotel you register for “Medical”,*/}
    {/*                                “Crime” and “Suspicious Persons” on the BlueVille app.*/}
    {/*                                Moments before you leave the hotel you receive a notification from a*/}
    {/*                                member of the BlueVille community that contains a*/}
    {/*                                picture of a group of people on the street outside the hotel. The*/}
    {/*                                notification says “This group is shouting profanity at*/}
    {/*                                everyone that leaves the hotel”. Based on the photo and comments, you*/}
    {/*                                decide to eat at the hotel restaurant and avoid the*/}
    {/*                                potential trouble.</p>*/}
    
    {/*                            <p>BlueVille uses IBM’s Mobile Backend as a Service (MBaaS) service for*/}
    {/*                                mobile data in conjunction with google map support to*/}
    {/*                                save items that are posted by community members. Each post contains the*/}
    {/*                                location of the item, the item data and the item tag*/}
    {/*                                which identifies the category that describes the item.</p>*/}
    
    {/*                            <p>A users mobile device will signal the backend BlueVille service with the*/}
    {/*                                device’s current location. When posts are received*/}
    {/*                                within the user selected geographic range application will determine if*/}
    {/*                                the user has chosen to receive notifications for this tag.*/}
    {/*                                If the tag category was selected a notification will appear on the main*/}
    {/*                                screen of BlueVille.</p>*/}
    {/*                            <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"/> Close</button>*/}
    {/*                        </div>*/}
    {/*                    </div>*/}
    {/*                </div>*/}
    {/*            </div>*/}
    {/*        </div>*/}
    {/*    </div>*/}
    {/*    <div className="portfolio-modal modal fade" id="district1invasion" tabIndex={-1} role="dialog"*/}
    {/*         aria-hidden="true">*/}
    {/*        <div className="modal-content">*/}
    {/*            <div className="container">*/}
    {/*                <div className="row">*/}
    {/*                    <div className="col-lg-8 col-lg-offset-2">*/}
    {/*                        <div className="modal-body">*/}
    {/*                            <h2>District 1: Invasion</h2>*/}
    {/*                            <br/>*/}
    {/*                            <img src={d1i} className="img-responsive img-centered" alt=""/>*/}
    {/*                            <p><b>District 1: Invasion (D1:I)</b> is a team project that I and three*/}
    {/*                                other students got*/}
    {/*                                together for a class project. It is a top down shooter game written in*/}
    {/*                                Java that involves both*/}
    {/*                                single and multi player. Aliens appear in waves, and it is the player’s*/}
    {/*                                job to shoot the aliens*/}
    {/*                                before their health goes down to zero.</p>*/}
    {/*                            <p>The program takes advantage of the Java Applet performance, and runs very*/}
    {/*                                smoothly. The player*/}
    {/*                                is allowed to move using a/w/s/d and shoot using the mouse. The player*/}
    {/*                                has two slots for guns,*/}
    {/*                                and can drop/pick up different guns found around the map (including*/}
    {/*                                assault rifle, pistol, sniper*/}
    {/*                                and rocket launcher). The player also has two slots for special items*/}
    {/*                                (the two we implemented were*/}
    {/*                                grenades and health packs). During multiplayer, everything is synced*/}
    {/*                                with all other computers, so*/}
    {/*                                two people cannot pick up the same item. We also used 3DS Max for our*/}
    {/*                                game GUI animations.</p>*/}
    {/*                            <p>Although we had a limited amount of time, we were not only able to*/}
    {/*                                release a full featured game,*/}
    {/*                                but also the menus. The menus included a main screen, full tutorial, the*/}
    {/*                                option to choose single*/}
    {/*                                player or multiplayer, a list to choose what game to play and a fully*/}
    {/*                                functional chat if multiplayer*/}
    {/*                                is chosen.</p>*/}
    {/*                            <p>The multiplayer was the hardest part of the game. Thankfully, one of the*/}
    {/*                                team members had a desktop*/}
    {/*                                computer we used for the server, and in the end, the multiplayer ran*/}
    {/*                                smoothly with very little lag*/}
    {/*                                (regardless of the bad wireless during the demo). Security and*/}
    {/*                                protection against SQL injection and*/}
    {/*                                other common hacking techniques were also implemented.</p>*/}
    {/*                            <p>We currently have three different aliens (with different HP, damage and*/}
    {/*                                speed), one level with one wave,*/}
    {/*                                and five different guns. Although this may not seem like a lot, we made*/}
    {/*                                it modular. This means that we can*/}
    {/*                                very easily add more waves, more levels, different maps, more aliens and*/}
    {/*                                different guns. If we decide to*/}
    {/*                                take the game to the next level, it would be really easy to add more*/}
    {/*                                parts to make it a fully featured game.</p>*/}
    {/*                            <p>We submitted this project for a competition against 32 other teams. We*/}
    {/*                                got the “Best Software Project*/}
    {/*                                Silver Award” (missed Gold by three votes), but we were very proud to*/}
    {/*                                have gotten as far as we had on the*/}
    {/*                                project, especially given our time frame and other commitments.</p>*/}
    {/*                            <p>NOTE: Unfortunately, since the snapshots were taken after the class, I*/}
    {/*                                don't have any snapshots of multiplayer.*/}
    {/*                                This means that you won’t be able to see any server side activity,*/}
    {/*                                including chats. Also,*/}
    {/*                                since this wasn't a photography class, we were allowed to use any image*/}
    {/*                                we found online, with the understanding*/}
    {/*                                that if we wanted to publish our work outside the class, we would need*/}
    {/*                                to redo the images.</p>*/}
    {/*                            <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"/> Close</button>*/}
    {/*                        </div>*/}
    {/*                    </div>*/}
    {/*                </div>*/}
    {/*            </div>*/}
    {/*        </div>*/}
    {/*    </div>*/}
    {/*    <div className="portfolio-modal modal fade" id="awesomescheduler" tabIndex={-1} role="dialog"*/}
    {/*         aria-hidden="true">*/}
    {/*        <div className="modal-content">*/}
    {/*            <div className="container">*/}
    {/*                <div className="row">*/}
    {/*                    <div className="col-lg-8 col-lg-offset-2">*/}
    {/*                        <div className="modal-body">*/}
    {/*                            <h2>Awesome Scheduler</h2>*/}
    {/*                            <br/>*/}
    {/*                            <img src={awesome_scheduler}*/}
    {/*                                 className="img-responsive img-centered" alt=""/>*/}
    {/*                            <p>This is an application that will help a school develop a schedule more*/}
    {/*                                tailored to a student’s wants and desires.*/}
    {/*                                This is a project for ComS 362 - Object-Oriented Analysis and Design,*/}
    {/*                                which is more focused on project design rather*/}
    {/*                                than making it look pretty. It’s because of this that my group decided*/}
    {/*                                to focus less on the graphical user interface*/}
    {/*                                (GUI) and algorithms, and more on the development of the project. In*/}
    {/*                                other words, it won’t be fast or pretty, but it*/}
    {/*                                will be well made. (Note, if this were an actual product we would focus*/}
    {/*                                on all of the above, but due to time constraints*/}
    {/*                                we decided to focus on what will get us an A and then use the remainder*/}
    {/*                                time to make it fast and pretty).</p>*/}
    {/*                            <p>We have 3 users, the administrator, the teacher and the student. The*/}
    {/*                                student will be able to add the top three electives*/}
    {/*                                that they wish to take. The teacher will be able to edit their*/}
    {/*                                availability to teach their main class.*/}
    {/*                                The administrator will be able to edit all of the above, and actually*/}
    {/*                                generate the schedule.</p>*/}
    {/*                            <p>The focus of this class is to get us to practice using the Model View*/}
    {/*                                Controller (MVC) pattern. This pattern is designed*/}
    {/*                                mainly for re-usability. You have a “Black Box” program, and use*/}
    {/*                                controllers to handle the UI and the database.*/}
    {/*                                Using this pattern will allow others to use your code, but easily change*/}
    {/*                                out your UI or database for another.</p>*/}
    {/*                            <p><a href="../img/portfolio/awesome_scheduler/scheduler-design.pdf"*/}
    {/*                                  target="_blank">Click this link</a> for our design document.*/}
    {/*                                This document includes our inception paragraph, list of actors, plan for*/}
    {/*                                the three iterations and the use cases and their*/}
    {/*                                descriptions. The description of each use case includes the name, actor,*/}
    {/*                                precondition, Main Success Scenario (MSS),*/}
    {/*                                information experts, and (for a few use cases) an extension.</p>*/}
    {/*                            <p>You’ll notice in the design that we had to modify some use cases after*/}
    {/*                                Iteration 1 and 2. The reason for the changes*/}
    {/*                                after iteration are obvious, but I want to explain the changes after*/}
    {/*                                Iteration 2. One of the use cases during Iteration 2*/}
    {/*                                was “Generate Schedules”. The idea behind this use case was that the*/}
    {/*                                instructors could choose a certain period that they*/}
    {/*                                would like to teach a study hall (if you’re unfamiliar with high school*/}
    {/*                                study halls, that’s where the students study*/}
    {/*                                at their desks, and the instructor does lesson plans). I just happen to*/}
    {/*                                be in a complex algorithms class at the same time,*/}
    {/*                                so I set up a meeting to talk to the professor of that class to come up*/}
    {/*                                with an algorithm for this. After a few hours, we*/}
    {/*                                decided that this algorithm, while very interesting, is also considered*/}
    {/*                                NP-Hard. While solvable, this algorithm would*/}
    {/*                                probably take more time than what we have to come up with it. I talked*/}
    {/*                                to the professor teaching my ComS 362 class, and*/}
    {/*                                since this class isn’t focused on the algorithm, he approved the*/}
    {/*                                suggestion to not allow the instructors to choose what*/}
    {/*                                periods to take their study halls. This simplified the algorithm enough*/}
    {/*                                for us to easily generate schedules. The way the*/}
    {/*                                program is designed, however, we can easily swap out another algorithm,*/}
    {/*                                if we come up with a better one.</p>*/}
    {/*                            <p>Keep in mind, that we spent a total of about 30 minutes on the GUI, so*/}
    {/*                                this won’t be as pretty as some of my other projects.*/}
    {/*                                This can be easily fixed in the future however, since we followed the*/}
    {/*                                MVC pattern we can easily swap out another user interface.</p>*/}
    {/*                            <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"/> Close*/}
    {/*                            </button>*/}
    {/*                        </div>*/}
    {/*                    </div>*/}
    {/*                </div>*/}
    {/*            </div>*/}
    {/*        </div>*/}
    {/*    </div>*/}
    {/*    <div className="portfolio-modal modal fade" id="connectfour" tabIndex={-1} role="dialog" aria-hidden="true">*/}
    {/*        <div className="modal-content">*/}
    {/*            <div className="container">*/}
    {/*                <div className="row">*/}
    {/*                    <div className="col-lg-8 col-lg-offset-2">*/}
    {/*                        <div className="modal-body">*/}
    {/*                            <h2>Connect Four</h2>*/}
    {/*                            <br/>*/}
    {/*                            <img src={connect_four} className="img-responsive img-centered" alt=""/>*/}
    {/*                            <p>This was a project that was for a graduate level AI class, requiring the*/}
    {/*                                use of one algorithm talked about in class.*/}
    {/*                                The algorithm I decided to use was the minimax algorithm.</p>*/}
    
    {/*                            <p>There were specific requirements for this class, so I wasn’t able to make*/}
    {/*                                a complete product (no GUI for instance),*/}
    {/*                                but the algorithms described in the <a*/}
    {/*                                    href="https://github.com/JacobFrericks/Connect-Four/"*/}
    {/*                                    target="_blank">source code</a>*/}
    {/*                                are working.</p>*/}
    
    {/*                            <p>Like previously mentioned, I will use the Minimax algorithm, along with a*/}
    {/*                                predefined depth. This depth is given by*/}
    {/*                                the player’s choice of difficulty (ie, depth 1 for easy, 3 for medium, 6*/}
    {/*                                for hard). The “super easy”*/}
    {/*                                level is where the computer randomly chooses a slot, and doesn’t perform*/}
    {/*                                the algorithm altogether.</p>*/}
    
    {/*                            <p>If you're interested, here is the <a*/}
    {/*                                href="../img/portfolio/connectfour/report.pdf" target="_blank">full*/}
    {/*                                report</a>*/}
    {/*                                and the <a href="../img/portfolio/connectfour/presentation.pdf"*/}
    {/*                                           target="_blank">presentation</a>.</p>*/}
    
    {/*                            <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"/> Close*/}
    {/*                            </button>*/}
    {/*                        </div>*/}
    {/*                    </div>*/}
    {/*                </div>*/}
    {/*            </div>*/}
    {/*        </div>*/}
    {/*    </div>*/}
    {/*    <div className="portfolio-modal modal fade" id="playallnight" tabIndex={-1} role="dialog"*/}
    {/*         aria-hidden="true">*/}
    {/*        <div className="modal-content">*/}
    {/*            <div className="container">*/}
    {/*                <div className="row">*/}
    {/*                    <div className="col-lg-8 col-lg-offset-2">*/}
    {/*                        <div className="modal-body">*/}
    {/*                            <h2>Play All Night</h2>*/}
    {/*                            <br/>*/}
    {/*                            <img src={play_all_night}*/}
    {/*                                 className="img-responsive img-centered" alt=""/>*/}
    {/*                            <p>This is an application that I created for my wife because she had a need*/}
    {/*                                that we couldn’t find in any*/}
    {/*                                other app. She has an issue where she can’t sleep without some static*/}
    {/*                                noise or music playing in the background.*/}
    {/*                                We found an awesome track that puts her right to sleep (the static noise*/}
    {/*                                wasn’t working for her). The problem*/}
    {/*                                is that when it turns off, she is wide awake. So I started looking for*/}
    {/*                                an application that could play music*/}
    {/*                                until a certain time. We found one, but it wasn’t very convenient. It*/}
    {/*                                had a sleep function, but it only incremented*/}
    {/*                                by 5 min. In other words, if she wanted a full nights sleep, we would*/}
    {/*                                have to press the “+5 minutes” button about 96 times*/}
    {/*                                before we got the time we wanted. So I created this app.</p>*/}
    
    {/*                            <p>It is worth noting, that this app will never reach the Play Store. I*/}
    {/*                                decided it wasn’t worth the $25 to upload,*/}
    {/*                                only to have one person download it. It also allowed me to put the track*/}
    {/*                                directly into the assets folder, so we won’t have*/}
    {/*                                to keep track of it. Also, I followed a number of online tutorials to*/}
    {/*                                get this finished, but the main one is found*/}
    {/*                                <a href="http://hubpages.com/technology/How-to-Make-a-Simple-Media-Player-for-Android"*/}
    {/*                                   target="_blank">here</a>. I did*/}
    {/*                                deviate from it quite a bit near the end, but this was the best one that*/}
    {/*                                got me started in understanding how*/}
    {/*                                the MusicPlayer worked.</p>*/}
    {/*                            <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"/> Close*/}
    {/*                            </button>*/}
    {/*                        </div>*/}
    {/*                    </div>*/}
    {/*                </div>*/}
    {/*            </div>*/}
    {/*        </div>*/}
    {/*    </div>*/}
    {/*</div>*/}
export default Portfolio;