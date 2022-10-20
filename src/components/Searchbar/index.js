import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Searchbar() {
  return (
    <>
      <FloatingLabel controlId="floatingInput" label="Search">
        <Form.Control type="search" placeholder="Search" className="rounded-pill" />
      </FloatingLabel>
    </>
  );
}

export default Searchbar;