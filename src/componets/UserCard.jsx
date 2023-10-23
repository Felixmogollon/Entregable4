import { IconSquareRoundedXFilled } from '@tabler/icons-react';
import { data } from 'autoprefixer';
import React from 'react';
import { useForm } from 'react-hook-form';

const UserCard = ({ isShowModal, handleCloseModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset
  } = useForm();

  const handleReset = () => {
    reset({
      birthday: "",
      first_name: "",
      last_name: "",
      email: "",
    });
  };

  return (
    <div className={` absolute bg-opacity-5 bg-gray-400  flex justify-center items-center h-screen w-screen transition-all duration-300 ${isShowModal ? "visible opacity-100" : "invisible opacity-0"}`}>

      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-2/1">
        <div className='flex items-start justify-end'>
          <button onClick={handleCloseModal} type='button' className='bg-black hover:bg-red-600 transition-colors' ><IconSquareRoundedXFilled /> </button>
        </div>
        <h2 className='text-4xl font-semibold text-black mb-10 p-2'>NUEVO USUARIO</h2>
        <form onSubmit={handleSubmit((data) => {
          console.log(data);
          handleReset(); // Esto reseteará el formulario
        })}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="first_name"
            >
              Nombre
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="first_name"
              type="text"
              {...register('first_name', { required: true })}
            />
            {errors.first_name && (
              <p className="text-red-500 text-xs italic">Este campo es requerido</p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="last_name"
            >
              Apellido
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="last_name"
              type="text"
              {...register('last_name', { required: true })}
            />
            {errors.last_name && (
              <p className="text-red-500 text-xs italic">Este campo es requerido</p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">Este campo es requerido</p>
            )}
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Birthday"
            >
              Birthday
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Birthday"
              type="date"
              {...register('birthday')}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              // onClick={handleReset}
              className="bg-indigo-700 hover:bg-indigo-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Agregar Nuevo Usuario
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserCard;