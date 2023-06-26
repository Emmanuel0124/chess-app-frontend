import "./GamesIndex.css";

export function GamesIndex(props) {
  return (
    <div className="container">
      <h1>All games</h1>
      {props.games.map((game) => (
         <div className="game-item" key={game.id}>
           <img className="image" src={game.image_url} />
           <p className="game-result">result: {game.result}</p>
           <p className="game-winner">winner: {game.winner}</p>
         </div>
       ))}
    </div>
  );
}