import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './componets/UserCard'
import axios, { Axios } from 'axios'
import { useEffect,  } from 'react'
import { BASE_URL } from './constans/users'
import UsersList from './componets/UsersList'


function App() {
  const [isShowModal, setIsShowModal] = useState(false)
  const [users, setUsers] = useState([]);

  const handleOpenModal = (e) => {
    console.log("click")
   setIsShowModal(true)
    
  }

  const handleCloseModal = () => {
    setIsShowModal(false)
  }


  const backgroundStyles = {
    backgroundImage: 'url("./fondo entregable4.jpg")', // Ajusta la URL de tu imagen
    backgroundSize: 'cover', // Ajusta el tamaño para cubrir todo el contenedor
    backgroundPosition: 'center', // Ajusta la posición a centrada
    backgroundRepeat: 'no-repeat', // Evita la repetición de la imagen de fondo
  };
  useEffect(() => {
    axios.get( BASE_URL + "/users/")
    .then(({data}) => console.log(data))
    .catch((err) => console.log(err))
  
    
  }, [])
  useEffect(() => {
    axios
      .get(BASE_URL + '/users/')
      .then(({ data }) => setUsers(data)) 
      .catch((err) => console.log(err));
  }, []);
  

  return (
    <>
    <main className=' text-white h-screen w-screen flex flex-col items-center p-5 ' 
    style={backgroundStyles}
      >
        <button  onClick={handleOpenModal} className='text-xl text-white border border-black bg-indigo-700 p-2 mt-5 rounded-md '>Crear Nuevo Usuario</button>
    
      
      <UserCard isShowModal={isShowModal}  handleCloseModal={handleCloseModal} />
      <UsersList users={users} />
      </main>
    </>
  )
}

export default App
