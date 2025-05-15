import { IAuthLayout } from "./interfaces/IAuthLayout";
import { useAuthLayoutStyles } from "./styles";

const AuthLayout = ({ children }: IAuthLayout): React.ReactElement => {
    const classes = useAuthLayoutStyles();
    return (<div className={classes.container}><div className={classes.box}> {children}</div></div>);
};

export default AuthLayout;
