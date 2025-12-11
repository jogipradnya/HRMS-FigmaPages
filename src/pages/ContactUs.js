export default function ContactUs() {
  const contactInfo = [
    { title: 'Email', text: 'xyz@example.com', icon: '📧' },
    { title: 'Phone', text: '+91 6234567890', icon: '📱' },
    { title: 'LinkedIn', text: 'upskskills/profile', icon: '💼' },
    { title: 'Location', text: 'New Delhi, India', icon: '📍' },
    { title: 'Industry', text: 'Technology, Information and internet', icon: '🏢' }
  ];

  return (
    <div style={{ padding: '32px', backgroundColor: 'white', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '15px',textAlign:'center' }}>Get In Touch</h1>
      <p style={{ color: '#666', marginBottom: '32px',textAlign:'center' }}>If you have any questions or need assistance? We're here to help you on your journey to success.</p>

      <div style={{ width: '30%', backgroundColor: '#eff3f8ff', padding: '28px', borderRadius: '8px',height:'460px'}}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '20px' }}>Contact Information</h2>
        {contactInfo.map((item, i) => (
          <div key={i} style={{ display: 'flex', gap: '15px', marginBottom: '22px', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '20px', marginTop: '2px' }}>{item.icon}</span>
            <div>
              <h3 style={{ fontWeight: '600', margin: '0 0 4px 0' }}>{item.title}</h3>
              <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}