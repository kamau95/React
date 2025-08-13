import ReactDOM from "react-dom/client";
import { useForm } from "react-hook-form";

function App() {
  //unpacking the object return by useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  //when user presses login
  const onSubmit = (data) => {
    console.log(data);
    reset(); // <-- clears the form after submit
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            {...register("email", {
              required: true,
              validate:{
                matchPattern: (value) => /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/.test(value) 
              }
            })}
          />

          {errors.email ?. type === "required" && (<p>Email is required</p>)}
          {errors.email ?. type === "matchPattern" && (<p>Email is invalid</p>)}
          
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            {...register("password", {
              required: true,
              validate: {
                minLength: (value) => value.length >= 7,
                matchPattern: (value) => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)/.test(value)
              }
            })}
          />

          {errors.password ?. type === "required" && (<p>password is required</p>)}
          {errors.password ?. type === "minLength" && (<p>password should be atleast 7 chars</p>)}
          {errors.password ?. type === "matchPattern" && (<p>password is invalid</p>)}

        </div>

        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
