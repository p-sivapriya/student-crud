import React,{useState,useEffect} from "react";
import {Table,Navbar,Container,Button,Form} from "react-bootstrap";
import { useSelector,useDispatch} from "react-redux";
import {onDelete,onAdd,onEdit} from "../store/Slice/studentSice";
import ContentModal from "./ContentModal";
import { Trash,Pencil,PlusCircleFill } from 'react-bootstrap-icons';

export default function List() {
  const dispatch = useDispatch();
  const students = useSelector((state) =>  state.students);
  const [show, setShow] = useState(false);
  const [isEdit,setEdit] = useState(false);
  const [selectedItm,setSelectedItm] = useState();
  const [filteredData,setFilterData] =useState(students);
  const [namefilter,setNamefiletr] = useState("");
  const [scoreMinFilter,setScoreMinfiletr] = useState();
  const [scoreMaxFilter,setScoreMaxfiletr] = useState();
  const [classFilter,setClassFilter] =useState([]);

  const handleClose = () => setShow(false);
  useEffect(()=>{setFilterData(students)},[students])
  useEffect(()=>{doFilter();
  },[namefilter,classFilter,scoreMinFilter,scoreMaxFilter])
  const handleShow = (itm) => {
    if(itm){
      setSelectedItm(itm);
      setEdit(true);}
    else{
      setSelectedItm(null);
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
const doFilter= ()=>{
let data = students;
data = data?.filter(dt=>{
  if(dt.name?.toLowerCase().indexOf(namefilter?.toLowerCase())!=-1) return dt;}
  );
console.log("namedata",data)
data = data?.filter(dt=>{if(parseInt(dt.score)>=parseInt(scoreMinFilter||0))return dt});
data =data?.filter(dt=>{if(parseInt(dt.score)<=parseInt(scoreMaxFilter||100)) return dt});
data = data?.filter(dt=>{
  if((classFilter.includes(dt.classname) && classFilter.length>0) || classFilter.length==0)
  return dt;
})

  setFilterData(data);
}
const onChangeCheckbox =(e)=>{
console.log("WWW",e)
if(e.target.checked){
  let checkArr = [...classFilter];
  checkArr.push(e.target.id)
  setClassFilter(checkArr);
}else{
  let filt = classFilter.filter(itm=>itm!=e.target.id);
  setClassFilter(filt);
}
}
return (<>
 <Navbar  bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">Student Details</Navbar.Brand>
          <span onClick={()=>{handleShow()}}><PlusCircleFill color="white" size={40}/></span>{' '}
        </Container>
  </Navbar>
<Table responsive striped bordered hover>
  <thead>
   <tr>
    <th><span>Student Name</span>
    <br />
    <Form.Control type="text" placeholder="Search Name" value={namefilter} onChange={(val)=>{setNamefiletr(val.target.value)}}/>
               
    </th>
    <th>Score
    <br />
    <div className="d-inline-flex">
    <Form.Control className="mx-1" type="number"  placeholder="Min" min={0} max={100} maxLength={3} value={scoreMinFilter} onChange={(val)=>{setScoreMinfiletr(val.target.value)}}/>
    <Form.Control className="mx-1"  type="number" placeholder="Max" min={0} max={100} maxLength={3} value={scoreMaxFilter} onChange={(val)=>{setScoreMaxfiletr(val.target.value)}}/>
    </div>
    </th>
    <th>Class
    <br />
    <div key={`inline-checkbox`} className="mb-3">
          <Form.Check
            inline
            label="A"
            name="classname"
            type={"checkbox"}
            id={`A`}
            onChange={onChangeCheckbox}
          />
           <Form.Check
            inline
            label="B"
            name="classname"
            type={"checkbox"}
            id={`B`}
            onChange={onChangeCheckbox}

          />
           <Form.Check
            inline
            label="C"
            name="classname"
            type={"checkbox"}
            id={`C`}
            onChange={onChangeCheckbox}
          />
        </div>
               
    </th>
    <th><span>Actions</span></th>
   </tr>
  </thead>
  <tbody>
  {filteredData && filteredData?.map(list=>(
   <tr key={list.id}>
    <td>{list.name}</td>
    <td> {list.score}
    </td>
    <td> {list.classname}
    </td>
    <td><span onClick={()=>{handleShow(list)}}><Pencil color="royalblue" size={25}/></span>
    <span onClick={()=>{doDelete(list)}}><Trash color="royalblue" size={25}/></span></td>
   </tr>
  ))}
 </tbody>
 
 </Table>
 {show && 
 <ContentModal isEdit={isEdit} handleClose={handleClose} selectedItm={selectedItm} handleSave={(payload)=>{handleSave(payload)}}/>}
 </>
  )
}