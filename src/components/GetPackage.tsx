import React from 'react';

const GetPackage: React.FC = () => {
  return (
    <>
      <select className = 'dropdown'>
        <option>Get by ID</option>
        <option>Get by Name</option>
        <option>Get by REGEX</option>
      </select>
      <input type="text" placeholder="Enter package details..." className = 'input-box'/>
      <button className = 'action-buttons' >Get Package</button>
    </>
  );
};

export default GetPackage;
