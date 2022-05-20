import "./Tag.css";

function Tag({ tagName }) {
  return (
    <div>
      <div className="Tags"> {tagName}</div>
    </div>
  );
}

export default Tag;
