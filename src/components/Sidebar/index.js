import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Icon } from '@iconify/react';

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Icon icon="charm:menu-hamburger" width="25" height="25" onClick={handleShow} className="sidebar-button"/>

      <Offcanvas show={show} onHide={handleClose} className="sidebar-section">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar