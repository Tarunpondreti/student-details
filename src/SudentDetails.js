import React from 'react'
import StudentMarks from './StudentMarks'
import{useForm,FormProvider,useFormContext} from "react-hook-form"
import './App.css'

const SudentDetails = () => {
const methods = useForm();
const onSubmit = (data) => {
    console.log(data);

  };
  return (
    
    <FormProvider {...methods} >
    <form onSubmit={methods.handleSubmit(onSubmit)} >
        <center>
            <h1> Student details</h1>
            <br/>
            <NestedInput/>
        <br/>
        <hr/>
        <h2>Student Marks Details</h2>
        <div style={{paddingTop:50}}>
        <StudentMarks/>
        </div>
        </center>
        <button style={{marginTop:120,marginLeft:50}}>Submit</button>
    </form>
  </FormProvider>
  );
}
const NestedInput = () => {
    const { register,} = useFormContext(); 
    return (
        
        <><div></div><label htmlFor='Name'>Student Name</label><input type="text" id='Name' style={{ marginBottom: 50 }}
            {...register("Name")}/>
            <label htmlFor='Class'>Class</label><input type="text" id='Class' style={{ marginBottom: 50 }}
            {...register("Class")} /></>
        
    );
  };

export default SudentDetails