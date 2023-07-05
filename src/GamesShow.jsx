import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export function GamesShow() {
  const [game, setGame] = useState({})
  const params = useParams();
  const getShowGame = () => {
    console.log(params.id);

    axios.get(`http://localhost:3000/games/${params.id}.json`).then(response => {
      console.log(response.data)
      setGame(response.data)
    })
  }

  useEffect(getShowGame, [])
  return (
    <div>
      <h1> {game.result} </h1>
      <p>id: {game.id} </p>
    </div>
  );
}