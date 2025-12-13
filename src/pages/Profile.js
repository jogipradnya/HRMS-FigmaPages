import React from "react";
import people from "../assets/people 1.png";
import mail from "../assets/mail.png";
import phonecall from "../assets/Phone call.png";
import camera from "../assets/Vector.svg";
import profileimage from "../assets/profile-image.png";

const Profile = () => {
  return (
    <div className="w-full min-h-screen md:px-6 ">
      <div className="w-full mx-auto">

        {/* Greeting */}
        <h2 className="text-2xl font-semibold mb-2">👋 Greetings, Sophie</h2>

        {/* MAIN LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-6">

          {/* LEFT SIDE CONTENT */}
          <div className="flex-1 space-y-9">

            {/* ---------------- PROFILE SECTION ---------------- */}
            <section className="bg-[#E5F4FF] p-6 rounded-xl shadow-md">
              <div className="flex flex-col lg:flex-row gap-6 items-start">
                
                {/* IMAGE + ICON + INFO */}
                <div className="flex flex-col sm:flex-row gap-6 flex-1">
                  <div className="relative">
                    <img
                      src={profileimage}
                      alt="profile"
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover"
                    />

                    <span className="absolute sm:bottom-[88px] sm:right-1 bottom-1 bg-gray-300 p-1 rounded-full shadow-md">
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
                        <img src={phonecall} alt="phone" className="w-3.5 h-3.5" />
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
                      <div className="bg-[#35A5F5] h-2 rounded-full w-[70%]"></div>
                    </div>
                  </div>
                </div>

                {/* RIGHT SMALL CARD */}
                <div className=" bg-[linear-gradient(180deg,#DCEFFD_0%,#CBE5F8_17%,#C0DFF5_36%,#B6D9F3_81%)] p-2 rounded-lg  lg:w-[170px] w-full">
                  <p className="text-[12px] font-medium mb-1">Start where you left –</p>
                  <p className="text-[12px] font-medium">complete your pending tasks</p>

                  <div className="flex items-center mt-7 lg:justify-center">
                    <img src={people} alt="" className="w-10 h-4" />
                    <p className="text-xs"> +7 members involved</p>
                  </div>

                  <button className="mt-3 bg-[#35A5F5] text-white px-4 py-1.5 rounded-md text-[12px] w-full">
                    Jump to the task
                  </button>
                </div>

              </div>
            </section>

            {/* ---------------- WORK OVERFLOW ---------------- */}
            <section className="flex flex-row gap-8 justify-between">
             <div className="bg-[#E5F4FF] p-4  rounded-xl w-full min-h-20"></div>
             <div className="bg-[#E5F4FF] p-4  rounded-xl w-full"></div>
             <div className="bg-[#E5F4FF] p-4  rounded-xl  w-full"></div>
             <div className="bg-[#E5F4FF] p-4 rounded-xl w-full"></div>
             
            </section>

            {/* ---------------- DUE TASKS ---------------- */}
            <section className="flex flex-col gap-2">
             <div className="bg-[#E5F4FF] p-4  rounded-xl w-full min-h-14"></div>
              <div className="bg-[#E5F4FF] p-4  rounded w-full  min-h-14"></div>
            </section>

            {/* ---------------- QUICK ACTIONS ---------------- */}
            <section className="p-4 bg-[#E5F4FF] rounded-xl shadow-md min-h-44">
              
            </section>

          </div>

          {/* ---------------- RIGHT SIDE PANEL ---------------- */}
          

            {/* SCORE CARD */}
            <div className="p-3 bg-[#E5F4FF] rounded-xl shadow-md text-center w-full lg:w-[200px] space-y-6">
              
            </div>

           

          

        </div>
      </div>
    </div>
  );
};

export default Profile;
