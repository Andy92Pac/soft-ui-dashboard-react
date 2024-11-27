import React from "react";
import "./style.css";
import LogoJimo from "./imgs/logo-jimo.svg";
import PropTypes from "prop-types";

const LauncherButton = ({ label, onClick, id }) => {
  return (
    <div id={id} className="launcher-button" onClick={onClick}>
      {label}
    </div>
  );
};

LauncherButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
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
      <LauncherButton
        id="launcher-tour"
        label="Tour"
        onClick={() => {
          // window.jimo.push([
          //   "do",
          //   "boosted:trigger",
          //   [{ evolutionId: "b93ab406-8b8d-47d9-960a-b7708a546523" }],
          // ]);
        }}
      />
      <LauncherButton
        id="launcher-survey"
        label="Survey"
        onClick={() => {
          // window.jimo.push([
          //   "do",
          //   "boosted:trigger",
          //   [{ evolutionId: "5549c128-b329-40d4-8316-785ff69082bb" }],
          // ]);
        }}
      />
      <LauncherButton
        id="launcher-checklist"
        label="Checklist"
        onClick={() => {
          window.jimo.push([
            "do",
            "boosted:trigger",
            [{ evolutionId: "bcdf2c9a-9d98-4d1c-b1ca-9f79a78c31b1" }],
          ]);
        }}
      />
      <LauncherButton
        id="launcher-announcement"
        label="Announcement"
        onClick={() => {
          // window.jimo.push([
          //   "do",
          //   "boosted:trigger",
          //   [{ evolutionId: "09c03f54-502a-4a40-953d-1f86511b2ca4" }],
          // ]);
        }}
      />
      <LauncherButton
        id="launcher-changelog"
        label="Changelog"
        onClick={() => {
          window.jimo.push(["do", "widget:open"]);
        }}
      />
    </div>
  );
};

export default Launcher;
