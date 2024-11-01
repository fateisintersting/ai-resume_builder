
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';

export default function Experience() {

  const formField={
    title:'',
    companyName:'',
    city:'',
    state:'',
    startdate:'',
    enddate:'',
    workSummery:'',
  }

  const handleChange=(index,event)=>{

  }
  const [experienceList,setExperienceList] = useState([formField])
  return (
    <div>
     
      
      <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
      <h2 className='font-bold text-lg'> Experience</h2>
      <p>Add Your Previous Job Experience</p>
      <div>
        {experienceList.map((item,index)=>(
          <div className='grid '>
            <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
              <div>
                <label className='text-xs' >Position Title</label>
                <Input name="title" onChange={(event)=>handleChange(index,event)} />
                </div>
                <div>
                <label className='text-xs' >Company Name</label>
                <Input name="companyname" onChange={(event)=>handleChange(index,event)} />
                </div>
                <div>
                <label className='text-xs' >City</label>
                <Input name="city" onChange={(event)=>handleChange(index,event)} />
                </div>
                <div>
                <label className='text-xs' >State</label>
                <Input name="state" onChange={(event)=>handleChange(index,event)} />
                </div>
                <div>
                <label className='text-xs' >StartDate</label>
                <Input type='date' name="startdate" onChange={(event)=>handleChange(index,event)} />
                </div>
                <div>
                <label className='text-xs' >EndDate</label>
                <Input type='date' name='enddate' onChange={(event)=>handleChange(index,event)} />
                </div>
                <div>
                  {/* {worksummer} */}
                </div>
              </div>
            </div>
        ))}
      </div>
      </div>
    </div>
  );
}
