import React from "react";

const LogoVariantOne = () => {
  return (
    <a href="/" className="logo-wrapper group">
      <div className="logo-container">
        <div className="logo-icon">
          <img
            src="/images/logo-white.svg"
            alt="Adrion DMC Boutique Logo"
            className="logo-img"
          />
        </div>
        <div className="logo-text-container inner-links">
          <p className="logo-title ">ADRION CUSTOM</p>
          <p className="logo-subtitle ">TRAVEL AGENCY</p>
        </div>
      </div>
    </a>
  );
};

export default LogoVariantOne;
