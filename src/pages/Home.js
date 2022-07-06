import axios from "axios";
import Form from "../components/Form/Form";
import List from "../components/List/List";
import useFetch from "../hooks/useFetch";
import "./home.css";

const Home = () => {
  const { data, loading, setData } = useFetch("http://localhost:8000/address/");
  const addAddress = async (address) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/address/",
        address
      );
      setData([...data, response.data]);
    } catch (e) {
      throw new Error(e);
    }
  };
  const deleteAddress = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/address/${id}/`);
      setData([...data].filter((el) => el.id !== id));
    } catch (e) {
      throw new Error(e);
    }
  };

  return (
    <div className="App">
      <h1>YDS - Task</h1>
      <Form addAddress={addAddress} />
      <div className="divider" />
      <List list={data} loading={loading} deleteAddress={deleteAddress} />
    </div>
  );
};

export default Home;
