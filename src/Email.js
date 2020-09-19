import React from 'react';
import Translator from "./Translator";

class Email extends React.Component {
    constructor(props) {
        super(props);
        if (props.type !== "") {
            this.state = {email: props.mail};
        } else {
            this.state = {email: ""}
        }
        this.lang = props.lang;
        this.page = props.page;
        this.translator = new Translator({language: this.lang, page: this.page})
    }

    handleNameChange = (event) => {
        this.setState({email: document.getElementById('input_10').value});
        if (document.getElementById('input_10').value !== "") {
            document.getElementById("input_10_0").classList.add("isFilled");
            document.getElementById("input_10").classList.remove("form-validation-error");
            document.getElementsByTagName("li")[0].classList.remove("form-line-error");
        } else {
            document.getElementById("input_10_0").classList.remove("isFilled");
            document.getElementById("input_10").classList.add("form-validation-error");
            document.getElementsByTagName("li")[0].classList.add("form-line-error");
        }
    };
    Click = (e) => {
        e.preventDefault();
        if (this.state.email !== "") {
            let reg = RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$');
            this.props.setmail(this.state.email);
            if (reg.test(this.state.email)) {
                document.getElementsByTagName("li")[0].classList.remove("form-line-error");
                document.getElementById("input_10").classList.remove("form-validation-error");
                this.props.incr(-2)
            } else {
                document.getElementById("error").innerText = "Enter a valid e-mail address";
                document.getElementsByTagName("li")[0].classList.add("form-line-error");
                document.getElementById("input_10").classList.add("form-validation-error");
            }
        } else {
            document.getElementById("error").innerText = "This field is required.";
            document.getElementsByTagName("li")[0].classList.add("form-line-error");
            document.getElementById("input_10").classList.add("form-validation-error");
        }
    };

    componentDidMount() {
        if (this.state.email !== "") {
            document.getElementById("input_10_0").classList.add("isFilled");
        }
        document.getElementById("input_10_0").focus();
    }

    render() {
        return (
            <div className="jfForm-wrapper" style={{paddingBottom: "96px", paddingTop: "46px"}}>
                <div className="jfForm-backgroundContainer"/>
                    <ul className="jfForm-all  transition-all-03s">
                        <li className="form-line" data-type="control_textbox">
                            <div className="jfCard-wrapper isVisible transition-all-015s" id="cid_16"
                                 style={{width: "100%"}}>
                                <div className="jfCard" data-type="control_email"
                                     style={{maxHeight: "794px", maxWidth: "832px"}}>
                                    <div className="jfCard-question">
                                        <label className="jfQuestion-label isCenterAlign"><span
                                            className="jsQuestionLabelContainer">{this.translator.GetPageItem("email")}</span><span
                                            className="jfRequiredStar">* <span className="jfRequiredStar-message">This field is required</span></span></label><span
                                        className="jfQuestion-description"
                                        id="input_10_description">{this.translator.GetPageItem("explain")}</span>
                                        <div className="jfCard-mobileError jsMobileErrorWrapper">
                                            <div
                                                className="form-mobile-error-message">{this.translator.GetGeneralItem("required_star")}</div>
                                        </div>
                                        <div className="jfQuestion-fields questionMode">
                                            <div className="jfField" data-type="email" id="input_10_0">
                                                <input type="email" id="input_10"
                                                       className="form-textbox jfInput-input hasSublabel"
                                                       value={this.state.email} onChange={this.handleNameChange}
                                                       data-component="email"/>
                                                <label className="jfField-sublabel"
                                                       id="sublabel_input_10">example@example.com</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="jfCard-actions">
                                        <button type="button"
                                                className="jfInput-button forPrev u-left"
                                                onClick={() => this.props.incr(-3)}>{this.translator.GetGeneralItem("previous")}
                                        </button>
                                        <button type="button"
                                                className="jfInput-button forNext u-right"
                                                onClick={this.Click}>{this.translator.GetGeneralItem("next")}
                                        </button>
                                        <div className="cf">
                                            <div className="jfCard-actionsNotification">
                                                <div className="form-error-message" id="error">This field is required.
                                                </div>
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

export default Email;
