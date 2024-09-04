import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { FormikProps, useFormik } from "formik";
import { KeyboardEvent, RefObject, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import LoginImage from "../../../assets/login-page-2.jpg";
import { CustomBox } from "../../../components/custom-box";
import { useAuth } from "../../../context/auth";
import { Container } from "./styles";

const validationSchema = Yup.object({
  email: Yup.string().email("Email inválido").required("Email é obrigatório"),
  name: Yup.string().required("Nome é obrigatório"),
  password: Yup.string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("Senha é obrigatória"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "As senhas devem coincidir")
    .required("Confirmação da senha é obrigatória"),
});

interface SignUpFormValues {
  email: string;
  password: string;
  name: string;
  repeatPassword: string;
}

const SignUp = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const repeatPasswordRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const handleSubmit = async (values: SignUpFormValues) => {
    await signUp(values);
    navigate("/");
  };

  function handleKeyDown(
    event: KeyboardEvent<HTMLInputElement>,
    nextFieldRef: RefObject<HTMLInputElement> | null,
    formikProps: FormikProps<SignUpFormValues>
  ) {
    if (event.key === "Enter") {
      event.preventDefault();

      if (nextFieldRef) {
        console.log("nextFieldRef ->", nextFieldRef);

        nextFieldRef?.current?.focus();
      } else {
        console.log("here");

        formikProps.handleSubmit();
      }
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      repeatPassword: "",
    },
    validationSchema,
    onSubmit: (values: SignUpFormValues) => handleSubmit(values),
  });

  return (
    <>
      <Container>
        <CustomBox maxWidth="400px" mx="auto" mt={10}>
          <Heading as="h2" size="xl">
            Cadastro
          </Heading>
          <br />
          <br />
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4} align="flex-start">
              <FormControl
                isInvalid={!!formik.errors.name && formik.touched.name}
              >
                <FormLabel htmlFor="name">Nome</FormLabel>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  ref={nameRef}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  onKeyDown={(event) => handleKeyDown(event, emailRef, formik)}
                />
                <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={!!formik.errors.email && formik.touched.email}
              >
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  ref={emailRef}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  onKeyDown={(event) =>
                    handleKeyDown(event, passwordRef, formik)
                  }
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={!!formik.errors.password && formik.touched.password}
              >
                <FormLabel htmlFor="password">Senha</FormLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  ref={passwordRef}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  onKeyDown={(event) =>
                    handleKeyDown(event, repeatPasswordRef, formik)
                  }
                />
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={
                  !!formik.errors.repeatPassword &&
                  formik.touched.repeatPassword
                }
              >
                <FormLabel htmlFor="repeatPassword">Senha</FormLabel>
                <Input
                  id="repeatPassword"
                  name="repeatPassword"
                  type="password"
                  ref={repeatPasswordRef}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.repeatPassword}
                  onKeyDown={(event) => handleKeyDown(event, null, formik)}
                />
                <FormErrorMessage>
                  {formik.errors.repeatPassword}
                </FormErrorMessage>
              </FormControl>

              <Button type="submit" colorScheme="blue" width="full">
                Cadastrar
              </Button>
            </VStack>
          </form>
        </CustomBox>
        <img src={LoginImage} />
      </Container>
    </>
  );
};

export default SignUp;
