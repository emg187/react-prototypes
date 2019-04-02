import React, {Component} from "react";
import ContactList from "./contact_list";
import ContactForm from "./contact_form";
import contactData from "../data/contacts";

export default class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            contacts: contactData
        };
        this.addContact = this.addContact.bind(this);
    }

    addContact(contact){
        const contactsCopy = this.state.contacts.slice();
        contactsCopy.push(contact);
        this.setState({
            contacts: contactsCopy
        });
    }
    
    render(){
        console.log(this.state.contacts);
    return (<div className="container">
            <h1 className="text-center">Address Book</h1>
            <div className="row">
                <div className="col-4"><ContactForm add={this.addContact}/></div>
                <ContactList contacts={this.state.contacts}/>
            </div>
            </div>);
    }
}
