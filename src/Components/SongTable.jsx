import { Table } from "react-bootstrap";
import './SongTable.css'

const SongTable = (props) => {
  return (
    <Table striped bordered hover className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Album</th>
          <th>Artist</th>
          <th>Genre</th>
          <th>Release Date</th>
        </tr>
      </thead>
      <tbody>
        {props.tempSongList.map((songList, index) => {
          return (
            <tr key={index}>
              <td>{songList.title}</td>
              <td>{songList.album}</td>
              <td>{songList.artist}</td>
              <td>{songList.genre}</td>
              <td>{songList.releaseDate}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default SongTable;
