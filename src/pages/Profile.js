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
           {/* Work Overflow */}
<div style={{ marginTop: 50 }}>
  <h3 style={{ margin: '8px 0 14px', fontSize: 18, fontWeight: 600 }}>
    Work Overflow
  </h3>

  <div style={{ display: 'flex', gap: 12 }}>
    {[
      { label: 'Active goals', value: '3' },
      { label: 'Progress', value: '40%' },
      { label: 'Completed', value: '6' },
      { label: 'Due Tasks', value: '2' }
    ].map((item, index) => (
      <div
        key={index}
        style={{
          flex: 1,
          background: '#e6f0fb',
          padding: '20px 18px',
          borderRadius: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* Left Content */}
        <div>
          <div style={{ fontSize: 18, fontWeight: 500, color: '#111827' }}>
            {item.label}
          </div>
          <div style={{ marginTop: 8, fontSize: 20, fontWeight: 700 }}>
            {item.value}
          </div>
        </div>

        {/* Divider + Arrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div
            style={{
              width: 3,
              height: 70,
              backgroundColor: '#cbd5e1'
            }}
          />
          <div
            style={{
              fontSize: 18,
              color: '#475569',
              fontWeight: 600
            }}
          >
            ❯
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

            {/* ---------------- DUE TASKS ---------------- */}
            <div style={{ marginTop: 20 }}>
            <h3 style={{ margin: '6px 0 12px', fontSize: 18, fontWeight: 600 }}>Complete Due Tasks</h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ background: '#e6f0fb', padding: 18, borderRadius: 8, boxShadow: '0 4px 8px rgba(2,6,23,0.04)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 600 }}>1. Schedule management level meeting for 2PM tomorrow</div>
                  <div style={{ marginTop: 8, color: '#121314ff', fontSize: 13, fontWeight: 900 }}>+7 members</div>
                </div>
                <div
  style={{
    width: 44,
    height: 44,
    borderRadius: '50%',
    background: 'conic-gradient(#6d5dfc 10%, #e1cafaff 0)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}
>
  <div
    style={{
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: '#e6f0fb',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 12,
      fontWeight: 600
    }}
  >
    10%
  </div>
</div>

              </div>

              <div style={{ background: '#e6f0fb', padding: 18, borderRadius: 8, boxShadow: '0 4px 8px rgba(2,6,23,0.04)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 600 }}>2. Upload report for the month October</div>
                  <div style={{ marginTop: 8, color: '#121314ff', fontSize: 13, fontWeight: 900}}>+2 members</div>
                </div>
                <div
  style={{
    width: 44,
    height: 44,
    borderRadius: '50%',
    background: 'conic-gradient(#6d5dfc 50%, #e9d8fd 0)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}
>
  <div
    style={{
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: '#e6f0fb',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 12,
      fontWeight: 600
    }}
  >
    50%
  </div>
</div>

              </div>
            </div>
          </div>

            {/* ---------------- QUICK ACTIONS ---------------- */}
            <div style={{ marginTop: 20 }}>
  <h3 style={{ margin: '6px 0 12px', fontSize: 18, fontWeight: 600 }}>
    Quick actions
  </h3>

  <div
    style={{
      background: '#e6f0fb',
      padding: 22,
      borderRadius: 14,
      position: 'relative'
    }}
  >
    {/* Center separator */}
    <div
      style={{
        position: 'absolute',
        top: 16,
        bottom: 16,
        left: '50%',
        width: 1,
        background: '#cbd5e1'
      }}
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        rowGap: 18,
        columnGap: 40
      }}
    >
      {/* Latest Feeds */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.8">
          <rect x="4" y="4" width="16" height="16" />
          <path d="M8 9h8M8 13h6" />
        </svg>
        <span style={{ fontSize: 16, fontWeight: 600 }}>Latest Feeds</span>
      </div>

      {/* Location */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.8">
          <path d="M12 21s6-5.3 6-10a6 6 0 10-12 0c0 4.7 6 10 6 10z" />
          <circle cx="12" cy="11" r="2" />
        </svg>
        <span style={{ fontSize: 16, fontWeight: 600 }}>Location</span>
      </div>

      {/* Latest Uploads */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.8">
          <path d="M12 16V4" />
          <path d="M8 8l4-4 4 4" />
          <path d="M4 20h16" />
        </svg>
        <span style={{ fontSize: 16, fontWeight: 600 }}>Latest Uploads</span>
      </div>

      {/* Recently deleted */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.8">
          <path d="M3 6h18" />
          <path d="M8 6v14h8V6" />
          <path d="M10 10v6M14 10v6" />
        </svg>
        <span style={{ fontSize: 16, fontWeight: 600 }}>Recently deleted</span>
      </div>

      {/* Languages */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.8">
          <path d="M4 5h8" />
          <path d="M8 5v14" />
          <path d="M4 19h8" />
          <path d="M14 7h6" />
          <path d="M17 7v10" />
        </svg>
        <span style={{ fontSize: 16, fontWeight: 600 }}>Languages</span>
      </div>

      {/* Clear History */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.8">
          <path d="M3 12a9 9 0 109-9" />
          <path d="M3 3v6h6" />
          <path d="M12 7v5l3 3" />
        </svg>
        <span style={{ fontSize: 16, fontWeight: 600 }}>Clear History</span>
      </div>

      {/* Display */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.8">
          <rect x="3" y="4" width="18" height="12" />
          <path d="M8 20h8" />
        </svg>
        <span style={{ fontSize: 16, fontWeight: 600 }}>Display</span>
      </div>

      {/* Files & Documents */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.8">
          <path d="M6 3h8l4 4v14H6z" />
          <path d="M14 3v5h5" />
        </svg>
        <span style={{ fontSize: 16, fontWeight: 600 }}>
          Files & Documents
        </span>
      </div>
    </div>
    </div>
    </div>
</div>
          {/* ---------------- RIGHT SIDE PANEL ---------------- */}
          

            {/* SCORE CARD */}
{/* ---------------- RIGHT SIDE PANEL ---------------- */}
<div className="w-[260px] flex-shrink-0">
  <div className="bg-[#E5F4FF] rounded-2xl h-[950px]" />
</div>
</div>
      </div>
    </div>
   
  );
};

export default Profile;
