import axios from "axios";
import { createSignal } from "solid-js";

const Login = () => {
  const [formData, setFormData] = createSignal({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5269/api/login",
        formData(),
      );
      if (response.status >= 200 && response.status < 300) {
        console.log(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter email: "
          onChange={(e) => {
            setFormData({ ...formData(), [e.target.name]: e.target.value });
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password: "
          onChange={(e) => {
            setFormData({ ...formData(), [e.target.name]: e.target.value });
          }}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
