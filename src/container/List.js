import React from "react";
import { Table } from "react-bootstrap";
import { useSelector,useDispatch} from "react-redux";

export default function List() {
  const dispatch = useDispatch();
  const students = useSelector((state) =>  state.students);
return (

<Table responsive>
  <thead>
   <tr>
    <th>ID</th>
    <th>Name</th>
    <th><span>Action</span>
  
    </th>
   </tr>
  </thead>
  <tbody>
  {students && students.map(list=>(
   <tr key={list.id}>
    <td>{list.id}</td>
    <td> {list.name}
    </td>
   </tr>
  ))}
 </tbody>
 </Table>
 
  )
}