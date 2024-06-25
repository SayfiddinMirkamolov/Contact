import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

class ContactModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.contact ? props.contact.id : uuidv4(),
      firstName: props.contact ? props.contact.firstName : '',
      lastName: props.contact ? props.contact.lastName : '',
      phone: props.contact ? props.contact.phone : '',
      gender: props.contact ? props.contact.gender : 'male'
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    this.props.onSave(this.state);
    this.props.onHide();
  };

  render() {
    const { show, onHide } = this.props;
    const { firstName, lastName, phone, gender } = this.state;

    return (
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.contact ? 'Edit Contact' : 'Add Contact'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={firstName}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={lastName}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={phone}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={gender}
                onChange={this.handleChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ContactModal;
