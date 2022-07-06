import * as yup from "yup";

export const formSchema = yup
  .object({
    area: yup.number().required(),
    name: yup.string().max(250).required(),
    description: yup.string().required(),
    floor_number: yup
      .number()
      .integer()
      .moreThan(-1, "Floor number should be 0 or bigger")
      .required(),
    apartment_number: yup
      .number()
      .positive("Floor number should be 1 or bigger")
      .integer()
      .required(),
  })
  .required();
