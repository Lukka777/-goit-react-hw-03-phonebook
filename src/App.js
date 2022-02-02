import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { nanoid } from "nanoid";
import AddContact from "./Components/AddContact";
import FindContact from "./Components/FindContact";

class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };
  render() {
    return (
      <>
        <AddContact
          name={this.state.name}
          number={this.state.number}
          onChangeName={this.onChangeName}
          onChangePhone={this.onChangePhone}
          addContact={this.addContact}
        />
        <FindContact
          contacts={this.state.contacts}
          onClickDelete={this.onClickDelete}
          onChangeInput={this.onChangeInput}
          filter={this.state.filter}
        />
      </>
    );
  }

  addContact = () => {
    const name = this.state.name;
    const existingUser = this.state.contacts.find(
      (value) => value.name === name
    );
    if (existingUser) {
      alert(`${existingUser.name} already exist`);
      return;
    }
    const phone = this.state.number;
    const id = nanoid();
    this.setState({
      ...this.state,
      contacts: [...this.state.contacts, { name, phone, id }],
      name: "",
      number: "",
    });
  };
  onChangeName = (event) => {
    this.setState({ ...this.state, name: event.target.value });
  };
  onChangePhone = (event) => {
    this.setState({ ...this.state, number: event.target.value });
  };
  onChangeInput = (event) => {
    this.setState({ ...this.state, filter: event.target.value });
  };
  onClickDelete = (userToDelete) => () => {
    this.setState({
      ...this.state,
      contacts: this.state.contacts.filter(
        (value) => value.id !== userToDelete.id
      ),
    });
  };
}

export default App;
