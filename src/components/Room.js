import './Room.scss';
import Search from './Search.js';
import Queue from './Queue.js';
import Player from './Player.js';

export default function Room(props) {
  return (
    <>
      {/* <p>roomId = {props.roomId}</p>  */}
      <article className="room">
        <Search />
        <Player />
        {/* <p>roomId = {props.roomId}</p>  */}
        <Queue />
      </article>
    </>
  );
};