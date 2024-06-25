import React, { Component } from 'react';
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap';
import ContactModal from './ContactModal';
import ContactList from './ContactList';
import Filter from './Filter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    contacts: [],
    showModal: false,
    editContact: null,
    search: '',
    filter: ''
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal, editContact: null });
  };

  addContact = (contact) => {
    this.setState({
      contacts: [...this.state.contacts, contact]
    });
    toast.success('Contact added successfully');
  };

  editContact = (contact) => {
    const updatedContacts = this.state.contacts.map((c) =>
      c.id === contact.id ? contact : c
    );
    this.setState({ contacts: updatedContacts });
    toast.success('Contact updated successfully');
  };

  deleteContact = (id) => {
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== id)
    });
    toast.error('Contact deleted');
  };

  handleSearch = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFilter = (event) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { contacts, showModal, editContact, search, filter } = this.state;

    const filteredContacts = contacts
      .filter((contact) =>
        `${contact.firstName} ${contact.lastName}`
          .toLowerCase()
          .includes(search.toLowerCase())
      )
      .filter(
        (contact) => (filter ? contact.gender === filter : true)
      );

    return (
      <Container>
        <ToastContainer />
        <Row className="mt-3">
          <Col>
            <h1>Contact App</h1>
            <Button variant="primary" onClick={this.toggleModal}>
              Add Contact
            </Button>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={6}>
            <Form.Control
              type="text"
              placeholder="Search by name"
              value={search}
              onChange={this.handleSearch}
            />
          </Col>
          <Col md={3}>
            <Form.Control as="select" value={filter} onChange={this.handleFilter}>
              <option value="">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Control>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <ContactList
              contacts={filteredContacts}
              onDelete={this.deleteContact}
              onEdit={(contact) => this.setState({ editContact: contact, showModal: true })}
            />
          </Col>
        </Row>
        {showModal && (
          <ContactModal
            show={showModal}
            onHide={this.toggleModal}
            onSave={editContact ? this.editContact : this.addContact}
            contact={editContact}
          />
        )}
      </Container>
    );
  }
}

export default App;
