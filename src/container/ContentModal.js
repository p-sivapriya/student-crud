import React, { useState } from 'react';
import {Button,Modal,FloatingLabel,Form  } from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';

export default function ContentModal(props) {
 const {handleClose,handleSave} = props;
 
  return (
    <>
    
      <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Record</Modal.Title>
        </Modal.Header>
        <Modal.Body><FloatingLabel
        controlId="floatingInput"
        label="Enter Name"
        className="mb-3"
       >
        <Form.Control type="text" placeholder="Enter Name" />
      </FloatingLabel>
      <Form.Label>Score</Form.Label>
      <RangeSlider className='row'
      onChange={changeEvent => setValue(changeEvent.target.value)}
      />
      {/* <FloatingLabel controlId="floatingInput" label="Enter Score" className="mb-3">
        <Form.Control type="number" placeholder="Enter Score" />
      </FloatingLabel> */}
      <FloatingLabel controlId="floatingInput" label="Enter Class">
        <Form.Control type="text" placeholder="Enter Class" />
      </FloatingLabel>
      </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}