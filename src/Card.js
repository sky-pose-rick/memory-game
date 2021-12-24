function Card(props) {
  const {text, src, alt, onClick} = props;


  return (
    <div className="Card" onClick={onClick}>
      <img src={src} alt={alt}/>
      <p>{text}</p>
    </div>
  );
}

export default Card;
