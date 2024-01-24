export default function GameOver({ winner, onRematch }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner ? <p>{winner} won the game!</p> : <p>it's a draw!</p>}
      <p>
        <button onClick={onRematch}>Play Again</button>
      </p>
    </div>
  );
}
