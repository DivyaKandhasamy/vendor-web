import React, { useEffect, useState } from 'react';
import banner from '../assets/newthreat-img.png'
import { IoBusiness } from "react-icons/io5";
import  axios from 'axios';
const NewThreat = () => {

  const [reportDownloadUrl, setReportDownloadUrl] = useState('');

  useEffect(() => {
    async function fetchReportDownloadUrl() {
      try {
        const response = await axios.get('http://localhost:5000/params/REPORT_DOWNLOAD_URL');
        setReportDownloadUrl(response.data.paramValue);
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchReportDownloadUrl();
  }, [])

  return (
    <>
      <div className='bg-gray-100 min-h-screen'>
        <div className='flex bg-[#0f172a] items-center relative'>
          <div className='w-full pattern-bg -z-2 h-full' />
          <div className='text-gray-900 flex px-10 pb-10 flex-1'>
            <div className='flex flex-col justify-center'>
              <h1 className=' font-bold md:py-6 text-4xl text-gray-100'>
                Industry Threat Landscape Report
              </h1>
              <h1 className='mb-4 text-xl text-[#00df9a] font-semibold'>Get a holistic perspective on cyber threats targeting your industry</h1>
              <p className='text-lg  text-gray-500'>Gain industry-based insights into the cybercrime ecosystem and empower cybersecurity posture against potential cyber threats with SOCRadar AI in seconds.</p>
            </div>
          </div>
          <div className='flex-1 h-[400px] pt-15 flex justify-center'>
            <img alt='banner' src={banner} />
          </div>
        </div>
        <div className='min-h-screen mt-20 px-10'>
          <h1 className='text-gray-900 font-semibold mt-5 text-3xl'>Select a report:</h1>
          <a href={'https://'+reportDownloadUrl}>
          <div className='hover:bg-slate-100 card-2 bg-slate-50 flex flex-col items-center justify-center mx-20 mt-12 rounded-xl'>
            <IoBusiness className='text-[#0f172a] h-[45px] w-auto' />
            <p className='text-link underline font-semibold pt-4'>Business Threat Report</p>
          </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default NewThreat