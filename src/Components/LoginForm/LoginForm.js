import './login-form.scss';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LoginForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const urlApi = process.env.REACT_APP_API_URL;
    try {
      axios
        .post(`${urlApi}login_check`, {
          username: data.email,
          password: data.password,
        })
        .then((response) => {
          sessionStorage.setItem('token', response.data.token);
          navigate('/');
        });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className="login">
      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="login__form__group">
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
        </div>
        <div className="login__form__group">
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
        <button className="login__form__btn">Connexion</button>
      </form>
    </section>
  );
}
