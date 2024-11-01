import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import GlobalApi from './../../../../../../../service/GlobalApi';
import { ResumeInfoContext } from '@/context/ResumeInfoContex';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Brain, LoaderCircle } from 'lucide-react';
import { toast } from 'sonner';
import { AIChatSession} from './../../../../../../../service/AIModal';



const prompt = "Job Title : {jobtitle} ,according on job title give me the summery for my resume within 4-5 lines in json format with field experinence Level and summery with experience level for freshers,Mid-levle ,Experience"

function Summery(enabledNext) {
    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext);
    const [summery,setSummery]=useState();
    
    const [loading,setLoading]=useState(false)
    const params=useParams();
    const [aiGenratedSummeryList,setAiGenratedSummeryList]= useState()
    useEffect(() => {
        summery&&setResumeInfo({
            ...resumeInfo,
            summery:summery
        })
    }, [summery]);


    const GenerateSummeryFromAI = async()=>{
      setLoading(true)
      const PROMPT=prompt.replace('{jobtitle}',resumeInfo?.jobTitle);
      console.log(PROMPT)
      const result = await AIChatSession.sendMessage(PROMPT)
      // console.log( JSON.parse(result.response.text()))
      setAiGenratedSummeryList(JSON.parse([result.response.text()]))
      setLoading(false)
    }

    const onSave=(e)=>{
    e.preventDefault();
    setLoading(true)
    const data={
      data:{
        summery:summery
      }
    };

    GlobalApi.UpdateResumeDetail(params?.resumeId,data).then(resp=>{
      if (resp.status === 200 || resp.status === 201) {
         // Ensure successful status
        console.log(resp)
        enabledNext(true);
        setLoading(false);
        toast("Detail Updated Successfully");
      } else {
        toast.error("Unexpected response. Details might not have updated."); // Handle unexpected responses
      }
    })
    .catch((error)=>{
      setLoading(false);
      toast("Detail Updated Successfully");
      
    });
    }
  return (
    <>
    <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
      <h2 className='font-bold text-lg'>Summery</h2>
      <p>Add Summery for your Job title</p>

      <form className='mt-7' onSubmit={onSave} >
        <div className='flex justify-between items-end' >
            <label>Add Summery</label>
            <Button size="sm" variant="outline" onClick={()=>GenerateSummeryFromAI()} type="button"  className="border-r-7 flex gap-2" >
               <Brain className='' /> Genrate from AI</Button>
            
           
        </div>
        <Textarea className="mt-5" required
        defaultValue={resumeInfo?.summery}
        onChange={(e)=>setSummery(e.target.value)}
        />

      <div className='mt-2 flex justify-end'>
      <Button type="submit"
           disabled={loading}>
            {loading?<LoaderCircle className='animate-spin'/>:'Save' } 
           </Button>
      </div>
      </form>
     
    </div>

    {aiGenratedSummeryList &&<div>
      <h2 className='font-bold'>Suggestion </h2>
      {aiGenratedSummeryList.map((item,index)=>(
        <div>
          <h3 className='font-bold my-1' >Level : {item?.experienceLevel}</h3>
          <p>{item?.summery}</p>
          </div>
      ))}
    </div>
}

    </>
  );
}

export default Summery;
