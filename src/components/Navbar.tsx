import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(): ReactElement {
  return (
    <nav>
      <Link to="/" className="logo">
        <h3>Blog Application</h3>
      </Link>
      <Link to="/">หน้าแรก</Link>
      <Link to="/blogs">บทความทั้งหมด</Link>
      <Link to="/about">เกี่ยวกับ</Link>
    </nav>
  );
}

export default Navbar;
