import Film from "./Film";

const FilmsList = (props) => {
  return (
    <ul className="FilmsList">
      {props.images.map((elem, index) => {
        return <Film key={index} num={index} image={elem} />;
      })}
    </ul>
  );
};

export default FilmsList;
