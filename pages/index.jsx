/* eslint-disable no-console */
import Button from "@/components/Button"
import Form from "@/components/Form"
import FormField from "@/components/FormField"
import Page from "@/components/Page"
import { Formik } from "formik"
import axios from "axios"

const initialValues = {
  username: "",
  password: "",
}

const IndexPage = () => {
  const handleFormSubmit = async (values) => {
    console.log(values)
    const data = { username: values.username, password: values.password }
    await axios.post("http://localhost:3000/api/device", data).then((response)=>(console.log(response)))
  }

  return (
    <div className="">
      <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
        {({ isSubmitting, isValid }) => (
          <Form>
            <FormField name="username" placeholder="Username" />
            <FormField name="password" placeholder="Password" />
            <p>
              <Button type="submit" disabled={isSubmitting || !isValid}>
                Submit
              </Button>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  )
}

IndexPage.getLayout = (page) => <Page title="Sign In">{page}</Page>

export default IndexPage
