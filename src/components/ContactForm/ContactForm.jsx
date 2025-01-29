import s from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const ContactForm = ({ onSubmit }) => {
  const initialValues = { name: "", number: "" };

  const onlyLetters = /^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/;
  const phoneRegex = /^\d{3}-\d{2}-\d{2}$/;

  const schema = Yup.object().shape({
    name: Yup.string()
      .required("Це поле має бути заповнено!")
      .min(3, "Мінімум 3 символи!")
      .max(50, "Максимум 50 сиволів!")
      .matches(onlyLetters, "Тільки літери!"),
    number: Yup.string()
      .required("Це поле має бути заповнено!")
      .min(9, "Мінімум 9 символів!")
      .matches(phoneRegex, "Номер телефону має бути в форматі ххх-хх-хх"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values);
          resetForm();
        }}
      >
        {() => (
          <Form className={s.form}>
            <label>
              Name <Field className={s.input} name="name" placeholder="Name" />
            </label>
            <ErrorMessage className={s.error} component="p" name="name" />
            <label>
              Number{" "}
              <Field
                className={s.input}
                name="number"
                placeholder="000-00-00"
              />
            </label>
            <ErrorMessage className={s.error} component="p" name="number" />
            <button className={s.button} type="submit">
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
