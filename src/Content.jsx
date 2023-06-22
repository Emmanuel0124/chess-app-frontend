import axios from "axios";
import { useState, useEffect } from "react"; 
import { GamesIndex } from "./GamesIndex";
import { GamesNew } from "./GamesNew";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

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
      <Signup />
      <Login />
      <LogoutLink />
      <GamesNew onCreateGame={handleCreateGame} />
      <GamesIndex games={games} />
    </div>
  );
}