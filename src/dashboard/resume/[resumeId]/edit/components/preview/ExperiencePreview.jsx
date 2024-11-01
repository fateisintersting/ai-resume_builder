import React from 'react';

export default function ExperiencePreview({resumeInfo}) {
  return (
    <div className='my-6'>
        <h2 className='text-center font-bold text-sm mb-2'
        style={{
            color:resumeInfo?.themeColor
        }}>Professional Experience</h2>

        <hr style={{
            borderColor:resumeInfo?.themeColor
        }} />

        {resumeInfo?.experience.map((experinece,index) =>(
            <div key={index} className='my-5'>
                <h2 className='text-sm font-bold'
                style={{
                    color:resumeInfo?.themeColor
                }}>{experinece?.title}</h2>
                <h2 className='text-xs flex justify-between'>{experinece?.companyName},
                    {experinece?.city}, 
                    {experinece?.state} 
                    <span>{experinece?.startDate}
                         {experinece?.currentlyWorking?'Presemt':experinece.endDate} 
                         </span>
                    </h2>
                    <p className='text-xs my-2'>
                        {experinece?.workSummery}
                    </p>
            </div>
        ))}
    </div>
  );
}
