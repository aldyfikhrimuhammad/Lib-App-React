import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import ProfilePicture from '../../Assets/Profile Picture.jpeg'
import ModalComp from "../../components/Modal"
import '../../styles/Components/Sidebar/Sidebar.css'

function Sidebar() {

  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
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
          <div className="d-flex flex-column mb-3 justify-content-center">
            <div className="p-2 d-flex flex-column align-items-center justify-content-center">
              <img src={ProfilePicture} className="rounded-circle mb-2 profile-picture" alt="..." />
              <h2>Niki Zefanya</h2>
              <Link to={"/login"} type="button" className="btn btn-outline-secondary d-flex Logout-Button">
                <Icon icon="humbleicons:logout" width="25" height="25" />Logout
              </Link>
            </div>

            <div>
              <div className="p-2 mt-3 ms-5">
                <h3 className='Navigator-Sidebar' >Explore</h3>
              </div>

              <div className="p-2 ms-5">
                <h3  className='Navigator-Sidebar'>History</h3>
              </div>

              <div className="p-2 ms-5">
                <h3  className='Navigator-Sidebar' onClick={() => setModalShow(true)}>Add Book</h3>
                <ModalComp
                  show={modalShow}
                  onHide={() => setModalShow(false)} modalTitle={"Add Data"}
                />
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar