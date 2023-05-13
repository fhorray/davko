import React from "react";

// ICONS
import ShirtIcon from "../../assets/images/shirt-outline.svg";
import DiamondIcon from "../../assets/images/diamond.svg";
import CustomerCareIcon from "../../assets/images/customer-care.svg";

const Benefit = () => {
  return (
    <div className="benefits">
      <ul>
        <li>
          <img src={ShirtIcon} alt="Shirt Icon" />
          <p>500+ Leading Brands</p>
        </li>
        <li>
          <img src={DiamondIcon} alt="Diamond Icon" />
          <p>Luxury-grade materials</p>
        </li>
        <li>
          <img src={CustomerCareIcon} alt="Customer Care Icon" />
          <p>Customer Care</p>
        </li>
      </ul>
    </div>
  );
};

export default Benefit;
