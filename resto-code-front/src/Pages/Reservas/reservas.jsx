import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import { Form, InputGroup, Dropdown, DropdownButton} from "react-bootstrap/";
import './reservas.css'

const Reservas = () =>{
  return (
    <>
      <div className="pageReserva d-flex align-items-center justify-content-center container-fluid ">
        <div className="card cardReserva ">
          <div className="card-img" variant="top" src="holder.js/100px180" />
          <div className="card-body">
            <div className="card-title">
              <h1>RESERVAS</h1>
            </div>
            <div className="card-text">
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">
                  @example.com
                </InputGroup.Text>
                </InputGroup>
                <InputGroup size= 'sm'>
                <DropdownButton
                  variant="outline-secondary"
                  title="Dropdown"
                  id="input-group-dropdown-1"
                >
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </DropdownButton>
                <Form.Control aria-label="Text input with dropdown button" />
              </InputGroup>
              <button className="btn botonReserva">Go somewhere</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reservas;
