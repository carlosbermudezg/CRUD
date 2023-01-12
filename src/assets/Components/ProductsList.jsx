import React from 'react';


const ProductsList = ({dataForm,deleteButton,modifyButton,deleteObeject,modifyObject}) => {
  return (
    <ul>
      {dataForm.map((obejectForm,index) => 
      <li key={index}>
        <h2>{obejectForm.name}</h2>
        <h3>{obejectForm.category}</h3>
        <h3>{obejectForm.price}</h3>
        <h4>{String(obejectForm.isAvailable)}</h4>
        <button onClick={()=>deleteObeject(obejectForm)}>{deleteButton}</button>
        <button onClick={()=>modifyObject(obejectForm)}>{modifyButton}</button>
      </li>
      )}
    </ul>
  );
};

export default ProductsList;