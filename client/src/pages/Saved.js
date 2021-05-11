import React, { Component } from 'react'
import{Container} from 'react-bootstrap'
import NavBar from '../components/Nav'
import Jumbo from '../components/Jumbotron/Jumbo'
import SavedResult from '../components/SaveResult'
import Api from '../utils/Api'
class Saved extends Component {
    state = {
        savedBooks: []
    };


     //when this component mounts, grab all books that were save to the database 
     componentDidMount() {
        Api.getBooks()
            .then(res => this.setState({ savedBooks: res.data }))
            .catch(err => console.log(err))
    }

    //function to remove book by id
    handleDeleteButton = id => {
        Api.deleteBook(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    }
    render(){
    return (
        <Container fluid>
           <NavBar/>
           <Jumbo/>
           <hr />
        <SavedResult savedBooks={this.state.savedBooks} handleDeleteButton={this.handleDeleteButton} />
        </Container>
    )
}
}
export default Saved
