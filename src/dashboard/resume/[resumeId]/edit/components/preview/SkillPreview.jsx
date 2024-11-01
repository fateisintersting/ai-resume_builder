import React from 'react';

export default function SkillPreview({resumeInfo}) {

  return (
    <div className='grid grid-cols-2 gap-3 my-4'>
        {resumeInfo?.skills.map((skill,index)=>(
            <div key={index} className='flex items-center justify-between'>
                <h3 className='text-xs font-bold'>{skill?.name}</h3>
                <div className='h-2 bg-gray-200 w-[120px]'>
                    <div className='h-2'
                    style={{
                        backgroundColor:resumeInfo?.themeColor,
                        width:skill?.rating+'%'
                    }}>

                    </div>

                </div>
                </div>
        ))}
      
    </div>
  );
}
