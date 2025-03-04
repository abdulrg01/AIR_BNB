export default function Image({src,...rest}) {
  src = src && src.includes('https://')
    ? src
    : 'https://air-bnb-api-fmh6.onrender.com/api/'+src;
  return (
    <img {...rest} src={src} alt={''} />
  );
}