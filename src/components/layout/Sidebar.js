import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Profile", path: "/profile" },
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Terms and Conditions", path: "/terms-and-conditions" },
    { label: "Feedback", path: "/feedback" },
    { label: "Contact Us", path: "/contact-us" },
    { label: "Notification", path: "/notification" },
    { label: "Cookies Policy", path: "/cookies-policy" },
    { label: "About Us", path: "/about-us" },
  ];

  return (
    <div className="flex h-screen w-full bg-[#EBEBF0] overflow-hidden">
      
      {/* --- MOBILE HEADER (Visible only on mobile) --- */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-[#020839] flex items-center justify-between px-4 z-50 shadow-md">
        {/* Hamburger Button */}
        <button 
          onClick={() => setIsOpen(true)}
          className="text-white p-1 focus:outline-none"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Centered Logo Text */}
        <h1 className="text-white text-3xl font-black tracking-wide absolute left-1/2 transform -translate-x-1/2 font-poppins">
          HRMS
        </h1>
        
        {/* Empty div to balance spacing if needed */}
        <div className="w-8"></div>
      </div>

      {/* --- SIDEBAR DRAWER --- */}
      {/* Overlay Background */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-[60] transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Content */}
      <div className={`
        fixed inset-y-0 left-0 z-[70] w-64 bg-[#071A52] text-white flex flex-col p-6 space-y-8 
        transition-transform duration-300 ease-in-out 
        md:translate-x-0 md:static md:flex md:flex-shrink-0
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        
        {/* Close Button Row (Mobile Only) */}
        <div className="flex justify-end md:hidden">
           <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
             </svg>
           </button>
        </div>

        {/* Logo (Desktop Only) */}
        <h1 className="text-3xl font-bold tracking-wide hidden md:block text-center mb-4">HRMS</h1>

        {/* Profile Section */}
        <div className="flex items-center space-x-3 pb-4 border-b border-white/20">
          <img
            src="https://i.pravatar.cc/150?img=5"
            className="w-12 h-12 rounded-full border-2 border-white/50"
            alt="profile"
          />
          <div>
            <h2 className="text-lg font-semibold leading-tight">Mariya</h2>
            <p className="text-xs text-gray-300">HR Manager</p>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col space-y-2 flex-1 overflow-y-auto">
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `
                px-4 py-3 rounded-xl font-medium transition-all duration-200
                ${isActive
                  ? "bg-white text-[#071A52] font-bold shadow-sm" 
                  : "text-gray-300 hover:bg-[#0B2A78] hover:text-white"
                }
              `
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 w-full h-full overflow-hidden flex flex-col pt-16 md:pt-0">
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          {children}
        </div>
      </main>

    </div>
  );
}
