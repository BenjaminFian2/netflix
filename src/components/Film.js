const Film = (props) => {
  return (
    <li className="Film">
      <img src={props.image} alt={`film ${props.num + 1}`} />
    </li>
  );
};

export default Film;
