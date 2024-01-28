export default function Items({ handleEdit }) {
  const keys = Object.keys(localStorage);
  const sorted_keys = keys.toSorted((a, b) => b - a);

  const items = sorted_keys.map((key) => {
    return (
      <li className="item" onClick={() => handleEdit(key)} key={key}>
        {localStorage.getItem(key).split("\n")[0]}
      </li>
    );
  });

  return <ul>{items}</ul>;
}
