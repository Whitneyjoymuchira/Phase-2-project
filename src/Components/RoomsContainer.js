import React from 'react'
import RoomsList from './RoomsList'
import RoomsFilter from './RoomsFilter'
import Loading from './Loading';
import { withRoomConsumer } from '../context';

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);

