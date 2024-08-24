import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Email inválido").required("Email é obrigatório"),
  password: Yup.string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("Senha é obrigatória"),
});

const handleSubmit = (values: { email: string; password: string }) => {
  console.log("Email:", values.email);
  console.log("Password:", values.password);
};

const Login = () => {
  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form style={styles.form}>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="email">
                Email:
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                style={styles.input}
              />
              <ErrorMessage name="email" component="div" style={styles.error} />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="password">
                Password:
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                style={styles.input}
              />
              <ErrorMessage
                name="password"
                component="div"
                style={styles.error}
              />
            </div>
            <button type="submit" style={styles.button}>
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#F7ECE1",
    width: "100vw",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    padding: "20px",
    borderRadius: "8px",
  },
  formGroup: {
    marginBottom: "15px",
  },
  input: {
    padding: "8px",
    borderRadius: "18px",
    border: "1px solid #ccc",
    width: "282px",
  },
  label: {
    marginLeft: "5px",
    fontWeight: "bold",
  },
  button: {
    padding: "10px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#9067C6",
    color: "#fff",
    cursor: "pointer",
    width: "300px",
  },
  error: {
    color: "red",
    fontSize: "12px",
    marginLeft: "5px",
    marginTop: "5px",
  },
};

export default Login;
