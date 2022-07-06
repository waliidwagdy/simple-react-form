import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import useFetch from "../../hooks/useFetch";
import { formSchema } from "./formSchema";
import { formStyle } from "./formStyle";
import { useLocation, useNavigate } from "react-router-dom";

const Form = ({ addAddress, edit }) => {
  const state = useLocation().state;
  const navigate = useNavigate();
  const { data } = useFetch("http://localhost:8000/address/states/");
  const classes = formStyle();
  const [areas, setAreas] = useState([]);
  const [city, setCity] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: state?.name || "",
      description: state?.description || "",
      floor_number: state?.floor_number || 0,
      apartment_number: state?.apartment_number || 1,
      area: "",
    },
    resolver: yupResolver(formSchema),
  });
  const onSubmit = async (data) => {
    try {
      if (edit) {
        await axios.put(`http://localhost:8000/address/${state.id}/`, data);
        navigate("/");
      } else {
        addAddress(data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const fetchAreas = async (stateId) => {
    try {
      if (stateId) {
        const response = await axios.get(
          `http://localhost:8000/address/states/${stateId}/areas/`
        );
        setAreas(response.data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleCityChange = async (e) => {
    try {
      setCity(e.target.value);
      fetchAreas(e.target.value);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={classes.root}>
      <h2 className={classes.header}>{edit ? "Edit " : "Add "} your address</h2>
      <Paper className={classes.formContainer} elevation={3}>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => <TextField label="Name" {...field} />}
          />
          {errors.name && (
            <span className={classes.error}>{errors.name.message}</span>
          )}
          <Controller
            name="description"
            control={control}
            render={({ field }) => <TextField label="Description" {...field} />}
          />
          {errors.description && (
            <span className={classes.error}>{errors.description.message}</span>
          )}
          <Controller
            name="floor_number"
            control={control}
            render={({ field }) => (
              <TextField type="number" label="Floor number" {...field} />
            )}
          />
          {errors.floor_number && (
            <span className={classes.error}>{errors.floor_number.message}</span>
          )}
          <Controller
            name="apartment_number"
            control={control}
            render={({ field }) => (
              <TextField type="number" label="Apartment number" {...field} />
            )}
          />
          {errors.apartment_number && (
            <span className={classes.error}>
              {errors.apartment_number.message}
            </span>
          )}
          <FormControl>
            <InputLabel id="cities">City</InputLabel>
            <Select
              name="city"
              value={city}
              onChange={handleCityChange}
              labelId="cities"
              label="City"
            >
              {data?.map((city) => (
                <MenuItem
                  key={city.id}
                  value={city.id}
                >{`${city.name}--${city.name_ar}`}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Controller
            name="area"
            control={control}
            render={({ field }) => (
              <FormControl>
                <InputLabel id="areas">Area</InputLabel>
                <Select {...field} labelId="areas" label="Area">
                  {areas?.map((area) => (
                    <MenuItem
                      key={area.id}
                      value={area.id}
                    >{`${area.name}--${area.name_ar}`}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
          {errors.area && (
            <span className={classes.error}>Please select an area</span>
          )}
          <Button className={classes.btn} type="submit" variant="contained">
            {edit ? "Edit" : "Submit"}
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Form;
