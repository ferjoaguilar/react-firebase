import { useState } from "react"
import { useForm } from "react-hook-form"
import {getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import app from '../utils/firebase'
import { useNavigate } from "react-router-dom"
import useLoading from "../hooks/useLoading"

const Signup = () => {

  const auth = getAuth(app)

  // TAREA: MANEJAR ESTADOS DE ERRORES CON CUSTOM HOOK
  const [error, setError] = useState()
  
  //const [loading, setLoading] = useState(false)
  const {loading, startLoading, stopLoading} = useLoading()

  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate = useNavigate()

  const createNewUser = async (data) => {
    const {email, password} = data

    //setLoading(true)
    startLoading

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      navigate('/login')
      //setLoading(false)
      stopLoading
    } catch (error) {
      setError(error.message)
      //setLoading(false)
      stopLoading
    }
  }


  return (
    <>
      <div className="container mt-5 d-flex align-items-center justify-content-center">
            <div className="card" style={{width: 18+'rem'}}>
                <div className="card-body">
                    <h5 className="card-title text-center">Create new account</h5>

                    <form onSubmit={handleSubmit(createNewUser)}>
                    <div className="mb-4">
                        <input 
                          type="text" 
                          className="form-control" 
                          {...register("email", {required: true})}
                          placeholder="type your E-mail"
                        />
                      { errors.email && <p>Email is required</p>  }

                    </div>
                    <div className="mb-2">
                        <input 
                          type="password" 
                          className="form-control" 
                          {...register("password", {required: true})}
                          placeholder="type your password"
                        />
                        { errors.password && <p>Password is required</p>  }
                    </div>

                    <div className="d-grid gap-2">
                      {
                        loading ? (
                          <button className="btn btn-primary btn-block mt-3" disabled>Creating new user...</button>
                        ) : (
                          <button className="btn btn-primary btn-block mt-3">Sign up</button>
                        )
                      }
                    </div>

                    {
                      error && (
                        <div className="alert alert-danger mt-3">
                          {error}
                        </div>
                      )
                    }
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Signup