import { Loader2, PlusSquare, PlusSquareIcon } from 'lucide-react';
import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { v4 as uuidv4 } from 'uuid';
import GlobalApi from './../../../service/GlobalApi';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
  

export default function Addresume() {

    const [OpenDialog,SetOpenDialog] = useState(false)
    const [resumeTitle,setResumeTitle]=useState();
    const {user}=useUser();
    const [loading,setLoading]  = useState(false);
    const navigation=useNavigate();

    const onCreate = async()=>{
      setLoading(true)
      const uuid = uuidv4();
      const data = {
        data:{
          title:resumeTitle,
          resumeid:uuid,
          useremail:user?.primaryEmailAddress?.emailAddress,
          userName:user?.fullName
        }
      };

      GlobalApi.CreateNewResume(data).then(resp=>{
        console.log(resp);
        if(resp){
          setLoading(false);
          navigation('/dashboard/resume/'+uuid+'/edit')
        }
      },(error)=>{
        setLoading(false);
      })
    }
  return (
    <div>
      <div className='p-14 py-24 border 
      items-center flex justify-center bg-slate-100
       rounded-lg h-[280px]
       hover:scale-105 transition-all hover:shadow-md
       cursor-pointer'
        onClick={()=>SetOpenDialog(true)}   >
        <PlusSquare />
      </div>
      <Dialog open={OpenDialog}>

  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create New Resume</DialogTitle>
      <DialogDescription>
           <p>Add a title for your resume</p>
            <Input className="my-2"placeholder="Ex.WEB DEV"
            onChange={(e)=>setResumeTitle(e.target.value)} />
        
      </DialogDescription>
      <DialogDescription>
       <div className='flex justify-end gap-5'>
        <Button onClick={()=>SetOpenDialog(false)} variant='ghost'>Cancle</Button>
        <Button 
         disabled={!resumeTitle||loading}
         onClick={()=>onCreate()}>
          {loading?
            <Loader2 className='animate-spin'/>:'Create'
          }
          </Button>
       </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

      

    </div>
  );
}
