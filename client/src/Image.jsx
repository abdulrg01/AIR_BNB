export default function Image({src,...rest}) {
  src = src && src.includes('https://')
    ? src
    : 'http://localhost:3500/api/'+src;
  return (
    <img {...rest} src={src} alt={''} />
  );
}