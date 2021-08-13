import React from "react";

import "./BoxChat.css";

function BoxChat(props) {

  return (
    <div className="box-chat">
      <h2 className="title-boxchat">{props.title}</h2>
      {props.children}
    </div>
  );
}

export default BoxChat;
