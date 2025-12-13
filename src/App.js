import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Sidebar";
import Profile from "./pages/Profile";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Feedback from "./pages/Feedback";
import ContactUs from "./pages/ContactUs";
import Notification from "./pages/Notification";
import CookiesPolicy from "./pages/CookiesPolicy";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/cookies-policy" element={<CookiesPolicy />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
