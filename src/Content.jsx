import axios from "axios";
import { useState, useEffect } from "react"; 
import { GamesIndex } from "./GamesIndex";
import { GamesNew } from "./GamesNew";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Route, Routes } from "react-router-dom";

export function Content() {
  const [games, setGames] = useState([]);

     const handleIndexGames = () => {
       console.log("handleIndexGames");
       axios.get("http://localhost:3000/games.json").then((response) => {
         console.log(response.data);
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
      <Route path="logout" element={<LogoutLink />}/>
      <Route path="/gamenew" element={<GamesNew onCreateGame={handleCreateGame} />}/>
      <Route path="/" element={<GamesIndex games={games} />}/>
     </Routes>
     
    </div>
  );
}