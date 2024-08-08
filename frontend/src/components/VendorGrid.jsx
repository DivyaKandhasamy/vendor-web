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
  }, [vendorNameFilter, breachDateFilter, alphabetFilter]);

  useEffect(() => {
    // Update the total number of pages whenever the data or filters change
    const filtered = gridData.filter(data => {
      const breachYear = new Date(data.breachDate).getFullYear();
      const startsWithLetter = alphabetFilter === '' || data.vendorName.toUpperCase().startsWith(alphabetFilter);

      return (
        (vendorNameFilter === '' || data.vendorName === vendorNameFilter) &&
        (breachDateFilter === '' || breachYear === parseInt(breachDateFilter)) &&
        startsWithLetter
      );
    });
    setTotalPages(Math.ceil(filtered.length / itemsPerPage));
  }, [gridData, vendorNameFilter, breachDateFilter, alphabetFilter]);

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
      (breachDateFilter === '' || breachYear === parseInt(breachDateFilter)) &&
      startsWithLetter
    );
  });

  const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
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
                      <div className="ml-4">
                        <div className="flex flex-wrap">
                          {Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).map(letter => (
                            <button
                              key={letter}
                              className={`px-2 py-1 border rounded-md text-sm ${alphabetFilter === letter ? 'bg-blue-500 text-white' : 'bg-white text-gray-900'}`}
                              onClick={() => setAlphabetFilter(letter)}
                            >
                              {letter}
                            </button>
                          ))}
                          <button
                            className={`px-2 py-1 border rounded-md text-sm ${alphabetFilter === '' ? 'bg-blue-500 text-white' : 'bg-white text-gray-900'}`}
                            onClick={() => setAlphabetFilter('')}
                          >
                            All
                          </button>
                        </div>
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
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    RiskScore
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {paginatedData.map((data) => {
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
