interface CreatorCardProps {
  name: string;
  description: string;
  imgSrc: string;
  github: string;
  linkedin: string;
  technologies: string[];
}

export function CreatorCard({
  name,
  description,
  imgSrc,
  github,
  linkedin,
  technologies,
}: CreatorCardProps) {
  return (
    <div>
      <h2>
        {name} {description} {imgSrc} {github} {linkedin} {technologies}
      </h2>
    </div>
  );
}
