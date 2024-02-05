import {
  Box,
  Alert,
  FormHelperText,
  Link,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [method, setMethod] = useState("email");
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "teste@teste.com",
      password: "Password123!",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        // await auth.signIn(values.email, values.password);

        //fake validation
        if (
          values.email != "teste@teste.com" ||
          values.password != "Password123!"
        ) {
          helpers.setStatus({ success: false });
          helpers.setErrors({ submit: "User email and password doesnt match!" });
          helpers.setSubmitting(false);
        } else {
          const acesso = validaAcesso();
          acesso == 0 
            ? navigate("/admin")
            : navigate("/user");
        }
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  const handleMethodChange = useCallback((event: any, value: string) => {
    setMethod(value);
  }, []);

  const handleSkip = () => {
    navigate("/user");
  };

  const validaAcesso = () => {

    //retorna 0 ou 1 =
    // 0 - admin
    // 1 - user
    const randon  = Math.floor(Math.random() * 2);
    return randon; 
  }

  return (
    <>
      <Box
        sx={{
          backgroundColor: "background.paper",
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: "100px",
            width: "100%",
          }}
        >
          <div>
            <Stack spacing={1} sx={{ mb: 3 }}>
              <Typography variant="h4">Login</Typography>
              <Typography color="text.secondary" variant="body2">
                Don&apos;t have an account? &nbsp;
                <Link
                  component="a"
                  href="/login/register"
                  underline="hover"
                  variant="subtitle2"
                >
                  Register
                </Link>
              </Typography>
            </Stack>
            <Tabs onChange={handleMethodChange} sx={{ mb: 3 }} value={method}>
              <Tab label="Email" value="email" />
              <Tab label="Phone Number" value="phoneNumber" />
            </Tabs>
            {method === "email" && (
              <form noValidate onSubmit={formik.handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    error={!!(formik.touched.email && formik.errors.email)}
                    fullWidth
                    helperText={formik.touched.email && formik.errors.email}
                    label="Email Address"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="email"
                    value={formik.values.email}
                  />
                  <TextField
                    error={
                      !!(formik.touched.password && formik.errors.password)
                    }
                    fullWidth
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    label="Password"
                    name="password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="password"
                    value={formik.values.password}
                  />
                </Stack>
                <FormHelperText sx={{ mt: 1 }}>
                  Optionally you can skip.
                </FormHelperText>
                {formik.errors.submit && (
                  <Typography color="error" sx={{ mt: 3 }} variant="body2">
                    {formik.errors.submit}
                  </Typography>
                )}
                <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  type="submit"
                  variant="contained"
                >
                  Continue
                </Button>
                <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  onClick={handleSkip}
                >
                  Skip authentication
                </Button>
                <Alert severity="info" sx={{ mt: 3 }}>
                  <div>
                    You can use <b>teste@teste.com</b> and password{" "}
                    <b>Password123!</b>
                  </div>
                </Alert>
              </form>
            )}
            {method === "phoneNumber" && (
              <div>
                <Typography sx={{ mb: 1 }} variant="h6">
                  Not available in the demo
                </Typography>
                <Typography color="text.secondary">
                  To prevent unnecessary costs we disabled this feature in the
                  demo.
                </Typography>
              </div>
            )}
          </div>
        </Box>
      </Box>
    </>
  );
}
