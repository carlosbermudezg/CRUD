import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

const ProductsForm = ({ submitButton, sendOfProducsForm, sendAppToForm, sendFormToApp }) => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();


  const getFormData = (data) => {
    if (sendAppToForm === null) {
      sendOfProducsForm(data);
      reset(
        {
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          birthday: ''
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
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          birthday: ''
        }
      )

    } else {
      reset(sendAppToForm);
    }
  }, [sendAppToForm])

  return (
    <form className="form" onSubmit={handleSubmit(getFormData)}>
      <div className='form__div'>
        <label className="form__div--label" htmlFor="first-name">Name</label>
        <input className='label__div--input'
          type="text"
          id="first-name"
          {...register('first_name', { required: true })}
        />
        {
          errors.first_name
          &&
          <label htmlFor='first-name' className='label__error'>Este campo es requerido</label>
        }
      </div>

      <div className='form__div'>
        <label className="form__div--label" htmlFor="last_name">Last Name </label>
        <input className='label__div--input'
          type="text"
          id="last_name"
          {...register('last_name', { required: true })}
        />
        {
          errors.last_name
          &&
          <label htmlFor='last_name' className='label__error'>Este campo es requerido</label>
        }
      </div>

      <div className='form__div'>
        <label className="form__div--label" htmlFor="email">Email </label>
        <input className='label__div--input'
          type="text"
          id="email"
          {...register('email', { required: true })}
        />
        {
          errors.email
          &&
          <label htmlFor='email' className='label__error'>Este campo es requerido</label>
        }
      </div>

      <div className='form__div'>
        <label className="form__div--label" htmlFor="email">Password </label>
        <input className='label__div--input'
          type="password"
          id="password"
          {...register('password', { required: true })}
        />
        {
          errors.password
          &&
          <label htmlFor='password' className='label__error'>Este campo es requerido</label>
        }
      </div>
      <div className='form__div'>
        <label className="form__div--label" htmlFor="birthday">Birthday </label>
        <input className='label__div--input'
          type="date"
          id="birthday"
          {...register('birthday', { required: true })}
        />
        {
          errors.birthday
          &&
          <label htmlFor='birthday' className='label__error'>Este campo es requerido</label>
        }
      </div>

      <button className="form-button" type='submit'>{submitButton}</button>
    </form>

  );
};

export default ProductsForm;