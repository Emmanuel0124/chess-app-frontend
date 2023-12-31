import axios from "axios";
import { useState, useEffect } from "react"; 
import { GamesIndex } from "./GamesIndex";
import { GamesNew } from "./GamesNew";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Route, Routes } from "react-router-dom";
import { GamesShow } from "./GamesShow";

export function Content() {
  const [games, setGames] = useState([]);

     const handleIndexGames = () => {
       axios.get("http://localhost:3000/games.json").then((response) => {
         setGames(response.data);
       });
     };
     
     const handleCreateGame = (params, successCallback) => {
         console.log("handleCreateGame", params);
         axios.post("http://localhost:3000/games.json", params).then((response) => {
           setGames([...games, response.data]);
           successCallback();
         });
      };
  
     useEffect(handleIndexGames, []);
  

  return (
    <div>
     <Routes>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/gamenew" element={<GamesNew onCreateGame={handleCreateGame} />}/>
      <Route path="/" element={<GamesIndex games={games} />}/>
      <Route path="/games/:id" element={<GamesShow />} />
     </Routes>
     
    </div>
  );
}