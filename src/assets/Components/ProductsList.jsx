import React from 'react';


const ProductsList = ({ dataForm, deleteButton, modifyButton, deleteObeject, modifyObject }) => {
  return (
    <ul className='ul'>
      {dataForm.map((obejectForm, index) =>
        <li className='ul__li' key={index}>
          <h2 className='ul__li--h2' >Nombre: {obejectForm.name}</h2>
          <h3 className='ul__li--h3' >Categoria: {obejectForm.category}</h3>
          <h3 className='ul__li--h3' >Precio: {obejectForm.price}</h3>
          <h4 className='ul__li--h4' >Disponibilidad: {String(obejectForm.isAvailable)}</h4>
          <div className='ul__li--div'>
            <button className='ul__li--button' onClick={() => deleteObeject(obejectForm)}>{deleteButton}</button>
            <button className='ul__li--button' onClick={() => modifyObject(obejectForm)}>{modifyButton}</button>
          </div>
        </li>
      )}
    </ul>
  );
};

export default ProductsList;