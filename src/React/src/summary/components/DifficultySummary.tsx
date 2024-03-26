export function DifficultySummary({ difficulty }: { difficulty: number }) {
  return (
    <div className="nes-container with-title is-centered">
      <p className="title">Difficulty</p>
      {difficulty === 1 ? (
        <div>
          <i className="nes-icon is-large heart"></i>
          <i className="nes-icon is-large is-half heart"></i>
          <i className="nes-icon is-large is-transparent heart"></i>
        </div>
      ) : difficulty === 2 ? (
        <div>
          <i className="nes-icon is-large heart"></i>
          <i className="nes-icon is-large heart"></i>
          <i className="nes-icon is-large is-transparent heart"></i>
        </div>
      ) : (
        <div>
          <i className="nes-icon is-large heart"></i>
          <i className="nes-icon is-large heart"></i>
          <i className="nes-icon is-large heart"></i>
        </div>
      )}
    </div>
  );
}
