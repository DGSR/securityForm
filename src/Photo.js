import React from 'react';
import Webcam from "react-webcam";
import Translator from "./Translator";

class Photo extends React.Component {
    mobile = false;

    constructor(props) {
        super(props);
        if (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
            this.mobile = true
        }
        if (this.props.photo !== null) {
            this.state = {
                photo: this.props.photo,
                lang: "",
                page: 0,
                taken: true,
                start: false,
            }
        } else {
            this.state = {
                photo: null,
                lang: "",
                page: 0,
                taken: false,
            }
        }
        this.state.lang = props.lang;
        this.state.page = props.page;
        this.translator = new Translator({language: this.state.lang, page: this.state.page})
    }

    setTaken = (l) => {
        this.setState({taken: l})
    };
    setPhoto = (l) => {
        this.setState({photo: l})
    };
    setRef = (webcam) => {
        this.webcam = webcam;
    };

    capture = () => {
        const imageSrc = this.webcam.getScreenshot();
        this.setPhoto(imageSrc);
        this.setTaken(true);
        this.props.setPhoto(imageSrc)
    };
    retake = () => {
        this.setTaken(false)
    };
    startCam = () => {
        document.getElementById("startPhoto").style.display = "none";
        this.setState({start: true})
    };
    getCam = () => {
        if (this.state.start) {
            if (!this.state.taken) {
                const videoConstraints = {
                    width: 720,
                    height: 1280,
                    facingMode: 'user',
                };
                return (
                    <div className="card-form-widget">
                        <Webcam
                            audio={false}
                            height={200}
                            ref={this.setRef}
                            screenshotFormat="image/jpeg"
                            width={200}
                            videoConstraints={videoConstraints}
                        />
                        <div id="footer">
                            <button style={{display: "block"}} type="button"
                                    className="startButton pure-button"
                                    onClick={this.capture}>
                                    <span
                                        className="icons icon-camera">{this.translator.GetPageItem("takeButton")}</span>
                            </button>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div className="card-form-widget">
                        <img alt="" src={this.state.photo}/>
                        <div id="footer" style={{display: "block", overflow: "hidden"}}>
                            <button id="removebutton" className="removeButton pure-button"
                                    onClick={this.retake} title="Retake Photo"><span
                                className="icons icon-refresh">{this.translator.GetPageItem("retakeButton")}</span>
                            </button>
                        </div>
                    </div>
                );
            }
        }
    };

    getExplain() {
        if (this.state.taken) {
            return (
                <span className="jfQuestion-description"
                      id="input_23_description">{this.translator.GetPageItem("takenExplain")}</span>
            );
        } else {
            return (
                <span className="jfQuestion-description"
                      id="input_23_description">{this.translator.GetPageItem("explain")}</span>
            );
        }
    }

    getMobilePhoto = (e) => {
        document.getElementById("canvas").style.display = "inline";
        let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext("2d");
        let img = new Image();
        // set size proportional to image
        img.onload = function () {
            canvas.height = canvas.width * (img.height / img.width);
            // resize to 50%
            var oc = document.createElement('canvas'),
                octx = oc.getContext('2d');
            oc.width = img.width * 0.5;
            oc.height = img.height * 0.5;
            octx.drawImage(img, 0, 0, oc.width, oc.height);
            octx.drawImage(oc, 0, 0, oc.width * 0.5, oc.height * 0.5);
            //  resize to final size
            ctx.drawImage(oc, 0, 0, oc.width * 0.5, oc.height * 0.5,
                0, 0, canvas.width, canvas.height);
        };
        img.src = URL.createObjectURL(e.target.files[0]);
        setTimeout(function () {
            this.setState({photo: document.getElementById("canvas").toDataURL()});
            this.props.setPhoto(document.getElementById("canvas").toDataURL())
        }.bind(this), 200);
    };

    componentDidMount() {
        if (this.mobile) {
            document.getElementById("Mobile").style.display = "block";
            if (this.state.photo !== null) {
                var startImg = new Image();
                startImg.src = this.state.photo;
                startImg.onload = function () {
                    document.getElementById("canvas").getContext('2d').drawImage(startImg, 0, 0);
                    document.getElementById("canvas").style.display = "inline";
                };
            }
        } else
            document.getElementById("Normal").style.display = "block";

        if (this.state.taken === true)
            this.startCam();
        document.getElementById("startButton").focus();
    }

    render() {
        return (
            <div className="jfForm-wrapper" style={{paddingBottom: "54px", paddingTop: "46px"}}>
                <div className="jfForm-backgroundContainer"/>
                <ul className="jfForm-all  transition-all-03s">
                    <li className="form-line" data-type="control_widget">
                        <div className="jfCard-wrapper isVisible transition-all-015s"
                             style={{width: "100%"}}>
                            <div className="jfCard" data-type="control_widget"
                                 style={{maxWidth: "832px"}}>
                                <div className="jfCard-question">
                                    <label className="jfQuestion-label isCenterAlign"><span
                                        className="jsQuestionLabelContainer">{this.translator.GetPageItem("take")}</span></label>
                                    {this.getExplain()}
                                    <div className="jfQuestion-fields">
                                        <div className="jfField jfWidget form-input" datatype="textbox">
                                            <div className="jfWidget-frame jfWidget-frame-centered"
                                                 style={{overflow: "hidden"}} data-component="widget-field">
                                                <div id="Normal" style={{display: "none"}}>
                                                    {this.getCam()}
                                                    <div className="card-form-widget" id="startPhoto">
                                                        <div id="footer">
                                                            <button style={{display: "block"}} type="button"
                                                                    className="startButton pure-button"
                                                                    id="startButton"
                                                                    onClick={this.startCam}>
                                                                    <span
                                                                        className="icons icon-camera">{this.translator.GetPageItem("takeButton")}</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="Mobile" className="card-form-widget"
                                                     style={{display: "none"}}>
                                                    <div id="footer">
                                                        <canvas id="canvas" width="200" height="200"
                                                                style={{display: "none"}}/>
                                                        <span
                                                            className="icons icon-camera filecontainer">{this.translator.GetPageItem("takeButton")}
                                                            <input type="file" className="inputfile" id="mobileCam"
                                                                   accept="image/*" capture="user"
                                                                   onChange={this.getMobilePhoto}/>
                                                            </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="jfCard-actions">
                                    <button type="button"
                                            className="jfInput-button forPrev u-left"
                                            onClick={() => this.props.incr(-8)}>{this.translator.GetGeneralItem("previous")}
                                    </button>
                                    <button type="button"
                                            className="jfInput-button forNext u-right"
                                            onClick={() => this.props.incr(-6)}>{this.translator.GetGeneralItem("next")}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Photo;
