import * as React from "react";

export default function ThisUserMessage(props) {
  const [image, setImage] = React.useState(
    "https://mlhmvq6amqed.i.optimole.com/HIId8M4.WANK~27a14/w:940/h:788/q:auto/https://hackspirit.com/wp-content/uploads/2021/06/Copy-of-Rustic-Female-Teen-Magazine-Cover.jpg"
  );

  return (
    <>
      <div
        className="otherUserPic"
        style={{ backgroundImage: `url(${image})` }}
      />

      <div className="rightMessage">
        <p className="messageContent">{props.value}</p>
      </div>
    </>
  );
}
