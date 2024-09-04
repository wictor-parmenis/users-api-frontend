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
import RegisterCallToAction from "./_components/register-call-to-action";
import { Container } from "./styles";

interface LoginFormValues {
  email: string;
  password: string;
}

const Login = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (values: { email: string; password: string }) => {
    await login(values);
    navigate("/");
  };

  function handleKeyDown(
    event: KeyboardEvent<HTMLInputElement>,
    nextFieldRef: RefObject<HTMLInputElement> | null,
    formikProps: FormikProps<LoginFormValues>
  ) {
    if (event.key === "Enter") {
      event.preventDefault();

      if (nextFieldRef) {
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
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email inválido")
        .required("Email é obrigatório"),
      password: Yup.string()
        .min(6, "A senha deve ter pelo menos 6 caracteres")
        .required("Senha é obrigatória"),
    }),
    onSubmit: (values) => handleSubmit(values),
  });

  return (
    <>
      <Container>
        <CustomBox maxWidth="400px" mx="auto" mt={10}>
          <Heading as="h2" size="xl">
            Login
          </Heading>
          <br />
          <br />
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4} align="flex-start">
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
                  onKeyDown={(event) => handleKeyDown(event, null, formik)}
                />
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              </FormControl>

              <Button type="submit" colorScheme="blue" width="full">
                Login
              </Button>
              <RegisterCallToAction />
            </VStack>
          </form>
        </CustomBox>
        <img src={LoginImage} />
      </Container>
    </>
  );
};

export default Login;
