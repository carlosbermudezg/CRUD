import axios from 'axios';
import { useState } from 'react';
import './App.css'
import ProductsForm from './assets/Components/ProductsForm';
import ProductsList from './assets/Components/ProductsList';
import useGetApi from './assets/custom Hooks/useGetApi';

function App() {

  //Hooks
  const [updateProducts, setUpdateProducts] = useState(null)

  const { data, getData } = useGetApi('https://products-crud.academlo.tech/products/');

  // peticionPost
  const sendOfProducsForm = (body) => {
    axios
      .post('https://products-crud.academlo.tech/products/', body)
      .then(() => getData())
      .catch(error => console.log(error))
  };

  // peticionDelete
  const deleteObeject = (body) => {
    axios
      .delete(`https://products-crud.academlo.tech/products/${body.id}/`)
      .then(() => getData())
      .catch(error => console.log(error))
      setUpdateProducts(null)
  };

  //peticionPut
  const modifyObject = (body) => {
    setUpdateProducts(body);
  }

  const sendFormToApp = (body) => {
    axios
      .put(`https://products-crud.academlo.tech/products/${body.id}/`, body)
      .then(() => getData())
      .catch(error => console.log(error))
      setUpdateProducts(null)
  }



  // componentes
  const componentProductsForm =
    <ProductsForm
      submitButton={'send'}
      sendOfProducsForm={sendOfProducsForm}
      sendAppToForm={updateProducts}
      sendFormToApp={sendFormToApp}
    />;
  const componentProductsList =
    <ProductsList
      dataForm={data}
      deleteButton={'Delete'}
      modifyButton={'Moddify'}
      deleteObeject={deleteObeject}
      modifyObject={modifyObject}
    />;





  return (
    <div className="App">

      {componentProductsForm}

      {componentProductsList}

    </div>
  )
}

export default App
