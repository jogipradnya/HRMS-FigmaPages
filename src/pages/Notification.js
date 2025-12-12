import React from "react";

const Notification = () => {
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
        <button className="px-4 py-1 bg-blue-500 text-white rounded-xl">All</button>
        <button className="px-4 py-1 bg-white shadow rounded-xl">Unread</button>
        <button className="px-4 py-1 bg-white shadow rounded-xl">Recognition</button>
        <button className="px-4 py-1 bg-white shadow rounded-xl">Events</button>
        <button className="px-4 py-1 bg-white shadow rounded-xl">Approvals</button>
      </div>

      {/* Notifications Section */}
      <div className="space-y-6">
        {/* Recognition */}
        <div>
          <h2 className="text-lg font-medium mb-3">Recognition (1)</h2>
          <div className="bg-white p-4 rounded-xl shadow flex flex-col gap-1">
            <p className="font-semibold">Pavan Recognized You for Outstanding Work</p>
            <span className="text-sm text-gray-500">1 hour ago</span>
          </div>
        </div>

        {/* Announcements */}
        <div>
          <h2 className="text-lg font-medium mb-3">Announcements (1)</h2>
          <div className="bg-white p-4 rounded-xl shadow flex flex-col gap-1">
            <p className="font-semibold">Company Town Hall Meeting</p>
            <span className="text-sm text-gray-500">1 hour ago</span>
          </div>
        </div>

        {/* Tasks / Urgent */}
        <div>
          <h2 className="text-lg font-medium mb-3">Tasks / Urgent (1)</h2>
          <div className="bg-white p-4 rounded-xl shadow flex flex-col gap-1">
            <p className="font-semibold text-red-500">
              Action Required: Complete Your Work As Early As Possible then Push into GitHub [Urgent]
            </p>
            <span className="text-sm text-gray-500">Dec 1</span>
          </div>
        </div>

        {/* Approvals */}
        <div>
          <h2 className="text-lg font-medium mb-3">Approvals (1)</h2>
          <div className="bg-white p-4 rounded-xl shadow flex flex-col gap-1">
            <p className="font-semibold">Manager Approved Your Leave</p>
            <span className="text-sm text-gray-500">Yesterday</span>
          </div>
        </div>

        {/* Referrals */}
        <div>
          <h2 className="text-lg font-medium mb-3">Referrals / Hiring (1)</h2>
          <div className="bg-white p-4 rounded-xl shadow flex flex-col gap-1">
            <p className="font-semibold">
              Your Referral for Software Engineer Moved to Interview Stage
            </p>
            <span className="text-sm text-gray-500">Wed, Nov 29</span>
          </div>
        </div>

        {/* System Alerts */}
        <div>
          <h2 className="text-lg font-medium mb-3">System Alerts</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl shadow flex flex-col gap-1">
              <p className="font-semibold">New Update Available</p>
              <span className="text-sm text-gray-500">Wed, Nov 30</span>
            </div>

            <div className="bg-white p-4 rounded-xl shadow flex flex-col gap-1">
              <p className="font-semibold">New Update Available</p>
              <span className="text-sm text-gray-500">Wed, Nov 25</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;

