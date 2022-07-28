import React,{Component} from "react";
import Loading from "./Loading";
import { RoomContext } from "../context";
import Room from "./Room";
import Title from "./Title";
import Rooms from "../Rooms";

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    
    render() {
      //const value = this.context;
      let { loading, featuredRooms: rooms } = this.context;
      rooms = rooms.map((room) => <Room key={room.id} room={room} />);
      return (
        <section className="featured-rooms">
          <Title title="Featured Rooms" />
          <div className="featured-rooms-center">
            {loading ? <Loading /> : rooms}
          </div>
        </section>
      );
    }
  }
  