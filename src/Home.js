import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Clock from 'react-live-clock';

function Home() {
  const [roomId, setroomId] = useState("");
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();

  const handleJoin = () => {
    navigate(`/room/${roomId}`);
  };

  return (
    <>
      <section class="p-5">
        <div class="container">
          <div class="d-sm-flex align-items-center justify-content-between">
            <div>
              <span class="material-icons fs-1 text mb-3 align-middle">
                video_camera_back
              </span>
              <span class="fw-bold fs-3 text">Let's</span>
              <span class="fs-3 text">Meet</span>
            </div>
            <div class="fs-4 d-none d-sm-block">
              <Clock
                date={new Date()}
                format={"hh:mm:ss a . ddd, Do MMM"}
                ticking={true}
                timezone={"IN"}
              />
            </div>
          </div>
        </div>
      </section>

      <section class="p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <div class="container">
          <div class="d-sm-flex align-items-center justify-content-around">
            <div class="m-2">
              <p class="h2">Video calls and meetings for everyone</p>
              <p class="my-4 h4 text-muted">
                Let's Meet provides secure, easy-to-use video calls and meetings
                for everyone, on any device.
              </p>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control mx-2"
                  placeholder="Enter Room ID"
                  value={roomId}
                  onChange={(e) => setroomId(e.target.value)}
                />
                <button
                  class="btn btn-primary btn-lg"
                  onClick={handleJoin}
                  disabled={roomId === ""}
                >
                  <span class="material-icons align-middle">video_call</span>{" "}
                  Join meeting
                </button>
              </div>
            </div>
            <img class="img-fluid w-50 d-none d-sm-block" src="showcase.svg" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
