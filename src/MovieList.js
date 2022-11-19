import { useEffect,useState } from "react";
import { Movie } from "./Movie";
import { INTIAL_MOVIE_LIST } from "./App";
import{ API }from "./global"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useNavigate } from "react-router-dom";

  



export function MovieList() {
  const [movieList, setMovieList] = useState([]);


  const getMovies=()=>{
      fetch(`${API}/movies`,{
        method:"GET",
      })
    .then((data) =>data.json())
  .then((mv)=>setMovieList(mv))
  

  }


  useEffect(()=>getMovies(),[])
  const navigate = useNavigate();


 

  // const [movieList, setMovieList] = useState(INTIAL_MOVIE_LIST);

  return (
    <div>
      
      <div className="movie-list">
        {movieList.map((mv, index) => (
          <Movie key={mv.id} movie={mv} id={mv.id} 
            deleteButton={
          <IconButton
          color="error"
           onClick={()=>
            (
             
               fetch(`${API}/movies/${mv.id}`,{
                 method:"DELETE",})
                 .then(()=>getMovies())
             
           
             
            )
         } >
          <DeleteIcon />
        </IconButton>
        }

        editButton={
          <IconButton
          color="success"
           onClick={()=>
            navigate(`/movies/edit/${mv.id}`)
         } >
          <ModeEditIcon />
        </IconButton>
        }
          />

        ))}

        </div>
    </div>


  );
}