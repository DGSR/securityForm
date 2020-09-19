import React from 'react';
import Translator from "./Translator";

class Comments extends React.Component {
    constructor(props) {
        super(props);
        if (props.text === "")
            this.state = {text: ""};
        else
            this.state = {text: props.text};
        this.lang = props.lang;
        this.page = props.page;
        this.translator = new Translator({language: this.lang, page: this.page})
    };

    handleTextChange = (event) => {
        let capsText = event.target.value
            .toLowerCase()
            .split(' ')
            .map(s => s.charAt(0).toUpperCase() + s.substr(1))
            .join(' ');

        this.setState({
            text: capsText
        });
        this.props.settext(capsText);

        };
    Click = (e) => {
        e.preventDefault();
        this.props.settext(this.state.text);
        if (e.target.id === "0") {
            this.props.incr(-1)
        } else
            this.props.send();
    };

    componentDidMount() {
        document.getElementById("input_9").focus();
    }

    render() {
        var value = this.state.text.replace('\\n', '\n');
        return (
            <div className="jfForm-wrapper" style={{paddingBottom: "54px", paddingTop: "46px"}}>
                <div className="jfForm-backgroundContainer"/>
                    <ul className="jfForm-all  transition-all-03s">
                        <li className="form-line" data-type="control_rating">
                            <div className="jfCard-wrapper isVisible transition-all-015s" style={{width: "100%"}}>
                                <div className="jfCard " data-type="control_rating"
                                     style={{maxHeight: "794px", maxWidth: "832px"}}>
                                    <div className="jfCard-question">
                                        <label className="jfQuestion-label isCenterAlign"><span
                                            className="jsQuestionLabelContainer">{this.translator.GetPageItem("comment")}</span></label>
                                        <div className="jfQuestion-fields" data-component="textarea">
                                            <div className="jfField" data-type="textarea">
                                                <textarea id="input_9" maxLength="10000" className="jfInput-textarea form-textarea"
                                                          data-component="textarea" value={value} onChange={this.handleTextChange}/><label
                                                className="jfField-sublabel"/></div>
                                        </div>
                                    </div>
                                    <div className="jfCard-actions">
                                        <button type="button" id="0" className="jfInput-button forPrev u-left"
                                                onClick={this.Click}>{this.translator.GetGeneralItem("previous")}
                                        </button>
                                        <button type="submit" id="1" className="jfInput-button forSubmit u-right"
                                                onClick={this.Click}>{this.translator.GetGeneralItem("submit")}
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

export default Comments;
