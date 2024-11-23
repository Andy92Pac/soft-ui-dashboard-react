import React from "react";
import "./style.css";
import LogoJimo from "./imgs/logo-jimo.svg";
import PropTypes from "prop-types";

const LauncherButton = ({ label, onClick }) => {
  return (
    <div className="launcher-button" onClick={onClick}>
      {label}
    </div>
  );
};

LauncherButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

const Launcher = () => {
  return (
    <div className="launcher">
      <div className="launcher-header">
        <div className="launcher-header-title">
          Try
          <img src={LogoJimo} alt="Jimo" className="launcher-header-logo" />
        </div>
      </div>
      <div className="launcher-divider" />
      <LauncherButton label="Tour" onClick={() => {}} />
      <LauncherButton label="Survey" onClick={() => {}} />
      <LauncherButton label="Checklist" onClick={() => {}} />
      <LauncherButton label="Announcement" onClick={() => {}} />
      <LauncherButton label="Changelog" onClick={() => {}} />
    </div>
  );
};

export default Launcher;
