import React from 'react';

class LanguageSelect extends React.Component {
    constructor(props) {
        super(props);
        if (props.lang !== "") {
            this.state = {language: props.lang};
        } else {
            this.state = {language: ""};
        }
    };

    Click = (e) => {
        e.preventDefault();
        if (document.getElementById("input_25_0").checked || document.getElementById("input_25_1").checked) {
            document.getElementsByClassName("form-button-error")[0].style.display = "none";
            document.getElementsByTagName("li")[0].classList.remove("form-line-error");
            if (e.target.id === "input_25_0")
                this.props.setlang("Russian");
            else if (e.target.id === "input_25_1")
                this.props.setlang("English");
            this.props.incr(1);
        } else {
            document.getElementsByTagName("li")[0].classList.add("form-line-error");
            document.getElementsByClassName("form-button-error")[0].style.display = "block";
        }
    };

    componentDidMount() {
        switch (this.state.language) {
            case "Russian":
                document.getElementById("input_25_0").checked = true;
                break;
            case "English":
                document.getElementById("input_25_1").checked = true;
                break;
            case "":
                break;
            default:
                console.warn("Language state is wrong");
        }
        document.getElementById("input_25_0").focus();
    }

    render() {
        return (
            <div className="jfForm-wrapper" style={{paddingBottom: "54px", paddingTop: "46px"}}>
                <div className="jfForm-backgroundContainer"/>
                    <ul className="jfForm-all transition-all-03s">
                        <li className="form-line" data-type="control_imagechoice">
                            <div className="jfCard-wrapper isVisible transition-all-015s" style={{width: "100%"}}>
                                <div className="jfCard " data-type="control_imagechoice"
                                     style={{maxHeight: '827px', maxWidth: "832px"}}>
                                    <div className="jfCard-question">
                                        <label className="jfQuestion-label isCenterAlign">
                                            <span>Здравствуйте / Hello</span>
                                            <span className="jfRequiredStar">* <span className="jfRequiredStar-message">This field is required</span></span>
                                        </label>
                                        <span className="jfQuestion-description">Выберите язык / Choose language</span>
                                        <div className="jfQuestion-fields" data-columncount="2"
                                             data-component="radio">
                                            <div className="jfField jfField-lastRowItem">
                                                <label className="jfRadio">
                                                    <input type="radio" className="jfRadio-input" id="input_25_0"
                                                           onClick={this.Click}/>
                                                    <div className="jfRadio-label">
                                                        <div className="jfRadio-image"
                                                             style={{backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/russian.5ab3892668efb9.67124517.gif)"}}/>
                                                        <span className="jfRadio-customInput"><span
                                                            className="jfRadio-customInputIcon"/></span>
                                                        <span className="jfRadio-labelText">Russian</span></div>
                                                </label></div>
                                            <div className="jfField jfField-lastRowItem ">
                                                <label className="jfRadio">
                                                    <input type="radio" className="jfRadio-input" id="input_25_1"
                                                           onClick={this.Click}/>
                                                    <div className="jfRadio-label">
                                                        <div className="jfRadio-image"
                                                             style={{backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/flag.5be2ebd232d404.81062431.jpg)"}}>
                                                        </div>
                                                        <span className="jfRadio-customInput"><span
                                                            className="jfRadio-customInputIcon"/></span>
                                                        <span className="jfRadio-labelText">English</span></div>
                                                </label></div>
                                        </div>
                                    </div>
                                    <div className="jfCard-actions">
                                        <button type="button" className="jfInput-button forNext u-right"
                                                onClick={this.Click}>Далее | Next
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
        );
    }
}

export default LanguageSelect;
