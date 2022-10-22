import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ButtonComp from '../Button';
import '../../styles/Components/Modal/Modal.css'

function ModalComp(props) {
  const { modalTitle } = props;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter " className='text-dark'>
          {modalTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container text-center">
          <div className="row w-100 d-flex align-items-center justify-content-center">
            <div className="col-4 d-flex align-items-center justify-content-start"><h6>URL Image</h6></div>
            <div className="col-8 d-flex align-items-center justify-content-center">
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="URL Image"
                  aria-label="URL Image"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>

            <div className="w-100"></div>

            <div className="col-4 d-flex align-items-center justify-content-start"><h6>Title</h6></div>
            <div className="col-8 d-flex align-items-center justify-content-center">
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Title"
                  aria-label="Title"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>

            <div className="w-100"></div>

            <div className="col-4 d-flex align-items-center justify-content-start"><h6>Description</h6></div>
            <div className="col-8 d-flex align-items-center justify-content-center">
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Description"
                  aria-label="Description"
                  aria-describedby="basic-addon1"
                  as="textarea"
                />
              </InputGroup>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <ButtonComp onClick={props.onHide} buttonText={"Save"} />
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComp