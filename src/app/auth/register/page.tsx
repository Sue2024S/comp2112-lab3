'use client';

import { useForm } from 'react-hook-form';

type FormData = {
  username: string;
  password: string;
  confirm: string;
};

export default function RegisterPage() {
  const { register, handleSubmit, formState: { errors }, watch, } = useForm<FormData>();
  return (
    <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        {/* Username */}
            <fieldset>
            <label>Username</label>
            <input {...register('username', { required: 'Username is required' })}/>
            {errors.username && <p>{errors.username.message}</p>}
            </fieldset>
        {/* Password */}
            <fieldset>
            <label>Password</label>
            <input type="password" {...register('password', {required: 'Password is required', minLength: {value: 6, message: 'Password must be at least 6 characters',},})}/>
            {errors.password && <p>{errors.password.message}</p>}
            </fieldset>
        {/* Confirm Password */}
            <fieldset>
                <label>Confirm Password</label>
                <input type="password" {...register('confirm', {required: 'Please confirm your password',validate: (value) => value === password || 'Passwords do not match',})}/>
                {errors.confirm && <p>{errors.confirm.message}</p>}
            </fieldset>
            
            <button type="submit">Register</button>

        </form>
    </div>
         

  );
}