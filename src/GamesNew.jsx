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
          Result: <input name="result" type="text"/>
        </div>
        <div>
          Image: <input name="image_url" type="text"/>
        </div>
        <button type="submit">Create game</button>
      </form>
    </div>
  );

}