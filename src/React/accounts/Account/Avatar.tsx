interface AvatarProps {
  name: string;
  src: string;
}

export function Avatar({ name, src }: AvatarProps) {
  return (
    <div className="avatar">
      <img className="avatar-img" src={src} alt={name} />
      <div className="text-sm">
        <p className="text-gray-900 leading-none">{name}</p>
      </div>
    </div>
  );
}
