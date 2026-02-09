import { useState } from "react";
import "../styles/newSidebar.css";
import itmoLogo from "../assets/sidebar/itmo-logo.svg";
import { Link } from "react-router-dom";
import { MenuIcon, FileBarChartIcon } from "./icons";
import { menuItems } from "./menuConfig";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      {/* Header */}
      <div className="sidebar-header">
        <div className={`logo ${isCollapsed ? "collapsed" : ""}`}>
          {isCollapsed ? (
            <img src={itmoLogo} alt="iTMO Logo" className="logo-icon" />
          ) : (
            <img src={itmoLogo} alt="iTMO Logo" className="logo-full" />
          )}
        </div>
      </div>

      {/* Hamburger Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="hamburger-btn"
        aria-label="Toggle sidebar"
      >
        <MenuIcon />
      </button>

      {/* Navigation Items */}
      <nav className="sidebar-nav">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              key={index}
              to={item.path}
              className={`nav-item ${isCollapsed ? "collapsed" : ""} ${index === 0 ? "active" : ""}`}
            >
              <div className="icon-wrapper">
                <Icon />
              </div>
              {!isCollapsed && <span className="nav-label">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Settings Button */}
      <div className="sidebar-footer">
        <button className={`settings-btn ${isCollapsed ? "collapsed" : ""}`}>
          <FileBarChartIcon />
          {!isCollapsed && <span className="nav-label">SETTINGS</span>}
        </button>
      </div>
    </div>
  );
}
