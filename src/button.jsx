export default function Button({ handleAdd, handleClear }) {
  return (
    <div>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleClear}>clear</button>
    </div>
  );
}
