import { Avatar } from "./Avatar.tsx";

export function AccountOverview() {
  return (
    <div className="account-overview">
      <Avatar
        name="Santiago"
        src="https://www.shutterstock.com/image-vector/pixel-8-bit-young-guy-260nw-503217790.jpg"
      />
      <div className="info">
        <p className="item">Santiago</p>
        <progress
          className="nes-progress is-success item"
          value={50}
          max="100"
        ></progress>
        <p className="item">Joined on 2021-02-21</p>
      </div>
    </div>
  );
}
