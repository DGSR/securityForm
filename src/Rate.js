import React from 'react';
import Translator from "./Translator";

class Rate extends React.Component {
    constructor(props) {
        super(props);
        this.lang = props.lang;
        this.page = props.page;
        this.translator = new Translator({language: this.lang, page: this.page})
    }

    Click = (e) => {
        e.preventDefault();
        if (document.getElementById("input_8_1").checked || document.getElementById("input_8_2").checked
            || document.getElementById("input_8_3").checked || document.getElementById("input_8_4").checked
            || document.getElementById("input_8_5").checked) {
            document.getElementsByTagName("li")[0].classList.remove("form-line-error");
            if (e.target.id !== "next") {
                if (document.getElementById("input_8_5").checked)
                    this.props.setrate(5);
                else if (document.getElementById("input_8_4").checked)
                    this.props.setrate(4);
                else if (document.getElementById("input_8_3").checked)
                    this.props.setrate(3);
                else if (document.getElementById("input_8_2").checked)
                    this.props.setrate(2);
                else if (document.getElementById("input_8_1").checked)
                    this.props.setrate(1);
            }
            this.props.incr(1);
        } else
            document.getElementsByTagName("li")[0].classList.add("form-line-error");
    };

    MouserHover(e) {
        switch (e.target.id) {
            case "input_8_5":
                document.getElementsByClassName("input_8_5")[0].classList.add("indicate");
            // eslint-disable-next-line no-fallthrough
            case "input_8_4":
                document.getElementsByClassName("input_8_4")[0].classList.add("indicate");
            // eslint-disable-next-line no-fallthrough
            case "input_8_3":
                document.getElementsByClassName("input_8_3")[0].classList.add("indicate");
            // eslint-disable-next-line no-fallthrough
            case "input_8_2":
                document.getElementsByClassName("input_8_2")[0].classList.add("indicate");
            // eslint-disable-next-line no-fallthrough
            case "input_8_1":
                document.getElementsByClassName("input_8_1")[0].classList.add("indicate");
                break;
            default:
                console.warn("error in switch rate.mouserHover");
        }
    };

    MouseLeave() {
        document.getElementsByClassName("input_8_5")[0].classList.remove("indicate");
        document.getElementsByClassName("input_8_4")[0].classList.remove("indicate");
        document.getElementsByClassName("input_8_3")[0].classList.remove("indicate");
        document.getElementsByClassName("input_8_2")[0].classList.remove("indicate");
        document.getElementsByClassName("input_8_1")[0].classList.remove("indicate");
    };

    componentDidMount() {
        switch (this.props.rate) {
            case 5: {
                document.getElementsByClassName("input_8_5")[0].classList.add("checked");
                document.getElementById("input_8_5").checked = true;
            }
            // eslint-disable-next-line no-fallthrough
            case 4: {
                document.getElementsByClassName("input_8_4")[0].classList.add("checked");
                document.getElementById("input_8_4").checked = true;
            }
            // eslint-disable-next-line no-fallthrough
            case 3: {
                document.getElementsByClassName("input_8_3")[0].classList.add("checked");
                document.getElementById("input_8_3").checked = true;
            }
            // eslint-disable-next-line no-fallthrough
            case 2: {
                document.getElementsByClassName("input_8_2")[0].classList.add("checked");
                document.getElementById("input_8_2").checked = true;
            }
            // eslint-disable-next-line no-fallthrough
            case 1: {
                document.getElementsByClassName("input_8_1")[0].classList.add("checked");
                document.getElementById("input_8_1").checked = true;
                break;
            }
            case 0:
                break;
            default:
                console.warn("error in switch rate.componentDidMount");
        }
        document.getElementById("next").focus()
    };

    render() {
        return (
            <div className="jfForm-wrapper" style={{paddingBottom: "54px", paddingTop: "46px"}}>
                <div className="jfForm-backgroundContainer"/>
                    <ul className="jfForm-all  transition-all-03s">
                        <li className="form-line" data-type="control_rating">
                            <div className="jfCard-wrapper isVisible transition-all-015s" id="cid_8"
                                 style={{width: "100%"}}>
                                <div className="jfCard " data-type="control_rating"
                                     style={{maxHeight: "794px", maxWidth: "832px"}}>
                                    <div className="jfCard-question">
                                        <label className="jfQuestion-label isCenterAlign"><span
                                            className="jsQuestionLabelContainer">{this.translator.GetPageItem("quality")}</span><span
                                            className="jfRequiredStar">* <span className="jfRequiredStar-message">This field is required</span></span></label>
                                        <div className="jfQuestion-fields" style={{overflow: "hidden"}}>
                                            <div className="jfField isFilled" id="rating_8">
                                                <div id="input_8" name="q8_input8" data-component="rating"
                                                     className="jfRating form-star-rating"><input type="tel"
                                                                                                  className="jfInput jfRating-shortcut-input"
                                                                                                  aria-label="Select from 1 to 5"/>
                                                    <ul className="jfRating-items" name="q8_input8" data-type="stars"
                                                        data-item-count="5">
                                                        <li className="jfRating-item jfRating-selection  input_8_1"
                                                            data-value="1" tabIndex="181" style={{height: "76px"}}>
                                                            <style>{"\
                                                                .jfRating-selection.input_8_1.checked\
                                                                .jfRating-svg-container,\
                                                                .jfRating-selection.input_8_1.indicate\
                                                                .jfRating-svg-container {\
                                                                color: #FCC657 !important;\
                                                            }"}\
                                                            </style>
                                                            <input type="radio"
                                                                   className="jfRating-input validate[required] form-validation-error"
                                                                   name="q8_input8" value="1" title="1" id="input_8_1"
                                                                   required="" placeholder=""
                                                                   onMouseOver={this.MouserHover}
                                                                   onMouseLeave={this.MouseLeave} onClick={this.Click}/>
                                                            <div className="jfRating-svg-wrapper"
                                                                 style={{color: "#B0BAC5"}}>
                                                                <div className="jfRating-svg-container">
                                                                    <svg className="jfRating-svg" width="66px"
                                                                         height="62px" viewBox="0 0 66 62"
                                                                         version="1.1"
                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                        <g stroke="none" strokeWidth="1"
                                                                           fillRule="evenodd">
                                                                            <g transform="translate(-61.000000, -162.000000)"
                                                                               fill="currentColor">
                                                                                <polygon points="94 213 74.0153014 223.506578 77.8320392 201.253289 61.6640784 185.493422 84.0076507 182.246711 94 162
                    103.992349 182.246711 126.335922 185.493422 110.167961 201.253289 113.984699 223.506578"/>
                                                                            </g>
                                                                        </g>
                                                                    </svg>
                                                                    <div className="jfRating-text">1</div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="jfRating-item jfRating-selection  input_8_2"
                                                            data-value="2" tabIndex="182" style={{height: "76px"}}>
                                                            <style>{"\
                                                                .jfRating-selection.input_8_2.checked\
                                                                .jfRating-svg-container,\
                                                                .jfRating-selection.input_8_2.indicate\
                                                                .jfRating-svg-container {\
                                                                color: #FCC657 !important;\
                                                            }"}\
                                                            </style>
                                                            <input type="radio"
                                                                   className="jfRating-input form-radio  form-validation-error"
                                                                   name="q8_input8" value="2" title="2" id="input_8_2"
                                                                   required="" placeholder=""
                                                                   onMouseOver={this.MouserHover}
                                                                   onMouseLeave={this.MouseLeave} onClick={this.Click}/>
                                                            <div className="jfRating-svg-wrapper"
                                                                 style={{color: "#B0BAC5"}}>
                                                                <div className="jfRating-svg-container">
                                                                    <svg className="jfRating-svg" width="66px"
                                                                         height="62px" viewBox="0 0 66 62"
                                                                         version="1.1"
                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                        <g stroke="none" strokeWidth="1"
                                                                           fillRule="evenodd">
                                                                            <g transform="translate(-61.000000, -162.000000)"
                                                                               fill="currentColor">
                                                                                <polygon points="94 213 74.0153014 223.506578 77.8320392 201.253289 61.6640784 185.493422 84.0076507 182.246711 94 162
                    103.992349 182.246711 126.335922 185.493422 110.167961 201.253289 113.984699 223.506578"/>
                                                                            </g>
                                                                        </g>
                                                                    </svg>
                                                                    <div className="jfRating-text">2</div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="jfRating-item jfRating-selection  input_8_3"
                                                            data-value="3" tabIndex="183" style={{height: "76px"}}>
                                                            <style>{"\
                                                                .jfRating-selection.input_8_3.checked\
                                                                .jfRating-svg-container,\
                                                                .jfRating-selection.input_8_3.indicate\
                                                                .jfRating-svg-container {\
                                                                color: #FCC657 !important;\
                                                            }"}\
                                                            </style>
                                                            <input type="radio"
                                                                   className="jfRating-input form-radio  form-validation-error"
                                                                   name="q8_input8" value="3" title="3" id="input_8_3"
                                                                   required="" placeholder=""
                                                                   onMouseOver={this.MouserHover}
                                                                   onMouseLeave={this.MouseLeave} onClick={this.Click}/>
                                                            <div className="jfRating-svg-wrapper"
                                                                 style={{color: "#B0BAC5"}}>
                                                                <div className="jfRating-svg-container">
                                                                    <svg className="jfRating-svg" width="66px"
                                                                         height="62px" viewBox="0 0 66 62"
                                                                         version="1.1"
                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                        <g stroke="none" strokeWidth="1"
                                                                           fillRule="evenodd">
                                                                            <g transform="translate(-61.000000, -162.000000)"
                                                                               fill="currentColor">
                                                                                <polygon points="94 213 74.0153014 223.506578 77.8320392 201.253289 61.6640784 185.493422 84.0076507 182.246711 94 162
                    103.992349 182.246711 126.335922 185.493422 110.167961 201.253289 113.984699 223.506578"/>
                                                                            </g>
                                                                        </g>
                                                                    </svg>
                                                                    <div className="jfRating-text">3</div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="jfRating-item jfRating-selection  input_8_4"
                                                            data-value="4" tabIndex="184" style={{height: "76px"}}>
                                                            <style>{"\
                                                                .jfRating-selection.input_8_4.checked\
                                                                .jfRating-svg-container,\
                                                                .jfRating-selection.input_8_4.indicate\
                                                                .jfRating-svg-container {\
                                                                color: #FCC657 !important;\
                                                            }"}\
                                                            </style>
                                                            <input type="radio"
                                                                   className="jfRating-input form-radio  form-validation-error"
                                                                   name="q8_input8" value="4" title="4" id="input_8_4"
                                                                   required="" placeholder=""
                                                                   onMouseOver={this.MouserHover}
                                                                   onMouseLeave={this.MouseLeave} onClick={this.Click}/>
                                                            <div className="jfRating-svg-wrapper"
                                                                 style={{color: "#B0BAC5"}}>
                                                                <div className="jfRating-svg-container">
                                                                    <svg className="jfRating-svg" width="66px"
                                                                         height="62px" viewBox="0 0 66 62"
                                                                         version="1.1"
                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                        <g stroke="none" strokeWidth="1"
                                                                           fillRule="evenodd">
                                                                            <g transform="translate(-61.000000, -162.000000)"
                                                                               fill="currentColor">
                                                                                <polygon points="94 213 74.0153014 223.506578 77.8320392 201.253289 61.6640784 185.493422 84.0076507 182.246711 94 162
                    103.992349 182.246711 126.335922 185.493422 110.167961 201.253289 113.984699 223.506578"/>
                                                                            </g>
                                                                        </g>
                                                                    </svg>
                                                                    <div className="jfRating-text">4</div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="jfRating-item jfRating-selection  input_8_5"
                                                            data-value="5" tabIndex="185" style={{height: "76px"}}>
                                                            <style>{"\
                                                                .jfRating-selection.input_8_5.checked\
                                                                .jfRating-svg-container,\
                                                                .jfRating-selection.input_8_5.indicate\
                                                                .jfRating-svg-container {\
                                                                color: #FCC657 !important;\
                                                            }"}\
                                                            </style>
                                                            <input type="radio"
                                                                   className="jfRating-input form-radio  form-validation-error"
                                                                   name="q8_input8" value="5" title="5" id="input_8_5"
                                                                   required="" placeholder=""
                                                                   onMouseOver={this.MouserHover}
                                                                   onMouseLeave={this.MouseLeave} onClick={this.Click}/>
                                                            <div className="jfRating-svg-wrapper"
                                                                 style={{color: "#B0BAC5"}}>
                                                                <div className="jfRating-svg-container">
                                                                    <svg className="jfRating-svg" width="66px"
                                                                         height="62px" viewBox="0 0 66 62"
                                                                         version="1.1"
                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                        <g stroke="none" strokeWidth="1"
                                                                           fillRule="evenodd">
                                                                            <g transform="translate(-61.000000, -162.000000)"
                                                                               fill="currentColor">
                                                                                <polygon points="94 213 74.0153014 223.506578 77.8320392 201.253289 61.6640784 185.493422 84.0076507 182.246711 94 162
                    103.992349 182.246711 126.335922 185.493422 110.167961 201.253289 113.984699 223.506578"/>
                                                                            </g>
                                                                        </g>
                                                                    </svg>
                                                                    <div className="jfRating-text">5</div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <input type="hidden" name="q8_stars" className="form-textbox"
                                                           data-lowest="1"/></div>
                                                <label className="jfField-sublabel"
                                                       id="label_input_8"/></div>
                                        </div>
                                    </div>
                                    <div className="jfCard-actions">
                                        <button type="button"
                                                className="jfInput-button forPrev u-left"
                                                onClick={() => this.props.incr(-8)}>{this.translator.GetGeneralItem("previous")}
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
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
            </div>
        )
    }
}

export default Rate;
