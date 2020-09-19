import React from 'react';
import Translator from "./Translator";
import Scrollbar from "react-scrollbars-custom";

class Rules extends React.Component {
    constructor(props) {
        super(props);
        if (props.rules) {
            this.state = {rules: true};
        } else {
            this.state = {rules: false};
        }

        this.lang = props.lang;
        this.page = props.page;
        this.translator = new Translator({language: this.lang, page: this.page})
    }

    NextPage = () => {
        this.props.setrules(this.state.rules);
        if (this.state.rules)
            if (this.props.accl === "Permanent" || this.props.acwk === "Permanent")
                this.props.incr(3);
            else
                this.props.incr(1);
        else
            document.getElementsByTagName("li")[0].classList.add("form-line-error");
    };
    PrevPage = () => {
        this.props.setrules(this.state.rules);
        if (this.props.accl === "Permanent" || this.props.acwk === "Permanent")
            this.props.incr(6)
        else
            this.props.incr(-1)
    };
    Check = () => {
        document.getElementsByTagName("li")[0].classList.remove("form-line-error");
        if (this.state.rules)
            this.setState({rules: false});
        else
            this.setState({rules: true});
    };

    componentDidMount() {
        if (this.state.rules)
            document.getElementById("userInput").checked = true;
        else
            document.getElementById("userInput").checked = false;
    }

    render() {
        return (
            <div className="jfForm-wrapper" style={{paddingBottom: "96px", paddingTop: "46px"}}>
                <div className="jfForm-backgroundContainer"/>
                <ul className="jfForm-all  transition-all-03s">
                    <li className="form-line" data-type="control_widget">
                        <div className="jfCard-wrapper isVisible transition-all-015s" style={{width: "100%"}}>
                            <div className="jfCard" data-type="control_widget" style={{maxWidth: "832px"}}>
                                <div className="jfCard-question">
                                    <label htmlFor="input_22" className="jfQuestion-label isCenterAlign" id="label_22">
                                        <span className="jsQuestionLabelContainer">
                                            {this.translator.GetPageItem("rules_header")}</span>
                                        <span className="jfRequiredStar">* <span
                                            className="jfRequiredStar-message">{this.translator.GetGeneralItem("required_star")}</span></span></label>
                                    <span className="jfQuestion-description"
                                          id="input_22_description">{this.translator.GetPageItem("rules_description")}</span>
                                    <div className="jfQuestion-fields" style={{overflowY: "hidden"}}>
                                        <div className="jfField jfWidget form-input" datatype="textbox">
                                            <div className="jfWidget-frame frameTextRules"
                                                 style={{textAlign: "center", overflowY: "hidden"}}
                                                 data-component="widget-field">
                                                <Scrollbar style={{width: "auto", height: 260, whiteSpace: "pre-line"}}
                                                           momentum={true} trackClickBehavior={"step"}>
                                                    <div className="textRules">
                                                        <p align={"left"} style={{fontfamily: "'Roboto', sans-serif",
                                                            marginTop: 0}}>{this.translator.GetRuleItem()}
                                                        </p></div>
                                                    <div style={{marginLeft: "18px"}} className="checkboxRules">
                                                        <input type="checkbox" id="userInput" name="checkbox"
                                                               value={this.state.rules}
                                                               onChange={() => this.Check}/>
                                                        <label htmlFor="userInput" id="label" onClick={this.Check}>
                                                            {this.translator.GetPageItem("checkbox_description")}</label>
                                                    </div>
                                                </Scrollbar>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="jfCard-actions">
                                    <button type="button"
                                            className="jfInput-button forPrev u-left" data-component="button"
                                            onClick={this.PrevPage}>{this.translator.GetGeneralItem("previous")}
                                    </button>
                                    <button type="button"
                                            className="jfInput-button forNext u-right" data-component="button"
                                            onClick={this.NextPage}>{this.translator.GetGeneralItem("next")}
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

export default Rules;
