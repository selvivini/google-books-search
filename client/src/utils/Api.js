import axios from "axios"; 

export default {
    
    //Gets all the books in the collection.
    getBooks : function() {
        return axios.get("/api/books");
    },
    search : function (query) {
    const searchTerm = encodeURI( query );
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm );
    },
    saveBook : function(book) { 
      return axios.post("/api/books", book ); 
    },
    deleteBook : function(bookId) { 
      return axios.delete("/api/books/" + bookId ); 
    }
};