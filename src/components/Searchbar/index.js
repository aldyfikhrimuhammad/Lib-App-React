import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Searchbar() {
  return (
    <>
      <FloatingLabel
        controlId="floatingTextarea"
        label="Search"
        className="mb-3"
      >
        <Form.Control as="textarea" placeholder="Search" />
      </FloatingLabel>
    </>
  );
}

export default Searchbar;