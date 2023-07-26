import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export function GamesShow() {
  const [game, setGame] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(""); // State to hold the new comment input

  const params = useParams();

  const getShowGame = () => {
    axios.get(`http://localhost:3000/games/${params.id}.json`).then(response => {
      setGame(response.data);
    });
  };

  const getGameComments = () => {
    axios.get(`http://localhost:3000/games/${params.id}/comments.json`).then(response => {
      setComments(response.data);
    });
  };

  useEffect(() => {
    getShowGame();
    getGameComments();
  }, []);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();

    console.log("subbmit")

    // Send the new comment to the backend and update the frontend
    axios.post(`http://localhost:3000/comments.json`, { content: newComment, game_id: game.id }).then(() => {

      console.log(newComment)
      // After the comment is successfully created, fetch updated comments
      getGameComments();
      // Clear the newComment input after submission
      setNewComment("");
    });
  };

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
      <div className="card">
        <div>
          {comments.map(comment => (
            <p key={comment.id}>{comment.content}</p>
          ))}
        </div>
        <div>
          <form onSubmit={handleCommentSubmit}>
            <input placeholder="Leave a comment!" name="content" type="text" value={newComment} onChange={handleCommentChange}/>
            <button type="submit">Comment</button>
          </form>
        </div>
      </div>
    </div>
  );
}
