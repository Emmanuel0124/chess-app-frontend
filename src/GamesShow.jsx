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
    <div className="container">
      <div className="game-card" key={game.id}>
            <img className="image" src={game.gif_url} alt={game.title} />
            <div className="game-details">
              <p className="game-winner">{game.winner} won by {game.result}, in {game.number_of_moves} total moves against {game.loser}</p>
              <p className="game-white">White player: {game.white_player}</p>
              <p className="game-black">Black player: {game.black_player}</p>
            </div>
          </div>
    </div>
  );
}