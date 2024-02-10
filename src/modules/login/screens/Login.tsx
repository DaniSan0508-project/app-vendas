import { Text } from "react-native";
import { ContainerLogin } from "../styles/login.style";
import Input from "../../../shared/components/input/Input";
import Button from "../../../shared/components/button/Button";
import TextInput from "../../../shared/components/text/Text";

const handleOnPress = () => {
    console.log('clicou');
};

const Login = () => {
    return (
        <ContainerLogin>
            <TextInput />
            <Input />
            <Button margin="8px" title="ENTRAR" onPress={handleOnPress} />
        </ContainerLogin>
    )
};

export default Login;