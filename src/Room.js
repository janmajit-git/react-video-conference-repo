import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import {v4} from "uuid";

function Room() {

    const {roomId} = useParams();

    let myMeeting = async (element) => {

      // generate Kit Token
      const appID = 1355160559;
      const serverSecret = "3e0e6184693333e4ac74c5e5f08f92a9";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,  v4(),  "Janmajit");
     
      // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
      zp.joinRoom({
             container: element,
             scenario: {
              mode: ZegoUIKitPrebuilt.VideoConference,
             },
        });
       };
     
    return (
        <>
          <h2>Room {roomId}</h2>
          <div ref={myMeeting}></div>

        </>
    );
};

export default Room;