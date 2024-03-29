import React from 'react';


const ProductsList = ({ dataForm, deleteButton, modifyButton, deleteObeject, modifyObject }) => {
  return (
    <ul className='ul'>
      {dataForm.map((obejectForm, index) =>
        <li className={obejectForm.isAvailable
          ?
          'ul__li--disponible'
          :
          'ul__li--disponible'}
          key={index}>
          <h2 className='ul__li--h2' ><span className='li__h2--span' >Name: </span>{obejectForm.first_name}</h2>
          <h3 className='ul__li--h3' ><span className='li__h2--span'>Last Name: </span> {obejectForm.last_name}</h3>
          <h3 className='ul__li--h3' ><span className='li__h2--span'>Email: </span> {obejectForm.email}</h3>
          <h3 className='ul__li--h3' ><span className='li__h2--span'>Birthday: </span> {obejectForm.birthday}</h3>
          <div className='ul__li--div'>
            <button className='ul__li--button' onClick={() => deleteObeject(obejectForm)}>{<img className='button--icon' src={`${deleteButton}`} alt="delete" />}</button>
            <button className='ul__li--button' onClick={() => modifyObject(obejectForm)}>{<img className='button--icon' src={`${modifyButton}`} alt="delete" />}</button>
          </div>
        </li>
      )}
    </ul>

  );
};

export default ProductsList;


