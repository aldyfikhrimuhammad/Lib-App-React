import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import '../../styles/Components/Searchbar/Searchbar.css'

function Searchbar() {
  return (
    <>
      <FloatingLabel controlId="floatingInput" label="Search">
        <Form.Control type="text" placeholder="Search" className="rounded-pill search-bar" />
      </FloatingLabel>
    </>
  );
}

export default Searchbar;