interface AlgoComplexityProps {
  avgTimeComplexity: string;
  worstTimeComplexity: string;
  inPlace: boolean;
  stable: boolean;
}

export function AlgoComplexity({
  avgTimeComplexity,
  worstTimeComplexity,
  inPlace,
  stable,
}: AlgoComplexityProps) {
  return (
    <div style={{ margin: "2rem" }}>
      <div className="nes-container with-title is-centered centered-div">
        <p className="title">Time complexity</p>
        <div className="nes-table-responsive">
          <table className="nes-table is-bordered is-centered">
            <thead>
              <tr>
                <th>Average Time Complexity</th>
                <th>Worst Time Complexity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{avgTimeComplexity}</td>
                <td>{worstTimeComplexity}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="nes-container with-title is-centered centered-div">
        <p className="title">Stability & More</p>
        <div className="nes-table-responsive">
          <table className="nes-table is-bordered is-centered">
            <thead>
              <tr>
                <th>In place</th>
                <th>Stable</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{inPlace ? "True" : "False"}</td>
                <td>{stable ? "True" : "False"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
