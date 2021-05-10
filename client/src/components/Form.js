  
import React from "react";

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <div className="container">
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <h1 className="text-info"><strong>Book</strong></h1>
        </label>
        <input
          className="form-control p-2"
          id="Title"
          type="text"
          value={q}
          placeholder="Please enter a book name"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right m-3 ">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"
        >
          Search
        </button>
      </div>
    </form>
    </div>
  );
}

export default Form;