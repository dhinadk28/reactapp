import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from './global';
import { useParams } from "react-router-dom";


export function EditMovie({ movieList, setMovieList }) {

 const { id } = useParams(); // extract id from URL
  // const movie = movieList[id];
  // console.log(movieList);

    const [movie, setMovie] = useState(null)

    useEffect(() => {
      fetch(`${API}/movies/${id}`, {
        method: "GET",
      })
      .then((data) => data.json())
      .then((mv) => setMovie(mv))
    }, [])


  
  


  return movie? <EditMovieForm movie={movie}/> : "Loading......."
    
  

}






function EditMovieForm({movie}){
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);

  const navigate = useNavigate();

return(
  <div className="add-movie-form">

  <TextField value={name} onChange={(e) => setName(e.target.value)} label="Name" variant="standard" />
  <TextField value={poster} onChange={(e) => setPoster(e.target.value)} label="Poster" variant="standard" />
  <TextField value={rating} onChange={(e) => setRating(e.target.value)} label="Rating" variant="standard" />
  <TextField value={summary} onChange={(e) => setSummary(e.target.value)} label="Summary" variant="standard" />
  <TextField value={trailer} onChange={(e) => setTrailer(e.target.value)} label="Trailer" variant="standard" />

  <Button variant="contained"
    //cope the MovieList and add newMovie to it
    onClick={() => {
      const updateMovie = {
        name: name,
        poster: poster,
        rating: rating,
        summary: summary,
        trailer: trailer,
      };

     // setMovieList([...movieList, newMovie]);
      //1.method,body,header

     fetch(`${API}/movies/${movie.id}`,{
      method:"PUT",
      body: JSON.stringify(updateMovie),
      headers:{
        "Content-Type":"application/json",
      }
    })
  .then((data) =>data.json())
  .then(()=>navigate("/movie"))

      
    }}
  >SAVE</Button>


</div>
)
}


