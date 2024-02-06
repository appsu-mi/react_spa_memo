export default function Items({ handleEdit }) {
  const keys = Object.keys(localStorage);
  const sortedKeys = keys.toSorted((a, b) => b - a);

  const items = sortedKeys.map((key) => {
    return (
      <li className="item" onClick={() => handleEdit(key)} key={key}>
        {localStorage.getItem(key).split("\n")[0]}
      </li>
    );
  });

  return <ul>{items}</ul>;
}
