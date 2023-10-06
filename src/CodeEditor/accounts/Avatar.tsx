interface AvatarProps {
  name: string;
  src: string;
  alt: string;
}

export function Avatar({ name, src, alt }: AvatarProps) {
  return (
    <div className="avatar">
      <img className="avatar-name" src={src} alt={alt} />
      <div className="text-sm">
        <p className="text-gray-900 leading-none">{name}</p>
      </div>
    </div>
  );
}
