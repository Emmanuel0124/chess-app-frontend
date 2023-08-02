export function GamesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateGame(params, () => event.target.reset());
  };
  return(
    <div id="gamesnew" className="container">
      <h1>New game</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input placeholder="Winner" name="winner" type="text" className="form-control"/>
        </div>
        <br></br>
        <div>
          <input placeholder="Loser" name="loser" type="text" className="form-control"/>
        </div>
        <br></br>
        <div>
        <select name="result" className="form-select" aria-label="Default select example">
          <option selected>Results of game</option>
          <option value="CheckMate">CheckMate</option>
          <option value="Resigned">Resigned</option>
          <option value="Draw">Draw</option>
          <option value="Timed out">Timed out</option>
        </select>
        </div>
        <br></br>
        <div>
          <input placeholder="Number of moves" name="number_of_moves" type="text" className="form-control"/>
        </div>
        <br></br>
        <div>
          <input placeholder="Black player" name="black_player" type="text" className="form-control"/>
        </div>
        <br></br>
        <div>
          <input placeholder="White player" name="white_player" type="text" className="form-control"/>
        </div>
        <br></br>
        <div>
          <input placeholder="Image url" name="image_url" type="text" className="form-control"/>
        </div>
        <br></br>
        <div>
          <input placeholder="Gif url" name="gif_url" type="text" className="form-control"/>
        </div>
        <br></br>
        <button type="submit" className="btn btn-success">Create game</button>
      </form>
    </div>
  );

}