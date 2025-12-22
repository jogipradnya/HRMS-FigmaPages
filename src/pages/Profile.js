import React from "react"; 
import profileimage from "../assets/profile-image.png";
import mail from "../assets/mail.png";
import phone from "../assets/Phone call.png";
import camera from "../assets/Vector.svg";
import people from "../assets/people 1.png";

const Profile = () => {
  return (
    <div className="min-h-screen bg-[#F6FAFF] px-6 py-4">
      <div className="max-w-[1300px] mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            👤 Greetings, Sophie
          </h2>
          <div className="flex items-center gap-3">
            <button className="bg-red-400 text-white px-4 py-1.5 rounded-full text-sm">
              Logout
            </button>
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow">
              🔔
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">

          {/* LEFT CONTENT */}
          <div className="space-y-6">

            {/* PROFILE CARD */}
            <div className="bg-[#EAF6FF] rounded-2xl p-6 flex flex-col lg:flex-row gap-6">

              {/* PROFILE INFO */}
              <div className="flex gap-5 flex-1 items-center lg:items-start">
                <div className="relative flex-shrink-0">
                  <img
                    src={profileimage}
                    className="w-20 h-20 rounded-full object-cover"
                    alt="profile"
                  />
                  <span className="absolute bottom-1 right-1 bg-white p-1 rounded-full shadow">
                    <img src={camera} className="w-4 h-4" alt="camera"/>
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold">Sophie Smith</h3>
                  <p className="text-sm text-gray-500">HR Manager</p>

                  <div className="mt-2 space-y-1 text-sm">
                    <p className="flex items-center gap-2">
                      <img src={mail} className="w-4" alt="mail"/>
                      sophie99@xyz.com
                    </p>
                    <p className="flex items-center gap-2">
                      <img src={phone} className="w-4" alt="phone"/>
                      +1 7777121234
                    </p>
                  </div>

                  <button className="mt-3 bg-[#3DA5FF] text-white px-4 py-1.5 rounded-md text-sm">
                    Edit Profile
                  </button>

                  <div className="mt-3">
                    <p className="text-xs text-gray-500">Profile Completion 70%</p>
                    <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                      <div className="bg-[#3DA5FF] h-2 rounded-full w-[70%]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* START WHERE LEFT */}
              <div className="bg-[#D8EEFF] rounded-xl p-4 w-full lg:w-[230px] flex flex-col justify-between">
                <div>
                  <p className="text-sm font-semibold">Start where you left ✨</p>
                  <p className="text-xs text-gray-600 mt-1">Complete the pending tasks</p>

                  <div className="flex items-center gap-2 mt-4">
                    <img src={people} className="w-8" alt="team"/>
                    <span className="text-xs">+7 members</span>
                  </div>
                </div>

                <button className="mt-4 bg-[#3DA5FF] text-white text-sm py-2 rounded-md">
                  Jump to the task
                </button>
              </div>
            </div>

            {/* WORK OVERFLOW */}
            <div>
              <h3 className="font-semibold mb-3">Work Overflow</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  ["Active goals", "3"],
                  ["Progress", "40%"],
                  ["Completed", "6"],
                  ["Due Tasks", "2"]
                ].map(([label, value], i) => (
                  <div
                    key={i}
                    className="bg-[#EAF6FF] rounded-xl p-4 flex justify-between items-center"
                  >
                    <div>
                      <p className="text-sm">{label}</p>
                      <p className="font-semibold">{value}</p>
                    </div>
                    ❯
                  </div>
                ))}
              </div>
            </div>

            {/* COMPLETE DUE TASKS */}
            <div>
              <h3 className="font-semibold mb-3">Complete Due Tasks</h3>

              {[ 
                { title: "Schedule management level meeting for 2PM tomorrow", members: "+7 members", percent: "10%" },
                { title: "Upload report for the month October", members: "+2 members", percent: "50%" }
              ].map((task, i) => (
                <div
                  key={i}
                  className="bg-[#EAF6FF] rounded-xl p-4 mb-3 flex justify-between items-center"
                >
                  <div>
                    <p className="text-sm font-medium">
                      {i + 1}. {task.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <img src={people} className="w-6" alt="team"/>
                      <span className="text-xs">{task.members}</span>
                    </div>
                  </div>

                  <div className="w-10 h-10 rounded-full border-4 border-purple-400 flex items-center justify-center text-xs font-semibold">
                    {task.percent}
                  </div>
                </div>
              ))}
            </div>

            {/* QUICK ACTIONS */}
            <div>
              <h3 className="font-semibold mb-3">Quick actions</h3>
              <div className="bg-[#EAF6FF] rounded-xl p-4 grid grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2 flex flex-col justify-start">
                  <li>📄 Latest Feeds</li>
                  <li>⬆ Latest Uploads</li>
                  <li>🌐 Languages</li>
                  <li>🖥 Display</li>
                </ul>
                <ul className="space-y-2 flex flex-col justify-start">
                  <li>📍 Location</li>
                  <li>🗑 Recently deleted</li>
                  <li>🕒 Clear History</li>
                  <li>📁 Files & Documents</li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="space-y-4">

            {/* SCORE */}
            <div className="bg-[#EAF6FF] rounded-2xl p-4 text-center">
              <div className="w-24 h-24 mx-auto rounded-full border-[10px] border-purple-500 flex items-center justify-center font-semibold">
                80%
              </div>
              <p className="mt-2 font-medium">Score</p>
              <span className="inline-block mt-2 bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
                Fantastic job
              </span>
            </div>

            {/* STATISTICS */}
            <div className="bg-[#EAF6FF] rounded-2xl p-4 space-y-3">
              <h4 className="font-semibold">Statistics</h4>
              {["Performance", "Success", "Innovation"].map((item) => (
                <div key={item}>
                  <p className="text-sm">{item}</p>
                  <div className="w-full h-2 bg-gray-200 rounded-full mt-1">
                    <div className="w-[60%] h-2 bg-blue-400 rounded-full" />
                  </div>
                </div>
              ))}
            </div>

            {/* SETTINGS */}
            <div className="bg-[#EAF6FF] rounded-2xl p-4 space-y-2 text-sm">
              <p>👍 Appreciations</p>
              <p>⭐ My Referrals</p>
              <p>⚙ Settings</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
