import {Form,Button,Row,Col} from 'react-bootstrap';
import './App.css';
const BasicExample=()=> {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
function SelectBasicExample() {
  return (
    <Form.Select aria-label="Default select example">
      <option>Your sex?</option>
      <option value="Man">Man</option>
      <option value="Woman">Woman</option>
    </Form.Select>
  );
}
function GridBasicExample() {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
          <Form.Control placeholder="Last name" />
        </Col>
      </Row>
    </Form>
  );
}
  function GridComplexExample() {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

const App=()=>{
  return (
    
    <div className="App">
      <header>
        <h1 className='orange'>Hello React</h1>
        <nav>
          <a href='#'>Home</a>
          <a href='#'>Forms</a>
          <a href='#'>Refrences</a>        
      </nav>
      </header>
      <h1 className='orange'>Checkpoint React(First step)</h1>
      <section>
        <div>
          <p>I'm Badreddine Hajji,I'm 22 years old.</p>
          <p>I'm student in license computer science</p>
          <p>My specialty is Micro computer science and </p>
          <p>embedded system</p>
      </div>
      <div>
          <p>I'm Badreddine Hajji,I'm 22 years old.</p>
          <p>I'm student in license computer science</p>
          <p>My specialty is Micro computer science and </p>
          <p>embedded system</p>
      </div>
      </section>
      <article>
        <h1 className='orange'>Forms to compliter</h1>
        <div>
          <GridBasicExample />
          <SelectBasicExample/>
          <GridComplexExample />
          
        </div>
        
      </article>
      <footer>
        <div>
          <h2>created by:</h2>
          <h3>Badreddine Hajji</h3>
        </div>
        <BasicExample />
  </footer>
    </div>
  );
}

export default App;

