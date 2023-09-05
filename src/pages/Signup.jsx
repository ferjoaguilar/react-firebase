import { useForm } from "react-hook-form"

const Signup = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const createNewUser = data => {
    console.log(data)
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
                        <button className="btn btn-primary btn-block mt-3">Sign up</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Signup