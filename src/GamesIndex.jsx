export function GamesIndex(props) {
  return (
    <div>
      <h1>All games</h1>
      {props.games.map((game) => (
         <div key={game.id}>
           <img src={game.image_url} />
           <p>result: {game.result}</p>
           <p>winner: {game.winner}</p>
         </div>
       ))}
    </div>
  );
}