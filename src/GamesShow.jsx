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
      <p>id: {game.id} </p>
      <div className="game-card" key={game.id}>
            <img className="image" src={game.image_url} alt={game.title} />
            <div className="game-details">
              <p className="game-result">Result: {game.result}</p>
              <p className="game-winner">Winner: {game.winner}</p>
            </div>
          </div>
    </div>
  );
}