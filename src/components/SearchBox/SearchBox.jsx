import s from "./SearchBox.module.css";

const SearchBox = ({ value, onSearch }) => {
  return (
    <div className={s.container}>
      <p className={s.text}>Find contacts by name</p>
      <input
        value={value}
        onChange={(event) => onSearch(event.target.value)}
        type="text"
        className={s.input}
      ></input>
    </div>
  );
};

export default SearchBox;
