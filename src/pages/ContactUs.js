export default function ContactUs() {
  const contactInfo = [
    {
      title: 'Email',
      text: 'xyz@example.com',
      svg: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 6.5C3 5.67 3.67 5 4.5 5h15c.83 0 1.5.67 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-15A1.5 1.5 0 013 17.5v-11z" stroke="#2563EB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 6l-9 6L3 6" stroke="#2563EB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Phone',
      text: '+91 6234567890',
      svg: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#2563EB" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.86 19.86 0 01-3.07-8.63A2 2 0 014.11 2h3a2 2 0 012 1.72c.12 1.2.38 2.37.78 3.47a2 2 0 01-.45 2.11L9.91 11.09a16 16 0 006 6l1.79-1.79a2 2 0 012.11-.45c1.1.4 2.27.66 3.47.78A2 2 0 0122 16.92z" stroke="#2563EB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'LinkedIn',
      text: 'uptoskills/profile',
      svg: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#2563EB" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-12h4v2" stroke="#2563EB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 9h4v12H2z" stroke="#2563EB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="4" cy="4" r="2" stroke="#2563EB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Location',
      text: 'New Delhi, India',
      svg: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0z" stroke="#2563EB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="10" r="2.5" stroke="#2563EB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Industry',
      text: 'Technology, information and internet',
      svg: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 6h18M3 12h18M3 18h18" stroke="#2563EB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <div style={{ padding: '32px', backgroundColor: '#E8E8F1', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '24px',textAlign:'center' }}>Get In Touch</h1> 
      <p style={{ color: '#666', marginBottom: '33px',fontSize:'20px',textAlign:'center' }}>If you have any questions or need assistance? We're here to help you on your journey to success.</p>

      <div style={{ width: 480, background: '#ECEEF3' , padding: 24, borderRadius: 10, boxShadow: '0 4px 10px rgba (0,0,0,0.05)', marginLeft: '40px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '35px' }}>Contact Information</h2>
        {contactInfo.map((item, i) => (
          <div key={i} style={{ display: 'flex', gap: '15px', marginBottom: '30px', alignItems: 'flex-start' }}>
            <div style={{ width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {item.svg}
            </div>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <h3 style={{ fontWeight: '600',fontSize:'19px', margin: '0 0 6px 0' }}>{item.title}</h3>
              <p style={{ margin: 0, color: '#666', fontSize: '17px' }}>{item.text}</p>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}
{/* ---------------------- SEND US MESSAGE SECTION ---------------------- */}

<div className="send-msg-section" style={{
  marginTop: "40px",
  padding: "30px",
  background: "#FFFFFF",
  borderRadius: "12px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
}}>

  <h2 style={{
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "20px",
    color: "#333"
  }}>
    Send Us a Message
  </h2>

  <form className="send-msg-form" style={{
    display: "flex",
    flexDirection: "column",
    gap: "18px"
  }}>

    <input 
      type="text" 
      placeholder="Full Name"
      style={{
        height: "48px",
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid #D0D5DD",
        fontSize: "15px"
      }}
    />

    <input 
      type="email" 
      placeholder="Email Address"
      style={{
        height: "48px",
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid #D0D5DD",
        fontSize: "15px"
      }}
    />

    <input 
      type="text" 
      placeholder="Subject"
      style={{
        height: "48px",
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid #D0D5DD",
        fontSize: "15px"
      }}
    />

    <textarea
      placeholder="Your Message"
      rows="5"
      style={{
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid #D0D5DD",
        fontSize: "15px",
        resize: "none"
      }}
    ></textarea>

    <button 
      type="submit"
      style={{
        background: "#4A66F7",
        color: "#FFF",
        padding: "14px 20px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "600"
      }}
    >
      Submit
    </button>

  </form>
</div>
@media (max-width: 768px) {

  .send-msg-section {
    padding: 20px !important;
  }

  .send-msg-form input,
  .send-msg-form textarea {
    font-size: 14px !important;
  }

  .send-msg-form button {
    width: 100%;
  }
}
