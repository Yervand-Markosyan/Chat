import React from "react";
import { useDispatch } from 'react-redux'
import Avatar from './Avatar'
import Personalinfo from './Personalinfo'
import close from './icons/close.svg'
import Pictures from './Pictures'
import Files from './Files'
import "./section3.css";

function Section3() {
  const dispatch = useDispatch()

  function handlerClose() {    
    dispatch({type: 'CHANGE-SECTION3', payload: false})
  }

  return (
    <>
      <div className="section3">
        <header>
          <img src = {close} alt = '/' onClick = {handlerClose}/>
        </header>

        <Avatar />
        <Personalinfo />
        <Pictures />
        <Files />
      </div>
    </>
  );
}

// class Section3 extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       image:
//         "https://mlhmvq6amqed.i.optimole.com/HIId8M4.WANK~27a14/w:940/h:788/q:auto/https://hackspirit.com/wp-content/uploads/2021/06/Copy-of-Rustic-Female-Teen-Magazine-Cover.jpg",
//       name: "Lusine Petrosyan",
//       online: false
//     };
//   }

//   render() {
//     return (
//       <>
//         <div className="section3">
//           <header>
//             <p>x</p>
//           </header>

//           <div className="picAndFullName">
//             <div className='section3Pic' style={{ backgroundImage: `url(${this.state.image})`}}></div>
//             <div className="Section3OnlineRound"></div>
//             <h4 className="fullNameGeneral">{this.state.name}</h4>
//             <div className="section3Online">
//                 <p>{online ? "online" : `${new Date().getMinutes()} minutes ago`}</p>
//                 <div
//                   className="section3Round"
//                   style={{
//                     backgroundColor: online ? "green" : "grey"
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//       </>
//     );
//   }
// }

export default Section3;
