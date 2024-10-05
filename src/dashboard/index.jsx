import React, { useEffect } from 'react';
import Addresume from './components/Addresume';
import { useUser } from '@clerk/clerk-react';
import GlobalApi from './../../service/GlobalApi';
import ResumeItem from './components/ResumeItem';

export default function DashBoard() {
  const {user}=useUser();
  
  const [resumeList, setResumeList] = React.useState([]);
  useEffect(()=>{
    user&&GetResumeList()
  },[user]);


  const GetResumeList=()=>{
    GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress)
    .then(resp =>{

      setResumeList(resp.data.data);
    })

  }
  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h1 className='font-bold text-3xl'>My Resume</h1>
      <p>Start Creating Resume for your Next Job </p>
      <div className='grid grid-cols-2 md:grid-cols-3 
      lg:grid-cols-5 gap-5 mt-10 '>
        <Addresume/>
        {resumeList.length>0&&resumeList.map((resume,index)=>(
          
          <ResumeItem resume={resume} key={index}/>
      
        ))}
      </div>
    </div>
  );
}
