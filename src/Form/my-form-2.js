import React, {useState} from "react";
import '../App.css';

function MovieApp(){
const [movie, setMovie] = useState([  { name: "The Godfather", rating: 9.2 },
  { name: "The Shawshank Redemption", rating: 9.3 },
  { name: "The Dark Knight", rating: 9.0 }]);
const [name, setName] = useState('');
const [rating, setRating] = useState('');
const [SelectedMovie, setSelectedMovie] = useState('');
const [EditMode, setEditMode] = useState(false);

const addMovie = () => {

    if(EditMode){
    const setSelectedMovieIndex = movie.indexOf(SelectedMovie);
    const setupdatedMovie = [...movie];
    setupdatedMovie[setSelectedMovieIndex] = {
        name: name,
        rating: rating
      }
      setMovie(setupdatedMovie);
    }
    else{
      setMovie([...movie, {name,rating}]);
    }
    setEditMode(false);
     setSelectedMovie(null);
     setName('');
     setRating('');
};
const deleteMovie = (index) => {
console.log("deleting movie: ", index);
const khaliarray = [...movie];
khaliarray.splice(index, 1);
setMovie(khaliarray);
};

const editMovie = (index) => {
  setSelectedMovie(movie[index]);
  setEditMode(true);
  setName(movie[index].name);
  setRating(movie[index].rating);
  };


return (
    <div>
        <h1>Movie List</h1>
        <table>
  <tr>
    <th>Movie Name</th>
    <th>Rating</th>
    <th>Edit</th>
    <th>Delete</th>
  </tr>
  {movie.map((movie,index)=>(

  <tr key={index}>
    <td>{movie.name}</td>
    <td>{movie.rating}</td>
    <td><button onClick={() => deleteMovie(index)}>Delete</button></td>
    <td><button onClick={() => editMovie(index)}>Edit</button></td>
  </tr>
  ))}

</table>


            <label className="text-2xl font-bold text-gray-800">Input Movie:</label>
            <input 
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            ></input>


            <label>Input Rating:</label>
            <input 
            type="text"
            id="rating"
            value={rating}
            onChange={(event) => setRating(event.target.value)}
            ></input>
            <button onClick={addMovie}>Add Movie</button>
        
    </div>
);


}

export default MovieApp
