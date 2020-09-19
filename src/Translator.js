import Dictionary from "./Dictionary";

//Number of translated pages. Increment this while add a page
const totalPages = 20;

class Translator extends Dictionary{
    props = {
        language: 0,
        page: 0
    };

    constructor(props) {
        super()
        this.SetPage(props.page);
        this.SetLanguage(props.language)
    }

    //Get an item for a page as specified in class instance
    //Takes language from a class instance
    GetPageItem(item) {
        return this.items[this.props.page][item][this.props.language]
    }

    //Get a general item from generalItems list
    //Takes language from a class instance
    GetGeneralItem(item){
        return this.generalItems[item][this.props.language]
    }

    //Get a visitor's rules text in current language
    GetRuleItem(){
        return this.rules[this.props.language]
    }

    SetLanguage(language) {
        switch (language) {
            case "Russian":
                this.props.language = language;
                break;
            case "English":
                this.props.language = language;
                break;
            default:
                console.log("Bad language" + language);
                this.props.language = -1;
                break
        }
    }

    SetPage(page) {
        if (page < 0 || page > totalPages) {
            console.log("Bad page number:"+page);
            console.log("Translated is set to "+ totalPages + " now.")
            return document.location.href="/"
        }
        this.props.page = page
    }

}

export default Translator