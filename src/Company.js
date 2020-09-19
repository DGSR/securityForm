import React from 'react';
import Translator from "./Translator";

class Company extends React.Component {
    constructor(props) {
        super(props);
        if (props.type !== "") {
            this.state = {companyName: props.comp};
        } else {
            this.state = {companyName: "",}
        }
        this.lang = props.lang;
        this.page = props.page;
        this.translator = new Translator({language: this.lang, page: this.page})
    }

    handleNameChange = (event) => {
        this.setState({companyName: document.getElementById('input_16').value});
        if (document.getElementById('input_16').value !== "") {
            document.getElementById("input_16_0").classList.add("isFilled");
            document.getElementById("input_16").classList.remove("form-validation-error");
            document.getElementsByTagName("li")[0].classList.remove("form-line-error");
        } else {
            document.getElementById("input_16_0").classList.remove("isFilled");
            document.getElementById("input_16").classList.add("form-validation-error");
            document.getElementsByTagName("li")[0].classList.add("form-line-error");
        }
    };
    Click = (e) => {
        e.preventDefault();
        if (this.state.companyName !== "") {
            document.getElementsByTagName("li")[0].classList.remove("form-line-error");
            this.props.setcomp(this.state.companyName);
            if (this.props.accl === "Permanent" || this.props.acwk === "Permanent")
                this.props.incr(8)
            else
                this.props.incr(1)
        } else {
            document.getElementsByTagName("li")[0].classList.add("form-line-error");
            document.getElementById("input_16").classList.add("form-validation-error");
        }
    };

    componentDidMount() {
        if (this.state.companyName !== "") {
            document.getElementById("input_16_0").classList.add("isFilled");
        }
        document.getElementById("input_16").focus();
    }

    render() {
        return (
            <div className="jfForm-wrapper" style={{paddingBottom: "96px", paddingTop: "46px"}}>
                <div className="jfForm-backgroundContainer"/>
                    <ul className="jfForm-all  transition-all-03s">
                        <li className="form-line" data-type="control_textbox">
                            <div className="jfCard-wrapper isVisible transition-all-015s"
                                 style={{width: "100%"}}>
                                <div className="jfCard" data-type="control_textbox"
                                     style={{maxHeight: "794px", maxWidth: "832px"}}>
                                    <div className="jfCard-question">
                                        <label className="jfQuestion-label isCenterAlign"><span
                                            className="jsQuestionLabelContainer">{this.translator.GetPageItem("company")}</span><span
                                            className="jfRequiredStar">* <span
                                            className="jfRequiredStar-message">{this.translator.GetGeneralItem("required_star")}</span></span></label><span
                                        className="jfQuestion-description" id="input_16_description"/>
                                        <div className="jfCard-mobileError jsMobileErrorWrapper">
                                            <div className="form-mobile-error-message">This field is required.</div>
                                        </div>
                                        <div className="jfQuestion-fields">
                                            <div className="jfField" data-type="textbox" id="input_16_0">
                                                <input type="text" id="input_16" className="form-textbox jfInput-input"
                                                       value={this.state.companyName} onChange={this.handleNameChange}/>
                                                <label className="jfField-sublabel"/></div>
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

export default Company;
