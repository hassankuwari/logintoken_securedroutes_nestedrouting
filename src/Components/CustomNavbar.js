import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useCookies } from 'react-cookie';


const CustomNavbar = () => {

  const [cookies, setCookies,removeCookies] = useCookies(['accessToken']);

  let auth = false;

  const receivedToken = cookies.accessToken;

  receivedToken ? auth = true : auth = false;

const handleLogout=()=>{
  removeCookies('accessToken')
}


  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/features">Features</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            {/* <Nav.Link href="/customlogin">Log In</Nav.Link>
            <Nav.Link href="/customprofile">Profile</Nav.Link>*/}

            {receivedToken ?
              <div className='d-flex gap-3'>
                {/* <Nav.Link href="/customprofile">Profile</Nav.Link> */}
                {/* <Nav.Link href="/customdashboard"></Nav.Link> */}
                <Nav.Link href="/pagelayout"></Nav.Link>
                <Button variant='danger' onClick={handleLogout}>Log Out</Button>
              </div>
              : <Nav.Link href="/customlogin">Log In</Nav.Link>
            }
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default CustomNavbar
