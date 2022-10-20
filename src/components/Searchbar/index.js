import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Searchbar() {
  return (
    <>
      <FloatingLabel
        controlId="floatingTextarea"
        label="Search"
      >
        <Form.Control as="textarea" placeholder="Search" className="rounded-pill w-100"  />
      </FloatingLabel>
    </>
  );
}

export default Searchbar;