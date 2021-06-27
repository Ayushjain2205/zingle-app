import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

function Matches() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const matches = [
    {
      image: "https://randomuser.me/api/portraits/med/men/75.jpg",
      name: "George",
      location: "London",
    },
    {
      image: "https://randomuser.me/api/portraits/med/men/72.jpg",
      name: "Tony",
      location: "Bristol",
    },
    {
      image: "https://randomuser.me/api/portraits/med/men/71.jpg",
      name: "Sam",
      location: "London",
    },
    {
      image: "https://randomuser.me/api/portraits/med/men/25.jpg",
      name: "Kyle",
      location: "Wellington",
    },
    {
      image: "https://randomuser.me/api/portraits/med/men/79.jpg",
      name: "Kobe",
      location: "Washington",
    },
    {
      image: "https://randomuser.me/api/portraits/med/men/60.jpg",
      name: "Chris",
      location: "Jersey",
    },
    {
      image: "https://randomuser.me/api/portraits/med/men/40.jpg",
      name: "Anto",
      location: "Brussels",
    },
  ];

  return (
    <div>
      <h1 className='page-title'>
        Matches {"  "} <i class='fas fa-people-arrows'></i>
        <span className='settings' onClick={handleShow}>
          <i class='fas fa-sliders-h'></i>
        </span>
      </h1>
      <div className='explore-card card border-secondary mb-3'>
        {matches.map((match) => (
          <div className='match-card alert alert-dismissible alert-secondary'>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='alert'
            ></button>
            <img className='avatar' src={match.image} alt='' />
            <div className='details'>
              <h5>{match.name}</h5>
              <h6>
                <i class='fas fa-map-marker-alt'></i> {match.location}
              </h6>
            </div>
          </div>
        ))}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Preferences</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <fieldset className='form-group'>
            <label for='customRange1' className='form-label'>
              Overall similarity
            </label>
            <input type='range' className='form-range' id='customRange1' />
          </fieldset>
          <Accordion defaultActiveKey='1'>
            <Card className='card border-secondary'>
              <Accordion.Toggle as={Card.Header} eventKey='0'>
                Category similarity
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='0'>
                <Card.Body>
                  <fieldset className='form-group'>
                    <label for='customRange1' className='form-label'>
                      Food
                    </label>
                    <input
                      type='range'
                      className='form-range'
                      id='customRange1'
                    />
                    <label for='disabledRange' className='form-label'>
                      Movies & Shows
                    </label>
                    <input
                      type='range'
                      className='form-range'
                      id='disabledRange'
                      disabled=''
                    />
                    <label for='customRange3' className='form-label'>
                      Places
                    </label>
                    <input
                      type='range'
                      className='form-range'
                      min='0'
                      max='5'
                      step='0.5'
                      id='customRange3'
                    />
                    <label for='disabledRange' className='form-label'>
                      Songs
                    </label>
                    <input
                      type='range'
                      className='form-range'
                      id='disabledRange'
                      disabled=''
                    />
                    <label for='customRange3' className='form-label'>
                      Books
                    </label>
                    <input
                      type='range'
                      className='form-range'
                      min='0'
                      max='5'
                      step='0.5'
                      id='customRange3'
                    />
                  </fieldset>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className='card text-white'>
              <Accordion.Toggle as={Card.Header} eventKey='1'>
                Match Preferences
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='1'>
                <Card.Body>
                  <div className='list-group'>
                    <a
                      href='#'
                      className='list-group-item list-group-item-action'
                    >
                      Male
                    </a>
                    <a
                      href='#'
                      className='list-group-item list-group-item-action'
                    >
                      Female
                    </a>
                    <a
                      href='#'
                      className='list-group-item list-group-item-action'
                    >
                      Bisexual
                    </a>
                    <a
                      href='#'
                      className='list-group-item list-group-item-action'
                    >
                      Asexual
                    </a>
                    <a
                      href='#'
                      className='list-group-item list-group-item-action'
                    >
                      Gender Fluid
                    </a>
                    <a
                      href='#'
                      className='list-group-item list-group-item-action'
                    >
                      Gay
                    </a>
                    <a
                      href='#'
                      className='list-group-item list-group-item-action'
                    >
                      Lesbian
                    </a>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Matches;
