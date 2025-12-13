import React from "react";
import cautionIcon from "../assets/caution.png";
import arrowIcon from "../assets/arrowUp.png";
import calendarIcon from "../assets/calender2.png";
import checkIcon from "../assets/checkmark.png";
import thumbIcon from "../assets/thumbUp.png";
import personIcon from "../assets/person.png";
import gearIcon from "../assets/gear.png";

const Notification = () => {
  const [filter, setFilter] = React.useState("All");

  return (
    <div className="w-full min-h-screen bg-gray-100 p-4 md:p-8">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">My Notifications</h1>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-xl shadow">
          View All
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 flex-wrap mb-6">
        {["All", "Unread", "Recognition", "Events", "Approvals"].map((btn) => (
          <button
            key={btn}
            onClick={() => setFilter(btn)}
            className={`px-4 py-1 rounded-xl shadow 
            ${filter === btn ? "bg-blue-500 text-white" : "bg-white"}`}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Recognition Section */}
      {(filter === "All" || filter === "Recognition") && (
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Recognition (1)</h2>
        <div className="bg-white p-4 rounded-2xl shadow flex items-start gap-3">
          <div className="w-14 h-14 bg-[#C7F3FF] rounded-full flex items-center justify-center flex-shrink-0">
            <img src={thumbIcon} alt="like" className="w-8 h-8 object-contain" />
          </div>
          <div>
            <p className="font-medium">Pavan Recognized You for Outstanding Work</p>
            <p className="text-sm text-gray-500">1 hour ago</p>
          </div>
        </div>
      </div>
      )}

      {/* Grid Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Announcements */}
        {(filter === "All" || filter === "Events") && (
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="font-semibold mb-3">Announcements (1)</h2>
          <div className="p-4 bg-gray-50 border rounded-xl flex gap-3 items-start">
            <div className="w-14 h-14 bg-[#C7F3FF] rounded-full flex items-center justify-center flex-shrink-0">
              <img src={calendarIcon} alt="calendar" className="w-8 h-8 object-contain" />
            </div>
            <div>
              <p className="font-medium">Company Town Hall Meeting</p>
              <p className="text-sm text-gray-500">1 hour ago</p>
            </div>
          </div>
        </div>
        )}

        {/* Approvals */}
        {(filter === "All" || filter === "Approvals") && (
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="font-semibold mb-3">Approvals (1)</h2>
          <div className="p-4 bg-gray-50 border rounded-xl flex gap-3 items-start">
            <div className="w-14 h-14 bg-[#C7F3FF] rounded-full flex items-center justify-center flex-shrink-0">
              <img src={checkIcon} alt="check" className="w-8 h-8 object-contain" />
            </div>
            <div>
              <p className="font-medium">Manager Approved Your Leave</p>
              <p className="text-sm text-gray-500">Yesterday</p>
            </div>
          </div>
        </div>
        )}

        {/* Tasks */}
        {(filter === "All" || filter === "Unread") && (
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="font-semibold mb-3">Tasks / Urgent (1)</h2>
          <div className="p-4 bg-gray-50 border rounded-xl flex gap-3 items-start">
            <div className="w-14 h-14 bg-[#C7F3FF] rounded-full flex items-center justify-center flex-shrink-0">
              <img src={cautionIcon} alt="warning" className="w-8 h-8 object-contain" />
            </div>
            <div>
              <p className="font-medium text-red-500">
                Action Required: Complete Your Work ASAP then Push into GitHub [Urgent]
              </p>
              <p className="text-sm text-gray-500">Dec 1</p>
            </div>
          </div>
        </div>
        )}

        {/* Referrals */}
        {(filter === "All" || filter === "Events") && (
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="font-semibold mb-3">Referrals / Hiring (1)</h2>
          <div className="p-4 bg-gray-50 border rounded-xl flex gap-3 items-start">
            <div className="w-14 h-14 bg-[#C7F3FF] rounded-full flex items-center justify-center flex-shrink-0">
              <img src={personIcon} alt="people" className="w-6 h-6 object-contain" />
            </div>
            <div>
              <p className="font-medium">
                Your Referral for Software Engineer Moved to Interview Stage
              </p>
              <p className="text-sm text-gray-500">Wed, Nov 29</p>
            </div>
          </div>
        </div>
        )}

        {/* System Alerts */}
        {(filter === "All" || filter === "Events") && (
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="font-semibold mb-3">System Alerts</h2>

          <div className="space-y-3">
            <div className="p-4 bg-gray-50 border rounded-xl flex gap-3 items-start">
              <div className="w-14 h-14 bg-[#C7F3FF] rounded-full flex items-center justify-center flex-shrink-0">
                <img src={gearIcon} alt="setting" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <p className="font-medium">New Update Available</p>
                <p className="text-sm text-gray-500">Wed, Nov 30</p>
              </div>
            </div>

            <div className="p-4 bg-gray-50 border rounded-xl flex gap-3 items-start">
              <div className="w-14 h-14 bg-[#C7F3FF] rounded-full flex items-center justify-center flex-shrink-0">
                <img src={arrowIcon} alt="up" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <p className="font-medium">New Update Available</p>
                <p className="text-sm text-gray-500">Wed, Nov 25</p>
              </div>
            </div>

          </div>
        </div>
        )}

      </div>
    </div>
  );
};

export default Notification;
