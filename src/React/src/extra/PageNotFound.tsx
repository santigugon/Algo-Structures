// NotFound.tsx
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="nes-container with-title is-centered">
      <p className="title">
        {" "}
        <h2> Error 404 Page Not Found</h2>
      </p>

      <p>The page you are looking for doesn't exist.</p>
      <Link to="/home">
        <button type="button" className="nes-btn is-error">
          Go back to home
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
