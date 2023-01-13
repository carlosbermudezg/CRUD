import React from 'react';

const PopUp = ({text,imagen}) => {
  return (
    <div className='div--create' >
      <div className='div__div--create'>
        <h2 className='div__h2--create'>{text}</h2>
        <img className='div__img--create' src={`${imagen}`} alt="cheque" />
      </div>

    </div>
  );
}

export default PopUp;