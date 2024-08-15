
import { Link } from "react-router-dom";
export default function Grid(props) {
  console.log("grid data----->", props.gridData)
  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block w-full py-2 align-middle sm:px-6 lg:px-8">
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
                {props.gridData.map((data) => {
                  const breachDate = new Date(data.breachDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
                  const dateAdded = new Date(data.dateAdded).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
                  return (
                    <tr key={data.companyId}>
                      <td className="text-center md:text-left">
                      <Link to={`/vendors/details/${data.companyId}`} className='font-semibold text-link underline'>
                        {data.vendorName}
                      </Link>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{breachDate}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{dateAdded}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{data.compromisedAccounts}</td>
                      <td className="whitespace-pre-line px-3 py-4 text-sm text-gray-500"> {/* Apply block and whitespace-pre-line here */}
                        {data.compromisedData.join('\n')}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{data.riskScore}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  )
}
