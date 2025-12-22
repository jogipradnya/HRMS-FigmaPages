import React from "react";
import people from "../assets/people 1.png";
import mail from "../assets/mail.png";
import phonecall from "../assets/Phone call.png";
import camera from "../assets/Vector.svg";
import profileimage from "../assets/profile-image.png";

const Profile = () => {
  return (
    <div className="w-full min-h-screen px-4 md:px-6">
      <div className="w-full mx-auto">

        {/* Greeting */}
        <h2 className="text-2xl font-semibold mb-4">👋 Greetings, Sophie</h2>

        {/* MAIN LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-6">

          {/* ================= LEFT SIDE ================= */}
          <div className="flex-1 space-y-8">

            {/* PROFILE SECTION */}
            <section className="bg-[#E5F4FF] p-6 rounded-xl shadow-md">
              <div className="flex flex-col lg:flex-row gap-6 items-start">

                {/* IMAGE + INFO */}
                <div className="flex flex-col sm:flex-row gap-6 flex-1">
                  <div className="relative">
                    <img
                      src={profileimage}
                      alt="profile"
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover"
                    />
                    <span className="absolute bottom-1 right-1 bg-gray-300 p-1 rounded-full shadow-md">
                      <img src={camera} alt="camera" className="w-4 h-4" />
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">Sophie Smith</h3>
                    <p className="text-gray-500 text-sm">HR Manager</p>

                    <div className="mt-3 text-sm text-gray-700 space-y-1">
                      <p className="flex items-center gap-2">
                        <img src={mail} alt="mail" className="w-4 h-4" />
                        sophie99@xyz.com
                      </p>
                      <p className="flex items-center gap-2">
                        <img src={phonecall} alt="phone" className="w-4 h-4" />
                        +1 7777121234
                      </p>
                    </div>

                    <button className="mt-3 bg-[#35A5F5] text-white px-4 py-2 rounded-md text-sm">
                      Edit Profile
                    </button>

                    <p className="mt-2 text-sm text-gray-600">
                      Profile Completion 70%
                    </p>

                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-[#35A5F5] h-2 rounded-full w-[70%]" />
                    </div>
                  </div>
                </div>

                {/* SMALL CARD */}
                <div className="bg-gradient-to-b from-[#DCEFFD] to-[#B6D9F3] p-3 rounded-lg w-full lg:w-[180px]">
                  <p className="text-xs font-medium">
                    Start where you left –
                  </p>
                  <p className="text-xs font-medium">
                    complete your pending tasks
                  </p>

                  <div className="flex items-center gap-2 mt-6">
                    <img src={people} alt="" className="w-10 h-4" />
                    <p className="text-xs">+7 members involved</p>
                  </div>

                  <button className="mt-3 bg-[#35A5F5] text-white px-3 py-1.5 rounded-md text-xs w-full">
                    Jump to the task
                  </button>
                </div>

              </div>
            </section>

            {/* WORK OVERFLOW */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Work Overflow</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { label: "Active goals", value: "3" },
                  { label: "Progress", value: "40%" },
                  { label: "Completed", value: "6" },
                  { label: "Due Tasks", value: "2" }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#e6f0fb] p-4 rounded-lg flex justify-between items-center"
                  >
                    <div>
                      <p className="text-sm font-medium">{item.label}</p>
                      <p className="text-xl font-bold mt-1">{item.value}</p>
                    </div>
                    <span className="text-lg font-semibold">❯</span>
                  </div>
                ))}
              </div>
            </div>

            {/* DUE TASKS */}
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Complete Due Tasks
              </h3>

              <div className="space-y-3">
                {[
                  { title: "Schedule management level meeting", members: "+7 members", percent: "10%" },
                  { title: "Upload report for the month October", members: "+2 members", percent: "50%" }
                ].map((task, index) => (
                  <div
                    key={index}
                    className="bg-[#e6f0fb] p-4 rounded-lg flex justify-between items-center"
                  >
                    <div>
                      <p className="font-semibold">{index + 1}. {task.title}</p>
                      <p className="text-sm font-medium mt-1">{task.members}</p>
                    </div>

                    <div className="w-11 h-11 rounded-full bg-[#6d5dfc] flex items-center justify-center text-white text-xs font-semibold">
                      {task.percent}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="w-full lg:w-[280px] flex-shrink-0">
            <div className="bg-[#E5F4FF] rounded-2xl p-5 space-y-5 lg:sticky lg:top-6">

              <div className="bg-white rounded-xl p-4 shadow-sm">
                <p className="text-sm text-gray-500">Performance Score</p>
                <p className="text-2xl font-bold mt-1">82%</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                  <div className="bg-[#35A5F5] h-2 rounded-full w-[82%]" />
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm">
                <p className="text-sm text-gray-500">Attendance</p>
                <p className="text-xl font-semibold mt-1">22 / 25 Days</p>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm">
                <p className="text-sm text-gray-500">Notifications</p>
                <ul className="mt-2 space-y-2 text-sm">
                  <li>• Team meeting at 2:00 PM</li>
                  <li>• Report pending approval</li>
                  <li>• New task assigned</li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;

