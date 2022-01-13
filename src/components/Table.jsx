import { ListGroup } from "react-bootstrap";

const Table = ({ selected, setSelected }) => {
  return (
    <>
      <ListGroup>
        <ListGroup.Item
          className="pointer"
          onClick={(e) => setSelected(e.target.innerText)}
        >
          Browny
        </ListGroup.Item>
        <ListGroup.Item
          className="pointer"
          onClick={(e) => setSelected(e.target.innerText)}
        >
          Whitey
        </ListGroup.Item>
        <ListGroup.Item
          className="pointer"
          onClick={(e) => setSelected(e.target.innerText)}
        >
          Blacky
        </ListGroup.Item>
        <ListGroup.Item
          className="pointer"
          onClick={(e) => setSelected(e.target.innerText)}
        >
          Wolf
        </ListGroup.Item>
      </ListGroup>
      <p className="mt-3">App's state is {selected || "null"}</p>
    </>
  );
}

export default Table;
