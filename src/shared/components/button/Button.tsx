import { TouchableOpacityProps, Text } from "react-native";
import { ButtonContainer } from "./button.style";
import TextInput from "../text/Text";
import { theme } from "../../themes/theme";
import { textTypes } from "../text/textTypes";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    margin?: string;
}

const Button = ({title, margin,...props}: ButtonProps) => {
    return (
        <ButtonContainer margin={margin} {...props}>
            <TextInput type={textTypes.TITLE} color={theme.colors.neutralTheme.white}>{ title }</TextInput>
        </ButtonContainer>
    )
}

export default Button;