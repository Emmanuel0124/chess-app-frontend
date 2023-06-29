import "./GamesIndex.css";

export function GamesIndex(props) {
  return (
    <div className="container">
      <h1 className="title">All games</h1>
      <div className="card-container">
        {props.games.map((game) => (
          <div className="game-card" key={game.id}>
            <img className="image" src={game.image_url} alt={game.title} />
            <div className="game-details">
              <p className="game-result">Result: {game.result}</p>
              <p className="game-winner">Winner: {game.winner}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
