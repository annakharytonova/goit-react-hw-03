import s from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";

const ContactForm = () => {
  const initialValues = { name: "", number: "" };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        <Form className={s.form}>
          <label>
            Name <Field className={s.input} name="name" />
          </label>
          <ErrorMessage className={s.error} component="p" name="name" />
          <label>
            Number <Field className={s.input} name="number" />
          </label>
          <ErrorMessage className={s.error} component="p" name="number" />
          <button className={s.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
