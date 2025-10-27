export default function Button({ onClick, icon }) {
  return (
    <button className="icon-button" type="submit" onClick={onClick}>
      <span className={`material-symbols-outlined ${icon}`}>{icon}</span>
    </button>
  );
}
