import classNames from "classnames"

const FormFieldError = (props) => (
  <div
    {...props}
    className={classNames("text-red-600 text-sm mt-2", props.className)}
  />
)

export default FormFieldError
