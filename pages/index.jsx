import Button from "@/components/Button"
import Form from "@/components/Form"
import FormField from "@/components/FormField"
import Page from "@/components/Page"
import { Formik } from "formik"

const initialValues = {
  username: "",
  password: "",
}

const IndexPage = () => {
  const handleFormSubmit = async (values) => {
    console.log(values)
  }

  return (
    <div className="">
      <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
        {({ isSubmitting, isValid }) => (
          <Form>
            <FormField name="username" placeholder="Username" />
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
