import React from 'react';
import Translator from "./Translator";

class Client extends React.Component {
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
        if (document.getElementById("input_17_0").checked || document.getElementById("input_17_1").checked
            || document.getElementById("input_17_2").checked || document.getElementById("input_17_3").checked) {
            document.getElementsByClassName("form-button-error")[0].style.display = "none";
            document.getElementsByTagName("li")[0].classList.remove("form-line-error");
            switch (e.target.id) {
                case "input_17_0":
                    this.props.incr(1);
                    this.props.setactyp("One time");
                    break;
                case "input_17_1":
                    this.props.incr(1);
                    this.props.setactyp("Permanent");
                    break;
                case "input_17_2":
                    this.props.setactyp("Training");
                    window.location = 'https://svc.linxdatacenter.com/forms/induction-training';
                    break;
                case "input_17_3":
                    this.props.setactyp("Rate");
                    this.props.incr(8);
                    break;
                case "next":
                    if (document.getElementById("input_17_0").checked || document.getElementById("input_17_1").checked)
                        this.props.incr(1);
                    else
                        this.props.incr(8);
                    break;
                default:
                    console.warn("switch error in client")
            }
        } else {
            document.getElementsByTagName("li")[0].classList.add("form-line-error");
            document.getElementsByClassName("form-button-error")[0].style.display = "block";
        }
    };

    componentDidMount() {
        switch (this.state.type) {
            case "One time":
                document.getElementById("input_17_0").checked = true;
                break;
            case "Permanent":
                document.getElementById("input_17_1").checked = true;
                break;
            case "Training":
                document.getElementById("input_17_2").checked = true;
                break;
            case "Rate":
                document.getElementById("input_17_3").checked = true;
                break;
            case "":
                break;
            default:
                console.warn("Access type state is wrong");
        }
        document.getElementById("input_17_0").focus();
    }

    render() {
        const url = "url(" + process.env.PUBLIC_URL;
        return (
            <div className="jfForm-wrapper" style={{paddingBottom: "54px", paddingTop: "46px"}}>
                <div className="jfForm-backgroundContainer"/>
                    <ul className="jfForm-all transition-all-03s">
                        <li className="form-line" data-type="control_imagechoice">
                            <div className="jfCard-wrapper isVisible transition-all-015s" style={{width: "100%"}}>
                                <div className="jfCard " data-type="control_imagechoice"
                                     style={{maxHeight: "843px", maxWidth: "832px"}}>
                                    <div className="jfCard-question">
                                        <label className="jfQuestion-label isCenterAlign"><span
                                            className="jsQuestionLabelContainer">{this.translator.GetGeneralItem("choose_one")}</span><span
                                            className="jfRequiredStar">* <span
                                            className="jfRequiredStar-message">{this.translator.GetGeneralItem("required_star")}</span></span></label>
                                        <div className="jfQuestion-fields form-multiple-column" data-columncount="4"
                                             data-component="radio">
                                            <div className="jfField jfField-lastRowItem ">
                                                <label className="jfRadio" tabIndex="0">
                                                    <input type="radio" className="jfRadio-input" id="input_17_0"
                                                           onClick={this.Click}/>
                                                    <div className="jfRadio-label">
                                                        <div className="jfRadio-image"
                                                             style={{backgroundImage: url + "/assets/img/guest_visitor.375.png)"}}>
                                                        </div>
                                                        <span className="jfRadio-customInput"><span
                                                            className="jfRadio-customInputIcon"/></span><span
                                                        className="jfRadio-labelText"
                                                        id="ot_access">{this.translator.GetPageItem("ot_access")}</span>
                                                    </div>
                                                </label>
                                            </div>
                                            <div className="jfField jfField-lastRowItem ">
                                                <label className="jfRadio" tabIndex="0">
                                                    <input type="radio" className="jfRadio-input" id="input_17_1"
                                                           onClick={this.Click}/>
                                                    <div className="jfRadio-label">
                                                        <div className="jfRadio-image"
                                                             style={{backgroundImage: url + "/assets/img/customer_access.426.png)"}}/>
                                                        <span className="jfRadio-customInput"><span
                                                            className="jfRadio-customInputIcon"/></span><span
                                                        className="jfRadio-labelText"
                                                        id={"const_access"}>{this.translator.GetPageItem("const_access")}</span>
                                                    </div>
                                                </label></div>
                                            <div className="jfField jfField-lastRowItem "><label
                                                className="jfRadio" tabIndex="0"><input type="radio"
                                                                                        className="jfRadio-input"
                                                                                        id="input_17_2"
                                                                                        onClick={this.Click}/>
                                                <div className="jfRadio-label">
                                                    <div className="jfRadio-image"
                                                         style={{backgroundImage: url + "/assets/img/jfc_icon_color-coloredjfsvg-file-color_award-49.png)"}}/>
                                                    <span className="jfRadio-customInput"><span
                                                        className="jfRadio-customInputIcon"/></span><span
                                                    className="jfRadio-labelText">{this.translator.GetPageItem("induction_training")}</span>
                                                </div>
                                            </label></div>
                                            <div className="jfField jfField-lastRowItem "><label
                                                className="jfRadio" tabIndex="0"><input type="radio"
                                                                                        className="jfRadio-input"
                                                                                        id="input_17_3"
                                                                                        onClick={this.Click}/>
                                                <div className="jfRadio-label">
                                                    <div className="jfRadio-image"
                                                         style={{backgroundImage: url + "/assets/img/quality.728.png)"}}/>
                                                    <span className="jfRadio-customInput"><span
                                                        className="jfRadio-customInputIcon"/></span><span
                                                    className="jfRadio-labelText">{this.translator.GetPageItem("qa_assess")}</span>
                                                </div>
                                            </label></div>
                                        </div>
                                    </div>
                                    <div className="jfCard-actions">
                                        <button type="button"
                                                className="jfInput-button forPrev u-left"
                                                onClick={() => this.props.incr(-1)}>{this.translator.GetGeneralItem("previous")}
                                        </button>
                                        <button type="button" id="next"
                                                className="jfInput-button forNext u-right"
                                                onClick={this.Click}>{this.translator.GetGeneralItem("next")}
                                        </button>
                                        <div className="cf">
                                            <div className="jfCard-actionsNotification">
                                                <div className="form-error-message">This field is required.</div>
                                            </div>
                                        </div>
                                        <div className="form-button-error" style={{display: "none"}}><p>There are errors
                                            on the form. Please fix them
                                            before continuing.</p></div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
            </div>
        )
    }
}

export default Client;
