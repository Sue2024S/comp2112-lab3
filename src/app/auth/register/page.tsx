'use client';

import { useForm } from 'react-hook-form';

type FormData = {
  username: string;
  password: string;
  confirm: string;
};

export default function RegisterPage() {
  const { register, handleSubmit, formState: { errors }, watch, } = useForm<FormData>();

}