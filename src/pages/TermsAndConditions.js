import React from 'react';

import infoIcon from '../assets/info.png';
import eligibilityIcon from '../assets/eligibility.png';
import calendarIcon from '../assets/calendar.png';
import paymentIcon from '../assets/payment.png';
import certificateIcon from '../assets/certificate.png';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      
      {/* Header */}
      <header className="w-full max-w-5xl mb-2 px-2">
        <h1 className="text-3xl font-bold text-gray-900 leading-tight">Terms & conditions</h1>
        <p className="text-sm text-[#A0A0A0]">Updated December 2025</p>
      </header>

      {/* Main Card Container */}
      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-sm p-6 md:p-8 border border-gray-100">
        
        <div className="flex flex-col gap-4">
          
          {/* Section 1 */}
          <div className="flex items-center p-4 rounded-xl border border-gray-100 bg-[#F9FBFC] w-full">
            <div className="w-14 h-14 bg-[#0EA5E9] rounded-full flex items-center justify-center flex-shrink-0">
              <img src={infoIcon} alt="Acceptance" className="w-12 h-12 object-contain" />
            </div>
            <div className="ml-6 flex-1 space-y-2">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-3 bg-gray-100 rounded w-[95%]"></div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex items-center p-4 rounded-xl border border-gray-100 bg-[#F9FBFC] w-full">
            <div className="w-14 h-14 bg-[#0EA5E9] rounded-full flex items-center justify-center flex-shrink-0">
              <img src={eligibilityIcon} alt="Eligibility" className="w-12 h-12 object-contain" />
            </div>
            <div className="ml-6 flex-1 space-y-2">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-3 bg-gray-100 rounded w-[95%]"></div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex items-center p-4 rounded-xl border border-gray-100 bg-[#F9FBFC] w-full">
            <div className="w-14 h-14 bg-[#0EA5E9] rounded-full flex items-center justify-center flex-shrink-0">
              <img src={calendarIcon} alt="Duration" className="w-12 h-12 object-contain" />
            </div>
            <div className="ml-6 flex-1 space-y-2">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-3 bg-gray-100 rounded w-[95%]"></div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="flex items-center p-4 rounded-xl border-2 border-[#3B82F6] bg-[#F0F7FF] w-full">
            <div className="w-14 h-14 bg-[#0EA5E9] rounded-full flex items-center justify-center flex-shrink-0">
              <img src={paymentIcon} alt="Payment" className="w-12 h-12 object-contain" />
            </div>
            <div className="ml-6 flex-1 space-y-2">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-3 bg-gray-100 rounded w-[95%]"></div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="flex items-center p-4 rounded-xl border border-gray-100 bg-[#F9FBFC] w-full">
            <div className="w-14 h-14 bg-[#0EA5E9] rounded-full flex items-center justify-center flex-shrink-0">
              <img src={certificateIcon} alt="Certificate" className="w-12 h-12 object-contain" />
            </div>
            <div className="ml-6 flex-1 space-y-2">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-3 bg-gray-100 rounded w-[95%]"></div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <footer className="mt-10 flex flex-col md:flex-row md:items-center justify-between gap-6 px-">
          <label className="flex items-center cursor-pointer">
            <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-blue-600" />
            <span className="ml-3 text-sm font-medium text-gray-500 ">
              I Confirm that I have read and accept the terms and conditions
            </span>
          </label>

          <div className="flex sm:w-auto gap-2 flex-col sm:flex-row ">
            <button className="w-full sm:w-auto  px-8 py-2.5 mx-auto bg-[#AAB8C6] text-white rounded-full font-bold">
              Cancel
            </button>
            <button className=" w-full sm:w-auto  px-8 py-2.5 mx-auto bg-[#3B82F6] text-white rounded-full font-bold shadow-md">
              Accept
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default TermsAndConditions;