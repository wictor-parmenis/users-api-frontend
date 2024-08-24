// src/Signup.tsx
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

// Validação com Yup
const validationSchema = Yup.object({
  email: Yup.string().email("Email inválido").required("Email é obrigatório"),
  password: Yup.string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("Senha é obrigatória"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "As senhas devem coincidir")
    .required("Confirmação da senha é obrigatória"),
});

// Função para tratar o envio do formulário
const handleSubmit = (values: {
  email: string;
  password: string;
  confirmPassword: string;
}) => {
  console.log("Email:", values.email);
  console.log("Password:", values.password);
  // Aqui você pode adicionar a lógica para criar uma conta
};

const SignUp = () => {
  return (
    <div style={styles.container}>
      <h2>Criar Conta</h2>
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
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
                Senha:
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
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="confirmPassword">
                Confirme a Senha:
              </label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                style={styles.input}
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                style={styles.error}
              />
            </div>
            <button type="submit" style={styles.button}>
              Criar Conta
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
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
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
    width: "300px",
    cursor: "pointer",
    transition: "background-color 0.3s", // Adiciona uma transição suave para a cor de fundo
  },

  error: {
    color: "red",
    fontSize: "12px",
    marginLeft: "5px",
    marginTop: "5px",
  },
};

export default SignUp;
