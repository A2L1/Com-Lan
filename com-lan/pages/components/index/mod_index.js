import { Formik, Field } from "formik";
//import * as yup from "yup";
//import FormField from "./components/FormField";

const initialValues = { username: "" };

const Form = () => {
  const handleFormSubmit = async (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
      {({ handleSubmit, isSubmitting, isValid }) => (
        <form className="p-5" onSubmit={handleSubmit} noValidate>
          <Field
            as="input"
            name="username"
            type="username"
            placeholder="Username"
          />
          <p>
            <button type="submit">Submit</button>
          </p>
        </form>
      )}
    </Formik>
  );
};
// prisme OREM backend sqlite
export default Form;

/*import { Formik, Field } from "formik";

const initialValues = { username: "" };
const Form = () => {
  const handleFormSubmit = async (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
      {({ handleSubmit, isSubmitting, isValid }) => (
        <form onSubmit={handleSubmit} noValidate>
          <p>
            <Field
              as="input"
              name="username"
              type="username"
              placeholder="Username"
            />
          </p>
          <p>
            <button type="submit">Submit</button>
          </p>
        </form>
      )}
      ;
    </Formik>
  );
};

export default Form;
*/
