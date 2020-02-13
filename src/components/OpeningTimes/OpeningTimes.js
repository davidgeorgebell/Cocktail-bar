import React from 'react';

import './OpeningTimes.css';

const OpeningTimes = () => {
  return (
    <div className='opening-times-wrapper'>
      <p className='open-time'>Monday // 6pm - 12.30am</p>
      <p className='open-time'>Tuesday // 6pm - 12.30am</p>
      <p className='open-time'>Wednesday // 6pm - 12.30am</p>
      <p className='open-time'>Thursday // 6pm - 2.30am</p>
      <p className='open-time'>Friday // 6pm - 2.30am</p>
      <p className='open-time'>Saturday // 6pm - 2.30am</p>
      <p className='open-time'>Sunday // CLOSED</p>
    </div>
  );
};
export default OpeningTimes;
