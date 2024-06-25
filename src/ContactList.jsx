import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';

class ContactList extends Component {
  render() {
    const { contacts, onDelete, onEdit } = this.props;

    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={contact.id}>
              <td>{index + 1}</td>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>{contact.phone}</td>
              <td>{contact.gender}</td>
              <td>
                <Button variant="warning" onClick={() => onEdit(contact)}>
                  Edit
                </Button>{' '}
                <Button variant="danger" onClick={() => onDelete(contact.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default ContactList;
