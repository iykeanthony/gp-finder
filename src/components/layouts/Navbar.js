import React from "react";

const Navbar=(props)=>{
    return (
      <nav className="navbar bg-success" style={{ marginBottom: '10px'}}>
        <div className='container'>
          <a href='/' className="navbar-brand text-white">
          <i className={props.icon}></i>
          <span style={{ marginLeft: '5px'}}>{props.title}</span>
          </a>
        </div>
      </nav>
    );
  }

Navbar.defaultProps = {
  title: "GP Finder",
  icon: "fab fa-github"
};

export default Navbar;
