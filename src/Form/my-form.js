import React, { Component, useState } from 'react';
import App from '../App.css';

class CustomForm extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        movie: [],
        inputMovie: '',
        inputRating: ''
    
    };


      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }



  
    handleChange(event) {
      this.setState({
        inputMovie: event.target.value,
        inputRating: event.target.value
    });
    }
  
   

    addMovie = () => {
        
        this.setState({
          movie: [...this.state.movie,this.state.inputMovie,this.state.inputRating]
      });
    }


    handleSubmit(event) {
      this.addMovie();
      event.preventDefault();
    }
    render() {
        
      return (
        <div className='column'>
  
        <form onSubmit={this.handleSubmit} >

          <label>
            Movie:
            <input type="text" value={this.state.inputMovie} onChange={(event)=>this.setState({inputMovie: event.target.value})} />
          </label>
          <label>
            Rating:
            <input type="text" value={this.state.inputRating} onChange={(event)=>this.setState({inputRating: event.target.value})}  />
          </label>

       
          <input type="submit" value="Submit" />
        </form>
        <p>Movie: {this.state.movie.join(', ')}</p> 
        </div>

      );
    }
  }

  export default CustomForm