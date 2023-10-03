interface CreatorCardProps {
  name: string;
  description: string;
  imgSrc: string;
  github: string;
  linkedin: string;
  email: string;
  technologies: string[];
}

export function CreatorCard({
  name,
  description,
  imgSrc,
  github,
  linkedin,
  email,
  technologies,
}: CreatorCardProps) {
  return (
    <div className="cards-container">
      <div className="nes-container">
        <div className="creator-box">
          <img src={imgSrc} alt={`creator image ${name}`} />
        </div>
        <h2>{name}</h2>
        {description}

        {technologies.map((tech) => {
          return <li>{tech}</li>;
        })}

        <div className="creator-icons">
          <a href={github}>
            <i className="nes-icon github is-medium"></i>
          </a>
          <a
            href={`mailto:${email}?subject=Algo-Structures
          &body=Hi%20${name},%20I'm%20contacting%20you%20because...`}
          >
            <i className="nes-icon gmail is-medium"></i>
          </a>
          <a href={linkedin}>
            <i className="nes-icon linkedin is-medium"></i>
          </a>
        </div>
      </div>
      <div className="nes-container">
        <div className="creator-box">
          <img src={imgSrc} alt={`creator image ${name}`} />
        </div>
        <h2>{name}</h2>
        {description}

        {technologies.map((tech) => {
          return <li>{tech}</li>;
        })}

        <div className="creator-icons">
          <a href={github}>
            <i className="nes-icon github is-medium"></i>
          </a>
          <a
            href={`mailto:${email}?subject=Algo-Structures
          &body=Hi%20${name},%20I'm%20contacting%20you%20because...`}
          >
            <i className="nes-icon gmail is-medium"></i>
          </a>
          <a href={linkedin}>
            <i className="nes-icon linkedin is-medium"></i>
          </a>
        </div>
      </div>
      <div className="nes-container">
        <div className="creator-box">
          <img src={imgSrc} alt={`creator image ${name}`} />
        </div>
        <h2>{name}</h2>
        {description}

        {technologies.map((tech) => {
          return <li>{tech}</li>;
        })}

        <div className="creator-icons">
          <a href={github}>
            <i className="nes-icon github is-medium"></i>
          </a>
          <a
            href={`mailto:${email}?subject=Algo-Structures
          &body=Hi%20${name},%20I'm%20contacting%20you%20because...`}
          >
            <i className="nes-icon gmail is-medium"></i>
          </a>
          <a href={linkedin}>
            <i className="nes-icon linkedin is-medium"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
