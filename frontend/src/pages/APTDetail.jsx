import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Accordion from '../components/Accordion'
const DetailPage = () => {
  const [gridData, setGridData] = useState({});
  const [countryAccordionOpen, setCountryAccodionOpen] = useState(true);
  const [sectorAccordionOpen, setSectorAccodionOpen] = useState(true);
  const [attackAccordionOpen, setAttackAccodionOpen] = useState(true);
  const [cvesAccordionOpen, setCvesAccodionOpen] = useState(true);
  const { id } = useParams()
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:5000/apt/details/${id}`);
        setGridData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [id]);

  const toggleAccordion = (accordionkey) => {
    switch(accordionkey){
      case 1:
        setCountryAccodionOpen((prev) => !prev);
        break;
      case 2:
        setSectorAccodionOpen((prev) => !prev);
        break;
      case 3:
        setAttackAccodionOpen((prev) => !prev);
        break;
      case 4:
        setCvesAccodionOpen((prev) => !prev);
        break;
    }
  };
  if(gridData == null){
    return (
      <div className='bg-gray-100 h-40 justify-center flex flex-col items-center'>
        <p className=" text-center bg-gray-100 whitespace-nowrap px-3 py-4 text-sm text-gray-500">No records found</p>
        <Link className='text-center font-semibold underline text-link' to={'/'}>Go back to Home</Link>
      </div>
    )
  }
  else if (gridData.APTName !== null && gridData.APTName !== undefined) {
    return (
      <div className='bg-gray-100 min-h-screen'>
        <div className='min-w-full relative apt-header h-96 flex justify-start items-center'>
          <div className='w-full pattern-bg h-full' />
          <div className='p-20'>
            <img className='rounded-xl' width="250px" src={gridData.imgurl} alt='apt logo' />
          </div>
          <div>
            <section className="apt-general-info">
              <h2 className='font-semibold text-xl'>General Information:</h2>
              <ul className='pt-2'>
                <li key="name"><span className='font-semibold pe-2'>Name:</span> {gridData.APTName}</li>
                <li key="rank"><span className='font-semibold pe-2'>Rank:</span> {gridData.APTRank}</li>
                <li key="desc"><span className='font-semibold pe-2'>Description:</span> {gridData.APTDescription}</li>
                <li key="alias" className='flex flex-col'>
                  <span className='flex flex-row font-semibold pe-2'>Also known as:</span>
                  <section>
                    {gridData.otherKnownNames.map((data) => {
                      return (
                        <button key={data} className='bg-[#00df9a] text-black rounded-md font-medium w-[100px] me-3 mt-3'>
                          {data}
                        </button>
                      )
                    })}
                  </section>
                </li>
              </ul>
            </section>
          </div>
        </div>
        <div className='p-20'>
          <Accordion
            country
            title="Target Countries"
            data={gridData.targetcountryids}
            isOpen={countryAccordionOpen}
            toggleAccordion={() => toggleAccordion(1)}
          />
          <Accordion
            sector
            title="Target Sectors"
            data={gridData.targetsectors}
            isOpen={sectorAccordionOpen}
            toggleAccordion={() => toggleAccordion(2)}
          />
          <Accordion
            title="Attack IDs"
            data={gridData.attackids}
            isOpen={attackAccordionOpen}
            toggleAccordion={() => toggleAccordion(3)}
          />
          <Accordion
            title="Related CVEs"
            data={gridData.relatedCVEs}
            isOpen={cvesAccordionOpen}
            toggleAccordion={() => toggleAccordion(4)}
          />
        </div>
      </div>
    )
  }
  else {
    return (
      <div className='min-h-screen bg-gray-100'>
        <div className='flex justify-center items-center min-h-screen' role="status">
          <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }
};

export default DetailPage;

/*

Image

Target Countries

Target Sectors

Attack IDs

Related CVes



*/