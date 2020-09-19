import React from 'react';
import Translator from "./Translator";

class Final extends React.Component {
    constructor(props) {
        super(props);
        this.lang = props.lang;
        this.page = props.page;
        this.translator = new Translator({language: this.lang, page: this.page})
    }

    PrevPage = () => {
        if (this.props.accl === "Permanent" || this.props.acwk === "Permanent")
            this.props.incr(2)
        else if (this.props.accl === "One time" || this.props.acwk === "One time")
            this.props.incr(-1)
    };

    render() {
        return (
            <div className="jfForm-wrapper" style={{paddingBottom: "96px", paddingTop: "46px"}}>
                <div className="jfForm-backgroundContainer"/>
                <div className="jfCard-wrapper isVisible" style={{width: "100%"}}>
                    <div className="jfCard" style={{maxWidth: "832px"}}>
                        <div className="jfCard-question" style={{overflowY: "hidden"}}>
                            <h1 style={{textAlign: "center"}}>
                                    <span style={{fontSize: "18pt", fontFamily: "verdana, geneva, sans-serif"}}>
                                        {this.translator.GetPageItem("thank")}</span></h1>
                            <p style={{textAlign: "center"}}>
                                    <span style={{fontSize: "18pt", fontFamily: "verdana, geneva, sans-serif"}}>
                                        {this.translator.GetPageItem("finalMsg")}</span></p>
                        </div>
                        <div className="jfCard-actions">
                            <button type="button" className="jfInput-button forPrev u-left"
                                    onClick={this.PrevPage}>{this.translator.GetGeneralItem("previous")}
                            </button>
                            <button type="submit" className="jfInput-button forSubmit u-right"
                                    onClick={this.props.send}>{this.translator.GetGeneralItem("submit")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Final;
