import React, { useState } from 'react';
import {Button,Modal,FloatingLabel,Form,ToggleButtonGroup,ToggleButton } from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';

export default function ContentModal(props) {
 const {handleClose,handleSave} = props;
 console.log("props",props)
 const [score,setScore] = useState(props.selectedItm?.score||"");
 const [classname,setClassname] = useState(props.selectedItm?.classname||"A");
 const [name,setName] = useState(props.selectedItm?.name||"");
 
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
        <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(val)=>{setName(val.target.value)}}/>
      </FloatingLabel>
      <Form.Label>Score</Form.Label>
      <RangeSlider value={score}
      onChange={changeEvent => setScore(changeEvent.target.value)}
      />
      {/* <FloatingLabel controlId="floatingInput" label="Enter Score" className="mb-3">
        <Form.Control type="number" placeholder="Enter Score" />
      </FloatingLabel> */}

      <ToggleButtonGroup
      name="value"
      type="radio"
      value={classname}
      onClick={val => {setClassname(val.target.textContent?.split(" ")[1])}}
      className={"mb-3 col-md-12"}
    >
      <ToggleButton value={"A"}>Class A</ToggleButton>
      <ToggleButton value={"B"}>Class B</ToggleButton>
      <ToggleButton value={"C"}>Class C</ToggleButton>
    </ToggleButtonGroup>
    
      </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleSave({name,score,classname})}}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}