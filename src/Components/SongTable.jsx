import { Table } from "react-bootstrap";
import "./SongTable.css";

const SongTable = (props) => {
  console.log(props.tableSongList);

  return (
    <Table striped bordered hover className="table">
      <thead>
        <tr hidden={props.hideTable}>
          <th>Title</th>
          <th>Album</th>
          <th>Artist</th>
          <th>Genre</th>
          <th>Release Date</th>
        </tr>
      </thead>
      <tbody>
        {props.tableSongList.map((tableSongList, index) => {
          return (
            <tr hidden={props.hideTable} key={index}>
              <td >{tableSongList.title}</td>
              <td>{tableSongList.album}</td>
              <td>{tableSongList.artist}</td>
              <td>{tableSongList.genre}</td>
              <td>{tableSongList.releaseDate}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default SongTable;
