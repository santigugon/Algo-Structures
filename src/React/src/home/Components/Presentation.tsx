import { SectionsContainer } from "./ProgressOverview";
import { AccountOverview } from "../../Account/AccountOverview";
export function Summary() {
  return (
    <div className="nes-container with-title is-centered">
      <p className="title">
        WELCOME TO ALGOSTRUCTURES <br />
        <h6>Code, Test, Triumph:</h6>
      </p>
      <p>
        Welcome to AlgoStructures - Your Portal to Algorithm and Data Structure
        Mastery! Step into the world of algorithms and data structures like
        never before.
      </p>
      <div className="presentation-bulletpoints">
        <ul className="nes-list is-disc">
          <li>Learn through Play</li>
          <li>
            Dive into lessons that demystify algorithms and data structures.
          </li>
          <li>Test your knowledge with interactive quizzes.</li>
          <li>
            Experience them firsthand through captivating animations and
            interactive games.
          </li>
          <li>
            Use the coding console where you can write, experiment, and refine
            your code
          </li>
          <li>
            Our built-in program checks your solutions and provides instant
            feedback.
          </li>
          <li>
            {" "}
            As you progress through AlgoStructures, you'll earn virtual coins
            for your achievements.
          </li>
        </ul>
      </div>
      <br />
      <p>
        Join us in this exciting quest to become a master of algorithms and data
        structures. Whether you're a coding enthusiast, a student, or a
        professional developer, AlgoStructures welcomes you to a world of
        learning and fun. Are you ready to level up your coding skills? Let's
        embark on this adventure together!
      </p>
      <SectionsContainer />
      <AccountOverview />
      <footer>
        <p>
          Algostructures is a learning project no commercial use is intended.
        </p>
      </footer>
    </div>
  );
}
