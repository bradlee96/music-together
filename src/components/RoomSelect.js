import './RoomSelect.scss';
import { useState } from 'react';
// import { useHistory } from 'react-router';

export default function RoomSelect(props) {
  // const history = useHistory();

  const [willJoin, setWillJoin] = useState(false);

  const willJoinRoom = () => { setWillJoin(true) };
  const willNotJoinRoom = () => { setWillJoin(false) };

  return (
    <article>
      <ul className="room-select">
        <li>
          {willJoin && <button className="btn-back" onClick={willNotJoinRoom}><i className="fas fa-arrow-left"></i></button>}
        </li>
        <li>
          <section>
            <hgroup>
              <h1 className="title">Music Together</h1>
              <h2 className="title-description">Listen to music by adding to a shared playlist queue</h2>
            </hgroup>
          </section>
          <section className="btn-group">
            {willJoin ?
              <RoomIDInput joinRoom={props.joinRoom} /> : <>
                <button className="btn-mainmenu" onClick={props.createRoom}>Create room</button>
                <button className="btn-mainmenu" onClick={willJoinRoom}>Join room</button>
              </>
            }
          </section>
        </li>
      </ul>
    </article>
  );
};

const RoomIDInput = (props) => {
  const [roomId, setRoomId] = useState("");

  const handleChange = (event) => setRoomId(event.target.value);
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      joinRoom();
    }
  }
  const joinRoom = () => { props.joinRoom(roomId) };

  return (
    <>
      <input type="text" id="roomId" value={roomId} placeholder="Room ID" onChange={handleChange} onKeyDown={handleKeyDown} />
      <button type="submit" className="btn-mainmenu" onClick={joinRoom}>Join</button>
    </>
  );
}


