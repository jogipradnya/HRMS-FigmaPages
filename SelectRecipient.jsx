// Import React and useState hook for managing component state
import React, { useState } from 'react';
// Import the CSS file for styling this component
import './SelectRecipient.css';

// Main component function - This is the "Select the Recipient" form
const SelectRecipient = () => {
  
  // useState hook to store form data
  // This creates a state variable 'formData' and a function 'setFormData' to update it
  // Initial values: recipientName is empty, department is 'IT & Systems', etc.
  const [formData, setFormData] = useState({
    recipientName: '',        // Stores the name of the person to appreciate
    department: 'IT & Systems', // Stores the selected department (default: IT & Systems)
    employeeId: '',           // Stores the employee ID
    jobTitle: ''              // Stores the selected job title
  });

  // Function to handle changes in input fields
  // This runs whenever user types in any input or selects from dropdown
  const handleChange = (e) => {
    // Get the name and value from the input field that was changed
    const name = e.target.name;   // e.g., "recipientName", "department"
    const value = e.target.value; // The new value entered by user
    
    // Update the formData state with the new value
    // Using spread operator (...) to keep other fields unchanged
    setFormData({
      ...formData,  // Keep all existing values
      [name]: value // Update only the field that changed (using [name] as dynamic key)
    });
  };

  // Function to handle "Next step" button click
  const handleNext = () => {
    // Log the form data to console (for testing)
    console.log('Form Data:', formData);
    // TODO: Add code here to proceed to next step
    // For example: navigate to next page, validate data, etc.
  };

  // Return the JSX (HTML-like structure) that will be displayed
  return (
    // Main container div with the frame styling (742px x 455px from design)
    <div className="select-recipient-frame">
      
      {/* Inner container for content layout */}
      <div className="select-recipient-content">
        
        {/* Title of the form */}
        <h2 className="select-recipient-title">Select the Recipient</h2>
        
        {/* Subtitle/description text */}
        <p className="select-recipient-subtitle">Choose a colleague you'd like to appreciate</p>
        
        {/* Form Group 1: Recipient Name Input */}
        <div className="form-group">
          {/* Label for the input field */}
          <label htmlFor="recipientName">Recipient Name</label>
          {/* Text input field for entering recipient name */}
          <input
            type="text"                    // Type of input (text)
            id="recipientName"             // ID for linking with label
            name="recipientName"           // Name used in handleChange function
            placeholder="Enter Recipient Name" // Hint text shown when empty
            value={formData.recipientName} // Current value from state
            onChange={handleChange}        // Function to call when value changes
            className="form-input"         // CSS class for styling
          />
        </div>

        {/* Form Group 2: Department/Team Dropdown */}
        <div className="form-group">
          <label htmlFor="department">Department/Team</label>
          {/* Dropdown/select element for choosing department */}
          <select
            id="department"
            name="department"
            value={formData.department}     // Current selected value
            onChange={handleChange}         // Function to call when selection changes
            className="form-select"
          >
            {/* Options available in the dropdown */}
            <option value="IT & Systems">IT & Systems</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
            <option value="Operations">Operations</option>
          </select>
        </div>

        {/* Form Group 3: Employee ID Input */}
        <div className="form-group">
          <label htmlFor="employeeId">Employee ID</label>
          {/* Text input for employee ID */}
          <input
            type="text"
            id="employeeId"
            name="employeeId"
            placeholder="Enter ID"
            value={formData.employeeId}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        {/* Form Group 4: Job Title Dropdown */}
        <div className="form-group">
          <label htmlFor="jobTitle">Job Title</label>
          {/* Dropdown for selecting job title */}
          <select
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            className="form-select"
          >
            {/* First option is empty (placeholder) */}
            <option value="">Select</option>
            {/* Other job title options */}
            <option value="Software Engineer">Software Engineer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Team Lead">Team Lead</option>
            <option value="Manager">Manager</option>
            <option value="Director">Director</option>
          </select>
        </div>

        {/* Container for the Next Step button */}
        <div className="button-container">
          {/* Button to proceed to next step */}
          <button className="next-button" onClick={handleNext}>
            Next step
          </button>
        </div>
        
      </div>
    </div>
  );
};

// Export the component so it can be used in other files
export default SelectRecipient;

