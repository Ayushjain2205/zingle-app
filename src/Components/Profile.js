import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

function Profile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <h1 className='page-title'>
        Profile {"   "}
        <i class='far fa-id-badge'></i>
      </h1>
      <div className='explore-card profile-card card border-secondary mb-3'>
        <img
          className='profile-pic'
          src='https://randomuser.me/api/portraits/men/40.jpg'
          alt=''
        />
        <div class='form-group'>
          <label for='formFile' class='form-label mt-4'>
            Change profile pic
          </label>
          <input class='form-control' type='file' id='formFile' />
          <button
            type='button'
            className='match-btn sexuality-btn btn btn-lg btn-outline-secondary'
            onClick={handleShow}
          >
            Set Sexuality
          </button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sexuality</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='sexuality-holder'>
            <img
              src='https://img-premium.flaticon.com/png/512/2159/premium/2159168.png?token=exp=1624796341~hmac=296c2b6371629c3d4180f473751b0145'
              alt=''
            />
            <img
              src='https://img-premium.flaticon.com/png/512/1019/premium/1019172.png?token=exp=1624796519~hmac=d78800c3e9dac6ee15fd25b56682b473'
              alt=''
            />
            <img
              src='https://image.flaticon.com/icons/png/512/2041/2041179.png'
              alt=''
            />
            <img
              src='https://image.flaticon.com/icons/png/512/2041/2041049.png'
              alt=''
            />
            <img
              src='https://image.flaticon.com/icons/png/512/2041/2041148.png'
              alt=''
            />
            <img
              src='https://image.flaticon.com/icons/png/512/2041/2041230.png'
              alt=''
            />
            <img
              src='https://image.flaticon.com/icons/png/512/2041/2041153.png'
              alt=''
            />
            <img
              src='https://image.flaticon.com/icons/png/512/2041/2041061.png'
              alt=''
            />
            <img
              src='https://image.flaticon.com/icons/png/512/2041/2041112.png'
              alt=''
            />
            <img
              src='https://image.flaticon.com/icons/png/512/2041/2041014.png'
              alt=''
            />
          </div>
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

export default Profile;
