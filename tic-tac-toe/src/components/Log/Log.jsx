export default function Log(props) {
  return (
    <ol id="log">
      {props.turns.map((turn) => (
        <li key={`${turn.square.row} ${turn.square.col}`}>
          {turn.player}: ({turn.square.row}, {turn.square.col})
        </li>
      ))}
    </ol>
  );
}
