import './MainView.scss';
import { useState } from 'react';
import RoomSelect from '../components/RoomSelect.js';
import Room from '../components/Room.js';

export default function MainView() {
  const [roomId, setRoomId] = useState(null);
  const createRoom = () => {
    setRoomId("ABCD");
  };
  const joinRoom = (id) => {
    setRoomId(id);
  };

  return (
    <>
      {roomId ?
        <Room roomId={roomId} /> : <RoomSelect createRoom={createRoom} joinRoom={joinRoom} />
      }
    </>
  );
};