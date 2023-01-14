import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";

const ProductsForm = ({ submitButton, sendOfProducsForm, sendAppToForm, sendFormToApp }) => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const getFormData = (data) => {
    if (sendAppToForm === null) {
      sendOfProducsForm(data);
      reset(
        {
          name: '',
          category: '',
          price: '',
          isAvailable: false
        }
      )
    } else {
      sendFormToApp(data);
    }
  }

  useEffect(() => {
    if (sendAppToForm === null) {
      reset(
        {
          name: '',
          category: '',
          price: '',
          isAvailable: false
        }
      )

    } else {
      reset(sendAppToForm);
    }
  }, [sendAppToForm])

  return (
    <form className="form" onSubmit={handleSubmit(getFormData)}>
      <div className='form__div'>
        <label className="form__div--label" htmlFor="name-id">Name</label>
        <input className='label__div--input'
          type="text"
          id="name-id"
          {...register('name',{ required: true })}
        />
      </div>
      <div className='form__div'>
        <label className="form__div--label" htmlFor="category-id">Category </label>
        <input className='label__div--input'
          type="text"
          id="category-id"
          {...register('category',{ required: true })}
        />
      </div>
      <div className='form__div'>
        <label className="form__div--label" htmlFor="price-id">Price </label>
        <input className='label__div--input'
          type="number"
          id="price-id"
          {...register('price',{ required: true })}
        />
      </div>
      <div className='form__div'>
        <label className="form__div--label" htmlFor="isAvailable-id">Available </label>
        <input className='label__div--input form__label--inputCheckbox'
          type="checkbox"
          id="isAvailable-id"
          {...register('isAvailable')}
        />
      </div>

      <button className="form-button" type='submit'>{submitButton}</button>
    </form>

  );
};

export default ProductsForm;