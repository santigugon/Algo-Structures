export function NavMenu() {
  return (
    <nav>
      <img
        src="/img/algostructures.png"
        alt="/img/algostructures.png"
        className="menu-img nes-pointer"
      />

      <NavIcon icon="home" text="Home" />
      <NavIcon icon="users" text="Account" />
      <NavIcon icon="more" text="More" />
    </nav>
  );
}

function NavIcon({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="nav-container" id={`${text.toLowerCase()}-container`}>
      <img
        className="user-icon nes-pointer"
        src={`/img/icons/${icon}-icon.png`}
        alt={`${icon} icon`}
      />
      <h5 className="nes-pointer nav-text">{text}</h5>
    </div>
  );
}
