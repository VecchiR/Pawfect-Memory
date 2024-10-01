import { useState } from 'react';
import '../style/HelpBadge.css';
import * as helpIcon from '../assets/helpIcon.svg';

export default function HelpBadge() {
  const [showRules, setShowRules] = useState(false);

  const handleHover = () => {
    setShowRules(true)
  };

  const handleMouseLeave = () => {
    setShowRules(false)

  };

  return (
    <div className="help-badge" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
      <img src={helpIcon.default} alt="" />
      {showRules ? (
        <div className="rules">
          <ul>
            <li>Click on each dog only ONCE!</li>
            <li>Click on the logo to return to home page</li>
          </ul>
        </div>
      ) : null}
    </div>
  );

  // return (
  //   <div className="help-badge" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
  //     <img src={helpIcon.default} alt="" />
  //       <div className="rules">
  //         <ul>
  //           <li>Do this here, actually written right here</li>
  //           <li>And then, there's this important thing here, also</li>
  //         </ul>
  //       </div>
  //   </div>
  // );


}
