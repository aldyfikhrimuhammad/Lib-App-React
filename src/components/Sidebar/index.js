import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import ProfilePicture from '../../Assets/Profile Picture.jpeg'
import '../../styles/Components/Sidebar/Sidebar.css'

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Icon icon="charm:menu-hamburger" width="25" height="25" onClick={handleShow} className="sidebar-button" />

      <Offcanvas show={show} onHide={handleClose} className="sidebar-section">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div class="d-flex flex-column mb-3 justify-content-center">
            <div class="p-2 d-flex flex-column align-items-center justify-content-center">
              <img src={ProfilePicture} class="rounded-circle mb-2 profile-picture" alt="..." />
              <h2>Niki Zefanya</h2>
              <Link to={"/login"} type="button" class="btn btn-outline-secondary d-flex">
              <Icon icon="humbleicons:logout" width="25" height="25" />Logout
              </Link>
            </div>

            <div class="p-2 float-left mt-3 ms-5">
             <h3>Explore</h3>
            </div>

            <div class="p-2 ms-5">
              <h3>History</h3>
            </div>

            <div class="p-2 ms-5">
             <h3>Add Book</h3>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar