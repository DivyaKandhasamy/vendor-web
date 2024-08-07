import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid';

const VendorGrid = () => {
  const [gridData, setGridData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchData(page) {
      try {
        const response = await axios.get(`http://localhost:5000/vendors/?page=${page}&limit=10`);
        setGridData(response.data.data);
        setTotalPages(response.data.totalPages);
        setCurrentPage(response.data.currentPage);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    
    <div className="px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    VendorName
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Breach Date
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Date Added
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Compromised Accounts
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 whitespace-nowrap">
                    Compromised Data
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    RiskScore
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {gridData.map((data) => {
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
              </tbody>
            </table>
            <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 mt-4 mb-10">
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
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorGrid;
