import React,{useState} from "react";
import {Table,Navbar,Container,Button} from "react-bootstrap";
import { useSelector,useDispatch} from "react-redux";
import {onDelete,onAdd,onEdit} from "../store/Slice/studentSice";
import ContentModal from "./ContentModal";

export default function List() {
  const dispatch = useDispatch();
  const students = useSelector((state) =>  state.students);
  const [show, setShow] = useState(false);
  const [isEdit,setEdit] = useState(false);
  const [selectedItm,setSelectedItm] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (itm) => {
    if(itm){
      setSelectedItm(itm);
      setEdit(true);}
    else{
      setEdit(false)
    }
    setShow(true);
  }
  const doEdit=(payload)=>{
    let obj ={...selectedItm,...payload}
    console.log("payload",obj)
   dispatch(onEdit(obj))
  }
  const doDelete=(itm)=>{
    dispatch(onDelete({id:itm.id}))
  }
  const doAdd=(payload)=>{
    dispatch(onAdd(payload));
   
  }
  const handleSave =(payload)=>{
    if(isEdit){
      doEdit(payload);
    }else{
      doAdd(payload);
    }
    handleClose();
  }
return (<>
 <Navbar  bg="light" variant="">
        <Container>
          <Navbar.Brand href="#">Student Details</Navbar.Brand>
          <Button variant="dark" onClick={handleShow}>Add</Button>{' '}
        </Container>
  </Navbar>
<Table responsive striped bordered hover>
  <thead>
   <tr>
    <th>Student Name</th>
    <th>Score</th>
    <th>Class</th>
    <th><span>Actions</span></th>
   </tr>
  </thead>
  <tbody>
  {students && students?.map(list=>(
   <tr key={list.id}>
    <td>{list.name}</td>
    <td> {list.score}
    </td>
    <td> {list.classname}
    </td>
    <td><span onClick={()=>{handleShow(list)}}>Edit</span>
    <span onClick={()=>{doDelete(list)}}>Delete</span></td>
   </tr>
  ))}
 </tbody>
 
 </Table>
 {show && 
 <ContentModal isEdit={isEdit} handleClose={handleClose} selectedItm={selectedItm} handleSave={(payload)=>{handleSave(payload)}}/>}
 </>
  )
}