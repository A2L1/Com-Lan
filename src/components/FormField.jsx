import FormFieldError from "@/components/FormFieldError"
import Input from "@/components/Input"
import { Field } from "formik"

const FormField = (props) => {
  const { as: Component = Input, name, label, ...otherProps } = props

  return (
    <Field name={name}>
      {({ field, meta: { error, touched } }) => (
        <>
          <label>
            <span>{label}</span>
            <Component className="w-full block" {...field} {...otherProps} />
            {touched && error ? <FormFieldError>{error}</FormFieldError> : null}
          </label>
        </>
      )}
    </Field>
  )
}

export default FormField
