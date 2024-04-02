import { Avatar } from "./Avatar.tsx";
import LoginButton from "./LoginButton.tsx";
import LogoutButton from "./LogoutButton.tsx";
import { useAuth0 } from "@auth0/auth0-react";

export function AccountOverview() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log("user:", user);
  if (isLoading) {
    return <div>Loading ...</div>;
  } else if (isAuthenticated) {
    return (
      <>
        <div className="account-overview">
          <Avatar
            name={user?.name || ""}
            src={
              user?.picture ||
              "https://www.shutterstock.com/image-vector/pixel-8-bit-young-guy-260nw-503217790.jpg"
            }
          />
          <div className="info">
            <p className="item">{user?.nickname || ""}</p>

            <span
              className={
                user?.email_verified
                  ? `nes-text is-success`
                  : `nes-text is-warning` || ""
              }
            >
              {user?.email_verified ? `Verified` : `Not verified` || ""}
            </span>
            <div className="centered-div">
              <LogoutButton />
            </div>
          </div>
          <div className="centered-div thirty-width">
            <progress
              className="nes-progress is-success item"
              value={50}
              max="100"
            ></progress>
          </div>
        </div>
      </>
    );
  } else if (!isAuthenticated) return <LoginButton />;
}
