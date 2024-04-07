import './forms.scss';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

export default function InscriptionForm() {
  const [pwConfirmError, setPwConfirmError] = useState('');
  const [uniqueErrorEmail, setErrorUniqueEmail] = useState('');
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const checkPasswordIntegrity = (password, confirmPassword) => {
    if (password === confirmPassword) {
      return true;
    }
    setErrorUniqueEmail('');
    setPwConfirmError('Les mots de passe ne correspondent pas.');
    return false;
  };

  const fetchCreateUser = (mail, password) => {
    const urlApi = process.env.REACT_APP_API_URL;
    axios
      .post(`${urlApi}users`, {
        email: mail,
        plainPassword: password,
      })
      .then((response) => {
        if (response.status === 201) {
          return navigate('/login');
        }
      })
      .catch((error) => {
        if (error.response.status === 422) {
          setPwConfirmError('');
          setErrorUniqueEmail('Cet email existe déjà.');
        }
      });
  };

  const onSubmit = (data) => {
    if (checkPasswordIntegrity(data.password, data.confirmPassword)) {
      fetchCreateUser(data.email, data.password);
    }
  };

  return (
    <section>
      <h1 className="title">Inscription</h1>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            {...register('email', {
              required: "l'adresse email est obligatoire",
            })}
          />
          {errors.email && <span>{errors.mail.message}</span>}
          {uniqueErrorEmail && <span>{uniqueErrorEmail}</span>}
        </div>
        <div className="form__group">
          <label htmlFor="password">Mot de passe</label>
          <input
            id="password"
            type="password"
            name="password"
            {...register('password', {
              required: 'Le mot de passe doit être renseigné',
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div className="form__group">
          <label htmlFor="confirmPassword">Confirmation de mot de passe</label>
          <input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            {...register('confirmPassword')}
          />
          {pwConfirmError && <span>{pwConfirmError}</span>}
        </div>
        <button className="form__btn">Inscription</button>
      </form>
    </section>
  );
}
