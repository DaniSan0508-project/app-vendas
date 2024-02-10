import { Text } from "react-native";
import { ContainerLogin } from "../styles/login.style";
import Input from "../../../shared/components/input/Input";
import Button from "../../../shared/components/button/Button";

const handleOnPress = () => {
    console.log('clicou');
};

const Login = () => {
    return (
        <ContainerLogin>
            <Input />
            <Button margin="8px" title="ENTRAR" onPress={handleOnPress} />
        </ContainerLogin>
    )
};

export default Login;