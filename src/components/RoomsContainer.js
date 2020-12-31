import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from "./RoomsList";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";

function  RoomsContainer({context}) {
    const {loading,sortedRooms,rooms} = context;
    if(loading){
        return <Loading />
    }
    return(
        <React.Fragment>
          <RoomsFilter rooms={rooms}/>
          <RoomsList rooms={sortedRooms}/>
        </React.Fragment>
    );
}

export default withRoomConsumer(RoomsContainer);

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {value=>{
//                 console.log(value);
//                 const {loading,sortedRooms,rooms} = value;
//                 if(loading){
//                     return <Loading />
//                 }
//                 return(
//                   <div>
//                     Hello From Rooms RoomsContainer
//                     <RoomsFilter rooms={rooms}/>
//                     <RoomsFilter rooms={sortedRooms}/>
//                   </div>
//                 );
//             }}
//         </RoomConsumer>
//     )
// }
