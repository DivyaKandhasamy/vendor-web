import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid';

const VendorGrid = () => {
  const [gridData, setGridData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [vendorNameFilter, setVendorNameFilter] = useState('');
  const [breachDateFilter, setBreachDateFilter] = useState('');
  const [alphabetFilter, setAlphabetFilter] = useState('');
  const [riskScoreFilter, setRiskScoreFilter] = useState('');

  const itemsPerPage = 10; // Number of items per page

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/vendors');
        setGridData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    // Reset to page 1 when filters change
    setCurrentPage(1);
  }, [vendorNameFilter, breachDateFilter, alphabetFilter,riskScoreFilter]);

  useEffect(() => {
    // Update the total number of pages whenever the data or filters change
    const filtered = gridData.filter(data => {
      const breachYear = new Date(data.breachDate).getFullYear();
      const startsWithLetter = alphabetFilter === '' || data.vendorName.toUpperCase().startsWith(alphabetFilter);

      return (
        (vendorNameFilter === '' || data.vendorName === vendorNameFilter) &&
        (riskScoreFilter === '' || data.riskScore === riskScoreFilter) &&
        (breachDateFilter === '' || breachYear === parseInt(breachDateFilter)) &&
        startsWithLetter
      );
    });
    setTotalPages(Math.ceil(filtered.length / itemsPerPage));
  }, [gridData, vendorNameFilter, breachDateFilter, alphabetFilter,riskScoreFilter]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const filteredData = gridData.filter(data => {
    const breachYear = new Date(data.breachDate).getFullYear();
    const startsWithLetter = alphabetFilter === '' || data.vendorName.toUpperCase().startsWith(alphabetFilter);

    return (
      (vendorNameFilter === '' || data.vendorName === vendorNameFilter) &&
      (riskScoreFilter === '' || data.riskScore === riskScoreFilter) &&
      (breachDateFilter === '' || breachYear === parseInt(breachDateFilter)) &&
      startsWithLetter
    );
  });

  const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="flex justify-center">
            <div className="flex justify-center w-1/2 flex-wrap">
              {Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).map(letter => (
                <button
                  key={letter}
                  className={`px-3 py-1 my-2 mx-2 border rounded-md text-sm ${alphabetFilter === letter ? 'bg-blue-500 text-white' : 'bg-white text-gray-900'}`}
                  onClick={() => setAlphabetFilter(letter)}
                >
                  {letter}
                </button>
              ))}
              <button
                className={`px-3 py-1 my-2 mx-2 border rounded-md text-sm ${alphabetFilter === '' ? 'bg-blue-500 text-white' : 'bg-white text-gray-900'}`}
                onClick={() => setAlphabetFilter('')}
              >
                All
              </button>
            </div>
          </div>
          <div className="inline-block min-w-full min-h-screen py-2 align-middle sm:px-6 lg:px-8">
            {gridData.length > 0 && <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    <div className="flex items-center">
                      VendorName
                      <div className="ml-2">
                        <select
                          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md"
                          value={vendorNameFilter}
                          onChange={(e) => setVendorNameFilter(e.target.value)}
                        >
                          <option value="">All</option>
                          {Array.from(new Set(gridData.map(data => data.vendorName))).map((vendorName) => (
                            <option key={vendorName} value={vendorName}>{vendorName}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    <div className="flex items-center">
                      Breach Date
                      <select
                        className="ml-2 bg-white border border-gray-300 text-gray-900 text-sm rounded-md"
                        value={breachDateFilter}
                        onChange={(e) => setBreachDateFilter(e.target.value)}
                      >
                        <option value="">All</option>
                        {Array.from(new Set(gridData.map(data => new Date(data.breachDate).getFullYear()))).map((year) => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Date Added
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Compromised Accounts
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Compromised Data
                  </th>
                  <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    <div className="flex items-center">
                      Risk Score
                      <div className="ml-2">
                        <select
                          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md"
                          value={riskScoreFilter}
                          onChange={(e) => setRiskScoreFilter(e.target.value)}
                        >
                          <option value="">All</option>
                          {Array.from(new Set(gridData.map(data => data.riskScore))).map((RiskScore) => (
                            <option key={RiskScore} value={RiskScore}>{RiskScore}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {paginatedData.length > 0 && paginatedData.map((data) => {
                  const breachDate = new Date(data.breachDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
                  const dateAdded = new Date(data.dateAdded).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
                  return (
                    <tr key={data.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        {data.vendorName}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{breachDate}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{dateAdded}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{data.compromisedAccounts}</td>
                      <td className="whitespace-pre-line px-3 py-4 text-sm text-gray-500">
                        {data.compromisedData.join('\n')}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{data.riskScore}</td>
                    </tr>
                  );
                })}
                {!paginatedData.length > 0 && 
                  <tr>
                    <td/>
                    <td/>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">No records found</td>
                    <td/>
                    <td/>
                    <td/>
                  </tr>}
              </tbody>
            </table>}
            {!gridData.length > 0 &&
              <div className='flex justify-center items-center min-h-screen' role="status">
                <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            }
            {gridData.length > 0 && <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 mt-4 mb-10">
              <div className="-mt-px flex w-0 flex-1">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  disabled={currentPage === 1}
                >
                  <ArrowLongLeftIcon aria-hidden="true" className="mr-3 h-5 w-5 text-gray-400" />
                  Previous
                </button>
              </div>
              <div className="hidden md:-mt-px md:flex">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={`inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium ${currentPage === index + 1 ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <div className="-mt-px flex w-0 flex-1 justify-end">
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  disabled={currentPage === totalPages}
                >
                  Next
                  <ArrowLongRightIcon aria-hidden="true" className="ml-3 h-5 w-5 text-gray-400" />
                </button>
              </div>
            </nav>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorGrid;
