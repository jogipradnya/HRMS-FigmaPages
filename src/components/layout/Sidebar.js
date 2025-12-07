import { NavLink } from "react-router-dom";

// 1. We accept 'children' as a prop here
export default function Sidebar({ children }) {
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
    // 2. We use a Flex container to hold the Sidebar AND the Content side-by-side
    <div className="flex h-screen w-full">
      
      {/* --- SIDEBAR SECTION --- */}
      <div className="h-screen w-64 bg-[#071A52] text-white flex flex-col p-6 space-y-8 flex-shrink-0">
        
        {/* Logo Section */}
        <h1 className="text-3xl font-bold tracking-wide">HRMS</h1>

        {/* Profile */}
        <div className="flex items-center space-x-3">
          <img
            src="https://i.pravatar.cc/150?img=5"
            className="w-14 h-14 rounded-full border-2 border-white"
            alt="profile"
          />
          <div>
            <h2 className="text-lg font-semibold">Mariya</h2>
            <p className="text-sm text-gray-300">HR Manager</p>
          </div>
        </div>

        {/* MENU */}
        <div className="flex flex-col space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `
                px-4 py-3 rounded-lg font-medium transition-all
                ${isActive
                  ? "bg-white text-[#071A52]" // selected item
                  : "text-white hover:bg-[#0B2A78]"
                }
              `
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* --- MAIN CONTENT SECTION (THE FIX) --- */}
      {/* This div takes up the remaining space (flex-1) and renders your pages */}
      <div className="flex-1 p-10 overflow-auto bg-gray-50 text-black">
        {children}
      </div>

    </div>
  );
}