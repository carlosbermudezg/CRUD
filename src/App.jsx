import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css'
import ProductsForm from './assets/Components/ProductsForm';
import ProductsList from './assets/Components/ProductsList';


function App() {
  //Hooks
  const [updateProducts, setUpdateProducts] = useState(null);
  const [data, useData] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isUpdate, setIsUpdate,] = useState(false);

  //Function

  function timeInScreen(setHook) {
    setHook(true)
    setTimeout(() => {
      setHook(false)
    }, 3000)
  }

  //  GET request 
  const getData = async () => {
    setIsLoad(true)
    try {
      const reply = await axios.get('https://products-crud.academlo.tech/products/')
      if (reply.status === 200) {
        useData(reply.data)
      }
    } catch (error) {
      setIsError(error);

    } finally {
      setIsLoad(false)
    };
  }

  useEffect(() => {
    getData()
  }, []);

  //  POST request 
  const sendOfProducsForm = (body) => {

    const postData = async () => {
      setIsLoad(true)
      try {
        const reply = await axios.post('https://products-crud.academlo.tech/products/', body);
        if (reply.status === 201) {
          getData();
          timeInScreen(setIsCreated);
        }
      } catch (error) {
        setIsError(error);

      } finally {
        setIsLoad(false)
      };
    }
    postData();
  };

  //  DELETE request 
  const deleteObeject = (body) => {

    const postData = async () => {
      setIsLoad(true)
      try {
        const reply = await axios.delete(`https://products-crud.academlo.tech/products/${body.id}/`);
        if (reply.status === 204) {
          getData();
          timeInScreen(setIsDelete);
        }
      } catch (error) {
        setIsError(error);

      } finally {
        setIsLoad(false)
      };
    };
    setUpdateProducts(null)
    postData();

  };

  // PUT request 
  const modifyObject = (body) => {
    setUpdateProducts(body);
  }

  const sendFormToApp = (body) => {

    const postData = async () => {
      setIsLoad(true)
      try {
        const reply = await axios.put(`https://products-crud.academlo.tech/products/${body.id}/`, body);
        if (reply.status === 200) {
          getData();
          timeInScreen(setIsUpdate);
        }
      } catch (error) {
        setIsError(error);

      } finally {
        setIsLoad(false)
      };
    }
    setUpdateProducts(null)
    postData();
  }

  // componentes
  const componentProductsForm =
    <ProductsForm
      submitButton={'Send'}
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

      {isLoad&&<h2>cargando ...</h2>}
      {isCreated&&<h2>creado con exito</h2>}
      {isDelete&&<h2>Delete con exito</h2>}
      {isUpdate&&<h2>Update con exito</h2>}

      {componentProductsForm}

      {componentProductsList}

    </div>
  )
}

export default App
