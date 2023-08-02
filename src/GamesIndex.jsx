import "./GamesIndex.css";
import { Link } from "react-router-dom";

export function GamesIndex(props) {
  return (
    <div className="container">
      <div className="card-container">
        {props.games.map((game) => (
          <div className="game-card" key={game.id}>
            <img className="image" src={game.image_url} alt={game.title} />
            <div className="game-details">
              <p className="game-winner">Winner: {game.winner}</p>
              <p className="game-number_of_moves">Number of moves: {game.number_of_moves}</p>
              <Link to={`/games/${game.id}`} className="button">See Game</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
