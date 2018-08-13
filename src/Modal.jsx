import React from 'react';
import './Modal.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Confetti from 'react-confetti'

const confettiColors = [
  '#01BAE',
  '#04E76',
  '#F5B70',
  '#DC007',
  '#040F0',
  '#E1FAE9',
  '#FB6107',
  '#FFF94F',
  '#E9190F'
]
class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>HELLO</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} >
          <ModalHeader toggle={this.toggle}>Special Thanks</ModalHeader>
          <Confetti height={1000} width={500} colors={this.confettiColors}/>
          <ModalBody align='center'>
            Casey Rockwell - SQL and GIS WIZARD<br/>
            Ethan Apodaca - JSX Genius<br/>
            Ryan Sharky - CSS Virtuoso<br/>
            Matt Rigdon - Audio Architect<br/>
            James Mason - El Capitán<br/>
            John Nadeau - Sensei<br/>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
