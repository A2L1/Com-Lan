import classNames from "classnames"
import { Form as FormikForm } from "formik"

const Form = (props) => (
  <FormikForm
    {...props}
    className={classNames("flex flex-col gap-6", props.className)}
  />
)

export default Form
