import React from 'react';

class Skills extends React.Component {
    render() {
        return (
            <>
                <div className="section" id="skills">
                    <br />
                    <center>
                        <h1>
                            <i className="bx bx-brain"></i>
                            &nbsp;Skills
                            <hr />
                        </h1>
                        <div className="col-md-10">
                            <h2>
                                <i className="bx bx-code-alt"></i>
                                &nbsp;Languages
                            </h2>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-2">
                                <h3>JavaScript</h3>
                                <div class="progress">
                                    <span class="progress-bar" style={{ width: 80 }}></span>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <h3>TypeScript</h3>
                                <div class="progress">
                                    <span class="progress-bar" style={{ width: 60 }}></span>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <h3>C++</h3>
                                <div class="progress">
                                    <span class="progress-bar" style={{ width: 60 }}></span>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <h3>C#</h3>
                                <div class="progress">
                                    <span class="progress-bar" style={{ width: 60 }}></span>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <h3>NodeJs</h3>
                                <div class="progress">
                                    <span class="progress-bar" style={{ width: 70 }}></span>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <h3>HTML/CSS</h3>
                                <div class="progress">
                                    <span class="progress-bar" style={{ width: 90 }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <h2>
                                <i class='bx bxs-component'></i>
                                &nbsp;Frameworks
                            </h2>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-2">
                                <h3>React JS</h3>
                                <div class="progress">
                                    <span class="progress-bar" style={{ width: 80 }}></span>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <h3>Express</h3>
                                <div class="progress">
                                    <span class="progress-bar" style={{ width: 70 }}></span>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <h3>React Native</h3>
                                <div class="progress">
                                    <span class="progress-bar" style={{ width: 60 }}></span>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <h3>Serverles</h3>
                                <div class="progress">
                                    <span class="progress-bar" style={{ width: 60 }}></span>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <h3>Material UI</h3>
                                <div class="progress">
                                    <span class="progress-bar" style={{ width: 80 }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <h2>
                                <i class='bx bxs-data'></i>
                                &nbsp;Databases
                            </h2>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-2">
                                <h3>MongoDB</h3>
                                <div class="progress">
                                    <span class="progress-bar" style={{ width: 80 }}></span>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <h3>MySql</h3>
                                <div class="progress">
                                    <span class="progress-bar" style={{ width: 60 }}></span>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <h3>Firebase</h3>
                                <div class="progress">
                                    <span class="progress-bar" style={{ width: 50 }}></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <h2>
                                <i class='bx bx-slider-alt'></i>
                                &nbsp;Tools
                            </h2>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-2">
                                <h3>Git</h3>
                                <div class="progress">
                                    <span class="progress-bar" style={{ width: 50 }}></span>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <h3>VS Code</h3>
                                <div class="progress">
                                    <span class="progress-bar" style={{ width: 80 }}></span>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <h3>Photoshop</h3>
                                <div class="progress">
                                    <span class="progress-bar" style={{ width: 70 }}></span>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <h3>Figma</h3>
                                <div class="progress">
                                    <span class="progress-bar" style={{ width: 70 }}></span>
                                </div>
                            </div>
                        </div>
                    </center>
                </div>
            </>
        )
    }
}

export default Skills;