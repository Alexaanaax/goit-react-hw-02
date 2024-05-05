import css from "./Description.module.css";

const Description = ({ name, descr, message }) => {
  return (
    <>
      <h1>{name}</h1>
      <p>{descr}</p>
      <p>{message}</p>
    </>
  );
};

export default Description;
