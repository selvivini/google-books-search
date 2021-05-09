import React from 'react'
import{Container} from 'react-bootstrap'
import NavBar from '../components/Nav'
import Jumbo from '../components/Jumbotron/Jumbo'
function Search() {
    return (
        <Container fluid>
           <NavBar/>
           <Jumbo/>
           <h4 className="text-center m-3 p-3 text-danger">Search and save books of interest</h4>
        </Container>
         
        
    )
}

export default Search


