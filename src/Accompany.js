import React from 'react';
import Translator from "./Translator";

class Accompany extends React.Component {
    constructor(props) {
        super(props);
        if (props.name !== "") {
            this.state = {
                firstName: props.name,
                lastName: props.surname
            };
        } else {
            this.state = {
                firstName: "",
                lastName: ""
            };
        }
        this.lang = props.lang;
        this.page = props.page;
        this.translator = new Translator({language: this.lang, page: this.page})
    }

    handleNameChange = (event) => {
        this.setState({firstName: document.getElementById('first_1').value})
        if (document.getElementById('first_1').value !== "")
            document.getElementById("first_0").classList.add("isFilled");
        else
            document.getElementById("first_0").classList.remove("isFilled");
    };
    handleSurnameChange = (event) => {
        this.setState({lastName: document.getElementById('last_1').value})
        if (document.getElementById('last_1').value !== "")
            document.getElementById("last_0").classList.add("isFilled");
        else
            document.getElementById("last_0").classList.remove("isFilled");
    };
    Click = (e) => {
        e.preventDefault();
        if (this.state.firstName !== "" && this.state.lastName !== "") {
            document.getElementsByTagName("li")[0].classList.remove("form-line-error");
            document.getElementById("first_1").classList.remove("form-validation-error");
            document.getElementById("last_1").classList.remove("form-validation-error");
            this.props.setaccnam(this.state.firstName);
            this.props.setaccsur(this.state.lastName);
            this.props.incr(1)
        } else {
            document.getElementsByTagName("li")[0].classList.add("form-line-error");
            document.getElementById("first_1").classList.add("form-validation-error");
            document.getElementById("last_1").classList.add("form-validation-error");
        }
    };

    componentDidMount() {
        if (this.state.name !== "" && this.state.surname !== "") {
            document.getElementById("first_0").classList.add("isFilled");
            document.getElementById("last_0").classList.add("isFilled");
        }
        document.getElementById("first_1").focus();
    }

    render() {
        return (
            <div className="jfForm-wrapper" style={{paddingBottom: "96px", paddingTop: "46px"}}>
                <div className="jfForm-backgroundContainer"/>
                    <ul className="jfForm-all  transition-all-03s">
                        <li className="form-line" data-type="control_imagechoice">
                            <div className="jfCard-wrapper isVisible transition-all-015s"
                                 style={{width: "100%"}}>
                                <div className="jfCard" data-type="control_fullname"
                                     style={{maxHeight: "794px", maxWidth: "832px"}}>
                                    <div className="jfCard-question">
                                        <label className="jfQuestion-label isCenterAlign"><span
                                            className="jsQuestionLabelContainer">{this.translator.GetPageItem("accompany")}</span><span
                                            className="jfRequiredStar">* <span className="jfRequiredStar-message">This field is required</span></span></label><span
                                        className="jfQuestion-description" id="input_1_description"/>
                                        <div className="jfCard-mobileError jsMobileErrorWrapper">
                                            <div className="form-mobile-error-message">This field is required.</div>
                                        </div>
                                        <div className="jfQuestion-fields" data-wrapper-react="true">
                                            <div className="jfField" id="first_0" data-type="first"><input type="text"
                                                                                                           id="first_1"
                                                                                                           className="form-textbox  forFullname jfInput-input hasSublabel"
                                                                                                           value={this.state.firstName}
                                                                                                           onChange={this.handleNameChange}
                                                                                                           placeholder={this.translator.GetGeneralItem("name")}/><label
                                                className="jfField-sublabel"
                                                id="sublabel_1_first">{this.translator.GetGeneralItem("name")}</label>
                                            </div>
                                            <div className="jfField" id="last_0" data-type="last"><input type="text"
                                                                                                         id="last_1"
                                                                                                         className="form-textbox  forFullname jfInput-input hasSublabel"
                                                                                                         value={this.state.lastName}
                                                                                                         onChange={this.handleSurnameChange}
                                                                                                         placeholder={this.translator.GetGeneralItem("surname")}/><label
                                                className="jfField-sublabel"
                                                id="sublabel_1_last">{this.translator.GetGeneralItem("surname")}</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="jfCard-actions">
                                        <button type="button"
                                                className="jfInput-button forPrev u-left"
                                                onClick={() => this.props.incr(-1)}>{this.translator.GetGeneralItem("previous")}
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
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
            </div>
        )
    }
}

export default Accompany;
