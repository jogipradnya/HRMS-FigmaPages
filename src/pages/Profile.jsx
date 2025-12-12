import React from "react";
import people from "../assets/people 1.png";
import mail from "../assets/mail.png";
import phonecall from "../assets/Phone call.png";
import camera from "../assets/Vector.svg";

const Profile = () => {
  return (
    <div>
      <header></header>
      {/* Main Content Area */}
      <div>
        {/* left part */}
        <div>
          {/*profle section */}
          <section className="bg-[#E5F4FF] backdrop-blur-md p-6 rounded-xl shadow-md">
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              <div className="flex flex-col sm:flex-row gap-6 flex-1">
                <div className="relative">
                  <img
                    src="https://i.pravatar.cc/120"
                    alt="profile"
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover shrink-0"
                  />
                  <span className="absolute sm:bottom-[88px]  sm:right-1 bottom-1 bg-gray-300 p-1 rounded-full shadow-md">
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
                      <img
                        src={phonecall}
                        alt="phone"
                        className="w-3.5 h-3.5"
                      />
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

              <div className=" bg-[linear-gradient(180deg,#DCEFFD_0%,#CBE5F8_17%,#C0DFF5_36%,#B6D9F3_81%)] p-6 rounded-lg lg:text-center border border-blue-200 lg:w-64 w-full">
                <p className="text-md  font-medium mb-2">
                  Start where you left –
                </p>
                <p className="text-sm font-medium">
                  complete your pending tasks
                </p>

                <div className="flex flex-row items-center mt-7 lg:place-content-center">
                  <img src={people} alt="" className=" w-10 h-4" />
                  <p className="text-xs"> +7 members involved</p>
                </div>

                <button className="mt-3 bg-[#35A5F5] text-white px-4 py-1.5 rounded-md text-sm w-full">
                  Jump to the task
                </button>
              </div>
            </div>
          </section>

          {/*work overflow section */}
          <section></section>
          {/* due task section */}
          <section></section>
          {/* quick action task */}
          <section></section>
        </div>
        {/* right part */}
        <div></div>
      </div>
    </div>
  );
};

export default Profile;
