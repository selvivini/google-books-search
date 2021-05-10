import React, {Component} from 'react'
import axios from 'axios'
import{Container, Row, Col, Card, Button} from 'react-bootstrap'
import NavBar from '../components/Nav'
import Jumbo from '../components/Jumbotron/Jumbo'

import Form from '../components/Form'
import Api from '../utils/Api'
import SearchResult from '../components/SearchResult'
class Search extends Component {
 //create state
 state = {
  search: "",
  books: [],
  error: "",
  message: ""
};

 

  handleInputChange = event => {
    this.setState({ search: event.target.value })
  };
  

  //function to control the submit button of the search form 
  handleFormSubmit = event => {
    event.preventDefault();
    // once it clicks it connects to the google book api with the search value
    Api.getGoogleSearchBooks(this.state.search)
        .then(res => {
            if (res.data.items === "error") {
                throw new Error(res.data.items);
            }
            else {
                // store response in a array
                let results = res.data.items
                //map through the array 
                results = results.map(result => {
                    //store each book information in a new object 
                    result = {
                        key: result.id,
                        id: result.id,
                        title: result.volumeInfo.title,
                        author: result.volumeInfo.authors,
                        description: result.volumeInfo.description,
                        image: result.volumeInfo.imageLinks.thumbnail,
                        link: result.volumeInfo.infoLink
                    }
                    return result;
                })
                // reset the sate of the empty books array to the new arrays of objects with properties geting back from the response
                this.setState({ books: results, error: "" })
            }
        })
        .catch(err => this.setState({ error: err.items }));
}


handleSavedButton = event => {
  // console.log(event)
  event.preventDefault();
  console.log(this.state.books)
  let savedBooks = this.state.books.filter(book => book.id === event.target.id)
  savedBooks = savedBooks[0];
  console.log(savedBooks)
  Api.saveBook(savedBooks)
      .then(this.setState({ message: alert("Your book is saved") }))
      .catch(err => console.log(err))
}
   
  render() {
    return (
      <Container fluid>
        <NavBar/>
        <Jumbo/>
        <Row>
         <Col >
            <Card title="Book Search" icon="far fa-book">
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
       <SearchResult books= {this.state.books} handleSavedButton={this.handleSavedButton}/>
        
      </Container>
    );
  }
}

export default Search;

