import React from 'react';


const ProductsList = ({ dataForm, deleteButton, modifyButton, deleteObeject, modifyObject }) => {
  return (
    <ul className='ul'>
      {dataForm.map((obejectForm, index) =>
        <li className={obejectForm.isAvailable
          ?
          'ul__li--disponible'
          :
          'ul__li--NoDisponible'}
          key={index}>
          <h2 className='ul__li--h2' ><span >Nombre: </span>{obejectForm.name}</h2>
          <h3 className='ul__li--h3' ><span>Categoria: </span> {obejectForm.category}</h3>
          <h3 className='ul__li--h3' > <span>Precio: </span> {obejectForm.price}</h3>
          {obejectForm.isAvailable ?
            <h4 className='ul__li--h4' >Disponible </h4>
            :
            <h4 className='ul__li--h4' >No Disponible</h4>
          }
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


