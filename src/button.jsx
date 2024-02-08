export default function Button({ handleAdd, handleClear }) {
  return (
    <div>
      <button className="add-button" onClick={handleAdd}>
        +
      </button>
      <button className="clear-button" onClick={handleClear}>
        clear
      </button>
    </div>
  );
}
