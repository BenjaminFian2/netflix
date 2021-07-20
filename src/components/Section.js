import Title from "./Title";
import FilmsList from "./FilmsList";

const Section = (props) => {
  return (
    <section className="Section">
      <Title title={props.title} />
      <FilmsList images={props.images} />
    </section>
  );
};

export default Section;
