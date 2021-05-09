import React from 'react'
import {Container, Jumbotron} from 'react-bootstrap'
function Jumbo() {
    return (
       <Container fluid className="mt-1 p-3">
         <Jumbotron style={{backgroundImage: 'url(assets/00BOOKCOMBO-superjumbo.jpg)', height:'300' ,width:'500'}} className="p-5 m-3 rounded-circle text-primary border-end ">
         <div>
         <h1 className= 'text-center m-3 p-3 border-3'>React-books-Search</h1>
         </div>
        </Jumbotron>
        <h4 className="text-center m-3 p-3 text-danger">Search and save books of interest</h4>
        </Container>
    )
}

export default Jumbo
