export function GamesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateGame(params, () => event.target.reset());
  };
  return(
    <div>
      <h1>New game</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Winner: <input name="winner" type="text"/>
        </div>
        <div>
          Loser: <input name="loser" type="text"/>
        </div>
        <div>
          Result: <input name="result" type="text"/>
        </div>
        <div>
          Number of moves: <input name="number_of_moves" type="text"/>
        </div>
        <div>
          Black player: <input name="black_player" type="text"/>
        </div>
        <div>
          White player: <input name="white_player" type="text"/>
        </div>
        <div>
          Gif: <input name="image_url" type="text"/>
        </div>
        <div>
          Picture: <input name="picture" type="text"/>
        </div>
        <button type="submit">Create game</button>
      </form>
    </div>
  );

}