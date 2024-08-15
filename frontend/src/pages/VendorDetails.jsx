import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const VendorDetails = () => {
  const [gridData, setGridData] = useState({});
  const [vendorBreachDate, setVendorBreachDate] = useState('');
  const { id } = useParams()
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:5000/vendors/vendordetails/${id}`);
        if (response.data !== null) {
          setGridData(response.data);
          let breachDate = new Date(response.data.vendorDateOfBreach);
          const month = breachDate.toLocaleString('default', { month: 'long' });
          setVendorBreachDate(breachDate.getDate() + " " + month + " " + breachDate.getFullYear());
        }
        else {
          setGridData(null)
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [id]);
  if (gridData === null) {
    return (
      <div className='bg-gray-100 h-40 justify-center flex flex-col items-center'>
        <p className=" text-center bg-gray-100 whitespace-nowrap px-3 py-4 text-sm text-gray-500">No records found</p>
        <Link className='text-center font-semibold underline text-link' to={'/'}>Go back to Home</Link>
      </div>
    )
  }
  else if (gridData.vendorName !== null && gridData.vendorName !== undefined) {
    return (
      <div>
        <header className="shodan-header relative min-w-screen">
          <div className='w-full pattern-bg h-full' />
          <p className='text-center text-white text-2xl font-semibold min-w-full'>{gridData.vendorName}</p>
          <p className='text-center pt-4 text-white min-w-full'>{gridData.vendorDesc}</p>
        </header>
        <div className="shodan-page bg-gray-100 min-w-screen">
          <div className="shodan-content">
            <div className='flex flex-col md:flex-row'>
              <section className="general-info mb-5 md:mb-0">
                <h2 className='font-semibold text-xl'>General Information:</h2>
                <ul className='pt-2'>
                  <li><span className='font-semibold pe-2'>Country:</span> {gridData.vendorCountry}</li>
                  <li><span className='font-semibold pe-2'>City:</span> {gridData.vendorCity}</li>
                  <li><span className='font-semibold pe-2'>Organization:</span> {gridData.vendorOrg}</li>
                  <li><span className='font-semibold pe-2'>DNS:</span> {gridData.dns}</li>
                </ul>
              </section>
              <section className="vulnerabilities">
                <h2 className='font-semibold text-xl'>Vulnerabilities</h2>
                <ul className='pt-2'>
                  {gridData.vendorVulnerabilities.map((vuln, index) => (
                    <li key={index}>
                      {vuln}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
            <section className="open-ports">
              <h2 className='font-semibold text-xl'>Breach Details:</h2>
              <ul className='pt-2'>
                <li><span className='font-semibold pe-2'>Breach Description:</span> {gridData.vendorBreachDetails}</li>
                <li><span className='font-semibold pe-2'>Breach Date:</span> {vendorBreachDate}</li>
              </ul>
            </section>
            <section className="web-technologies">
              <h2 className='font-semibold text-xl'>Risk Score Calculation:</h2>
              <ul className='pt-2'>
                <li><span className='font-semibold pe-2'>Identify Score:</span> {gridData.vendorIdentifyScore}</li>
                <li><span className='font-semibold pe-2'>Protect Score:</span> {gridData.vendorDetectScore}</li>
                <li><span className='font-semibold pe-2'>Detect Score:</span> {gridData.vendorDetectScore}</li>
                <li><span className='font-semibold pe-2'>Respond Score:</span> {gridData.vendorRespondScore}</li>
                <li><span className='font-semibold pe-2'>Recover Score:</span> {gridData.vendorRecoverScore}</li>
                <li><span className='font-semibold pe-2'>Average Total Risk Score:</span> {(gridData.vendorDetectScore + gridData.vendorIdentifyScore + gridData.vendorRecoverScore + gridData.vendorRespondScore + gridData.vendorDetectScore) / 5}</li>
              </ul>
            </section>
            <section className="links-sec">
              <h2 className='font-semibold text-xl'>Reference Links</h2>
              <ul className='pt-2'>
                {gridData.vendorReferenceLinks.map((vuln, index) => (
                  <li key={index}>
                    <a className='text-link underline font-semibold' href={vuln}>Link {index + 1}</a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
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

}

export default VendorDetails