import { createSignal } from "solid-js";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = createSignal({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5269/api/signup",
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
          type="text"
          name="name"
          placeholder="Enter full name: "
          onChange={(e) => {
            setFormData({ ...formData(), [e.target.name]: e.target.value });
          }}
        />
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
        <button>Signup</button>
      </form>
    </div>
  );
};

export default Signup;
