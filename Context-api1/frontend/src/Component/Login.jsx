import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

const Login = () => {

    const {setUser, user} = useContext(UserContext);

    const [formData , setFormData] = useState({userName:"",password:""});

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(formData);
        setUser(formData);
    }

  return (
    <div className='w-full flex justify-center in-checked:'>
      <form onSubmit={onSubmitHandler} className='flex flex-col gap-6'>
        <input type="text" placeholder='Username...' autoComplete='username' value={formData.userName} onChange={(e)=>{setFormData((prev)=>({...prev, userName:e.target.value}))}} />
        <input type="password" placeholder='Password...' autoComplete='current-password' value={formData.password} onChange={(e)=>{setFormData((prev)=>({...prev, password:e.target.value}))}} />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Login
