import React, { useEffect, useState } from 'react'
import { createEmployee , getEmployee, updateEmployee } from '../Services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom';
const Employee = () => {

     const [firstname,setfirstname] = useState('')
     const [lastname,setlastname] = useState('')
     const [email,setemail] = useState('')
const{id}=useParams();
const [errors,seterrors] = useState({firstname:'',lastname:'',email:''})

     const navigator = useNavigate();
 useEffect(()=>{
     if(id){
         getEmployee(id).then((response) => {
             setfirstname(response.data.firstname)
             setlastname(response.data.lastname)
             setemail(response.data.email)
         }).catch(error => {
             console.error(error);
         })
     }
 },[id])

     function saveOrupdateEmployee(e){
        e.preventDefault();
        if(validateForm()){
            const employee={firstname,lastname,email}
            console.log(employee)
            if(id){
                updateEmployee(id, employee).then((response) => {
                    console.log(response.data);
                    navigator('/employees');
                }).catch(error => {
                    console.error(error);
                })
            } else{
            
      
            
        createEmployee(employee).then ((response) => {
            console.log(response.data)
            navigator('/employees')
        }).catch(error => {
            console.error(error);
        })
     }
    }
    }
     function validateForm(){
        let valid = true;
        const errorsCopy={...errors}
        if(firstname.trim()){
            errorsCopy.firstname='';
     }
     else{
        errorsCopy.firstname='First Name is required';
        valid = false;
     }
     if(lastname.trim()){
        errorsCopy.lastname='';
     }
     else{
        errorsCopy.lastname='Last Name is required';
        valid = false;
     }
     if(email.trim()){
        errorsCopy.email='';
     }
     else{
        errorsCopy.email='Email is required';
        valid = false;
     }
     seterrors(errorsCopy);
     return valid;
    }
    function pageTitle(){
if(id){
    return <h2 className='text-center mt-5'>Update Employee </h2>
}
else{
   return <h2 className='text-center  mt-5'>Add Employee</h2>
}
    }
  return (
    <div className='container'>
        <br /> <br />
        <div className='row'>
<div className='card col-md-6 offset-md-3 offset-md-3'>
{
pageTitle()
}
<div className='card-body'>
    <form>
        <div className='form-group mb-4'>
            <label className='form-label'>First Name</label>
            <input type="text" placeholder='Enter First Name' className={`form-control ${errors.firstname? 'is-invalid':''}`} value={firstname} onChange={(e)=>{setfirstname(e.target.value)}}/>
{ errors.firstname && <div className='invalid-feedback'>{errors.firstname}</div>}
        </div>
        <div className='form-group mb-4'>
            <label className='form-label'>Last Name</label>
            <input type="text" placeholder='Enter Last Name'  className={`form-control ${errors.lastname? 'is-invalid':''}`} value={lastname} onChange={(e)=>{setlastname(e.target.value)}}/>
           {errors.lastname && <div className='invalid-feedback'>{errors.lastname}</div>}
        </div>
        <div className='form-group mb-4'>
            <label className='form-label'>Email</label>
            <input type="text" placeholder='Enter Email' className={`form-control ${errors.email? 'is-invalid':''}`} value={email} onChange={(e)=>{setemail(e.target.value)}}/>
            {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
        </div>

        <button className='btn btn-success mb-2 ' onClick={saveOrupdateEmployee}>Submit</button>
    </form>

</div>
        </div>
</div>

    </div>
  )
}

export default Employee