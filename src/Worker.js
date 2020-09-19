import React from 'react';
import Translator from "./Translator";

class Worker extends React.Component {
    constructor(props) {
        super(props);
        if (props.type !== "") {
            this.state = {type: props.acctype};
        } else {
            this.state = {type: ""};
        }
        this.lang = props.lang;
        this.page = props.page;
        this.translator = new Translator({language: this.lang, page: this.page})
    };

    Click = (e) => {
        e.preventDefault();
        if (document.getElementById("input_37_0").checked || document.getElementById("input_37_1").checked) {
            document.getElementsByClassName("form-button-error")[0].style.display = "none";
            document.getElementsByTagName("li")[0].classList.remove("form-line-error");
            if (e.target.id === "input_37_0") {
                this.props.setactyp("One time");
            } else if (e.target.id === "input_37_1") {
                this.props.setactyp("Permanent");
            }
            this.props.incr(-5);
        } else {
            document.getElementsByTagName("li")[0].classList.add("form-line-error");
            document.getElementsByClassName("form-button-error")[0].style.display = "block";
        }
    };

    componentDidMount() {
        switch (this.state.type) {
            case "One time":
                document.getElementById("input_37_0").checked = true;
                break;
            case "Permanent":
                document.getElementById("input_37_1").checked = true;
                break;
            case "":
                break;
            default:
                console.warn("Access type state is wrong");
        }
        document.getElementById("input_37_0").focus();
    }

    render() {
        const url = "url(" + process.env.PUBLIC_URL;
        return (
            <div className="jfForm-wrapper" style={{paddingBottom: "54px", paddingTop: "46px"}}>
                <div className="jfForm-backgroundContainer"/>
                    <ul className="jfForm-all  transition-all-03s">
                        <li className="form-line" data-type="control_imagechoice">
                            <div className="jfCard-wrapper isVisible transition-all-015s" style={{width: "100%"}}>
                                <div className="jfCard " data-type="control_imagechoice"
                                     style={{maxHeight: "843px", maxWidth: "832px"}}>
                                    <div className="jfCard-question">
                                        <label className="jfQuestion-label isCenterAlign"><span
                                            className="jsQuestionLabelContainer">{this.translator.GetGeneralItem("choose_one")}</span><span
                                            className="jfRequiredStar">* <span className="jfRequiredStar-message">This field is required</span></span></label>
                                        <div className="jfQuestion-fields" data-columncount="2" data-component="radio">
                                            <div className="jfField jfField-lastRowItem  isFilled">
                                                <label className="jfRadio" tabIndex="0">
                                                    <input type="radio" className="jfRadio-input" id="input_37_0"
                                                           onClick={this.Click}/>
                                                    <div className="jfRadio-label">
                                                        <div className="jfRadio-image"
                                                             style={{backgroundImage: url + "/assets/img/guest_visitor.375.png)"}}/>
                                                        <span className="jfRadio-customInput"><span
                                                            className="jfRadio-customInputIcon"/></span><span
                                                        className="jfRadio-labelText">{this.translator.GetPageItem("ot_access")}</span>
                                                    </div>
                                                </label>
                                            </div>
                                            <div className="jfField jfField-lastRowItem isFilled">
                                                <label className="jfRadio" tabIndex="0">
                                                    <input type="radio" className="jfRadio-input" id="input_37_1"
                                                           onClick={this.Click}/>
                                                    <div className="jfRadio-label">
                                                        <div className="jfRadio-image"
                                                             style={{backgroundImage: url + "/assets/img/contractor_access.375.png)"}}/>
                                                        <span className="jfRadio-customInput"><span
                                                            className="jfRadio-customInputIcon"/></span><span
                                                        className="jfRadio-labelText">{this.translator.GetPageItem("const_access")}</span>
                                                    </div>
                                                </label></div>
                                        </div>
                                    </div>
                                    <div className="jfCard-actions">
                                        <button type="button"
                                                className="jfInput-button forPrev u-left"
                                                onClick={() => this.props.incr(-7)}>{this.translator.GetGeneralItem("previous")}
                                        </button>
                                        <button type="button"
                                                className="jfInput-button forNext u-right"
                                                onClick={this.Click}>{this.translator.GetGeneralItem("next")}
                                        </button>
                                        <div className="cf">
                                            <div className="jfCard-actionsNotification">
                                                <div className="form-error-message">This field is required.</div>
                                            </div>
                                        </div>
                                        <div className="form-button-error" style={{display: "none"}}><p>There are errors
                                            on the form. Please fix them before continuing.</p></div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
            </div>
        )
    }
}

export default Worker;
