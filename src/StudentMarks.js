import React from 'react'
import { useFieldArray } from "react-hook-form";
import { useFormContext } from "react-hook-form";

const StudentMarks = () => {
    const{register,control,} = useFormContext();
    const{fields,append,} = useFieldArray({
        name:"marksList",
        control,
    });
  return (
    <div>
        
   {fields.map((item,index) => ( 
    
    <div className="form-row form-group" key={index}>
            <div className="col" >
    <label htmlFor='Marks'>Marks</label>
      <input type="text" id='Marks' className="form-control" placeholder="Marks"  {...register(`marksList.${index}.Marks`)} defaultValue={item.Marks}/>
      </div>
            <div className='col'>
      <label htmlFor='Subject' >Subject</label>
      <input  type="text" id='Subject' className="form-control" placeholder="Subject"  {...register(`marksList.${index}.Subject`)}  defaultValue={item.Subject}/>
      </div>
      </div>))
   }
    
   
    
    <div className="col">
      <button className='btn btn-primary' onClick={() => {
            append({});
          }}> Add </button>
  </div>
</div>
  )
}

export default StudentMarks