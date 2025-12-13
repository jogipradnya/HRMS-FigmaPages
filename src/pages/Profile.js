export default function Profile() {
  return (
    <div style={{ padding: '48px 24px 24px', background: '#f3f4f6', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 32 }}>
        {/* Main column */}
        <div>
          {/* Profile placeholder - leave space for existing sidebar/profile area */}
          

         {/* Work Overflow */}
<div style={{ marginTop: 180 }}>
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


          {/* Complete Due Tasks */}
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

          {/* Quick actions */}
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
      </div>
    </div>
  );
}
