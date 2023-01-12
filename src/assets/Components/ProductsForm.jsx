import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";

const ProductsForm = ({ submitButton, sendOfProducsForm, sendAppToForm, sendFormToApp }) => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const getFormData = (data) => {
    if (sendAppToForm === null) {
      sendOfProducsForm(data);
      reset(
        { name: '', 
        category: '', 
        price: '', 
        isAvailable: false }
      )
    } else {
      sendFormToApp(data);
    }
  }

  useEffect(() => {
    if (sendAppToForm === null) {
      reset(
        { name: '', 
        category: '', 
        price: '', 
        isAvailable: false }
      )

    } else {
      reset(sendAppToForm);
    }
  }, [sendAppToForm])

  return (
    <form onSubmit={handleSubmit(getFormData)}>

      <label htmlFor="name-id">Name
        <input
          type="text"
          id="name-id"
          {...register('name')}
        />
      </label>

      <label htmlFor="category-id">Category
        <input
          type="text"
          id="category-id"
          {...register('category')}
        />
      </label>

      <label htmlFor="price-id">Price
        <input
          type="number"
          id="price-id"
          {...register('price')}
        />
      </label>

      <label htmlFor="isAvailable-id">Price
        <input
          type="checkbox"
          id="isAvailable-id"
          {...register('isAvailable')}
        />
      </label>


      <button type='submit'>{submitButton}</button>
    </form>
  );
};

export default ProductsForm;