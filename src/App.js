import React from 'react';
import Hello from "./Hello";
import LanguageSelect from "./LanguageSelect";
import TypeSelection from "./TypeSelection";
import Client from "./Client";
import Name from "./Name";
import Company from "./Company";
import Accompany from "./Accompany";
import Rules from "./Rules";
import Final from "./Final";
import Rate from "./Rate";
import Email from "./Email";
import Comments from "./Comments";
import Worker from "./Worker";
import Photo from "./Photo";

class App extends React.Component {
    // "global" state
    // pageCounter - shows which page should be displayed
    // all the rest is data input from user
    state = {

        pageCounter:0,
        language: "",
        type: "",
        accessTypeClient: "",
        accessTypeWorker: "",
        name: "",
        surname: "",
        company: "",
        accompanyName: "",
        accompanySurname: "",
        rules: false,
        email: "",
        rate: 0,
        text: "",
        photo: null,
    };

    render() {
        // all pages with passed props
        switch (this.state.pageCounter) {
            case 0:
                return (
                    <Hello incr={this.pageIncrement}/>);
            case 1:
                return (
                    <LanguageSelect incr={this.pageIncrement} setlang={this.setLanguage} lang={this.state.language}/>);
            case 2:
                return (
                    <TypeSelection incr={this.pageIncrement} settyp={this.setType} type={this.state.type}
                                   lang={this.state.language} page={this.state.pageCounter}/>);
            case 3:
                return (
                    <Client incr={this.pageIncrement} setactyp={this.setAccessTypeClient}
                            acctype={this.state.accessTypeClient} lang={this.state.language}
                            page={this.state.pageCounter}/>);
            case 4:
                return (
                    <Name incr={this.pageIncrement} type={this.state.type} name={this.state.name}
                          surname={this.state.surname} setnam={this.setName} setsurn={this.setSurname}
                          lang={this.state.language} page={this.state.pageCounter}/>);
            case 5:
                return (
                    <Company incr={this.pageIncrement} comp={this.state.company} setcomp={this.setCompany}
                             accl={this.state.accessTypeClient} acwk={this.state.accessTypeWorker}
                             lang={this.state.language} page={this.state.pageCounter}/>);
            case 6:
                return (
                    <Accompany incr={this.pageIncrement} name={this.state.accompanyName}
                               surname={this.state.accompanySurname}
                               setaccnam={this.setAccompanyName} setaccsur={this.setAccompanySurname}
                               lang={this.state.language} page={this.state.pageCounter}/>);
            case 7:
                return (
                    <Rules incr={this.pageIncrement} rules={this.state.rules} setrules={this.setRules}
                           accl={this.state.accessTypeClient} acwk={this.state.accessTypeWorker}
                           lang={this.state.language} page={this.state.pageCounter}/>);
            case 8:
                return (
                    <Final incr={this.pageIncrement}
                           accl={this.state.accessTypeClient} acwk={this.state.accessTypeWorker}
                           send={this.sendData} lang={this.state.language} page={this.state.pageCounter}/>);
            case 9:
                return (
                    <Worker incr={this.pageIncrement} setactyp={this.setAccessTypeWorker}
                            acctype={this.state.accessTypeWorker} lang={this.state.language}
                            page={this.state.pageCounter}/>);
            case 10:
                return (
                    <Email incr={this.pageIncrement} setmail={this.setEmail} mail={this.state.email}
                           photo={this.state.photo} lang={this.state.language} page={this.state.pageCounter}/>
                );
            case 11:
                return (
                    <Rate incr={this.pageIncrement} setrate={this.setRate} rate={this.state.rate}
                          lang={this.state.language} page={this.state.pageCounter}/>);
            case 12:
                return (
                    <Comments incr={this.pageIncrement} settext={this.setText} text={this.state.text}
                              send={this.sendData} lang={this.state.language} page={this.state.pageCounter}/>);
            case 13:
                return (
                    <Photo incr={this.pageIncrement} setPhoto={this.setPhoto} photo={this.state.photo}
                           lang={this.state.language} page={this.state.pageCounter}/>
                );
            default:
                console.warn("No page for this state");
                return (<>Something ain't right</>);
        }
    }

    sendData = () => {

        fetch(process.env.REACT_APP_BACKEND_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        }).then(r => console.log(r)).catch(
            err => {
                console.log(err)
            })
        this.resetState()

    };

    resetState = () => {
        const initialState = {
            pageCounter: 0,
            language: "",
            type: "",
            accessTypeClient: "",
            accessTypeWorker: "",
            name: "",
            surname: "",
            company: "",
            accompanyName: "",
            accompanySurname: "",
            rules: false,
            email: "",
            rate: 0,
            text: "",
            photo: null,
        };
        this.state = this.setState(initialState)
    };
    // handlers to change in child components
    pageIncrement = (n) => {
        this.setState({pageCounter: this.state.pageCounter + n})
    };
    setLanguage = (l) => {
        this.setState({language: l})
    };
    setType = (l) => {
        this.setState({type: l})
    };
    setAccessTypeClient = (l) => {
        this.setState({accessTypeClient: l})
    };
    setAccessTypeWorker = (l) => {
        this.setState({accessTypeWorker: l})
    };
    setName = (l) => {
        this.setState({name: l})
    };
    setSurname = (l) => {
        this.setState({surname: l})
    };
    setCompany = (l) => {
        this.setState({company: l})
    };
    setAccompanyName = (l) => {
        this.setState({accompanyName: l})
    };
    setAccompanySurname = (l) => {
        this.setState({accompanySurname: l})
    };
    setEmail = (l) => {
        this.setState({email: l})
    };
    setRules = (l) => {
        this.setState({rules: l})
    };
    setRate = (l) => {
        this.setState({rate: l})
    };
    setText = (l) => {
        this.setState({text: l})
    };
    setPhoto = (l) => {
        this.setState({photo: l})
    };
}

export default App;
