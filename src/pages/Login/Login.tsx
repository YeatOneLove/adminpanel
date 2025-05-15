import { Stack } from "@mui/material";
import InputPlain from "components/inputs/InputPlain";
import { useLoginStyles } from "./styles";
import Button from "components/buttons/Buttons";
import { buttonTypes } from "components/buttons/constants/buttonTypes";

const Login = (): React.ReactElement => {
  const classes = useLoginStyles();
  return (
    <>
      <h2>Login</h2>
      <Stack spacing={2}>
        <>
          <InputPlain
            label="Username"
            onChange={(value) => {}}
            value={null}
            className={classes.textField}
          />

          <InputPlain
            label="Password"
            type="password"
            onChange={(value) => {}}
            value={null}
            className={classes.textField}
          />
        </>
        <Button
          disabled={false}
          buttonType={buttonTypes.info}
          onClick={() => {}}
          variant="contained"
        >
          Login
        </Button>
      </Stack>
    </>
  );
};

export default Login;
