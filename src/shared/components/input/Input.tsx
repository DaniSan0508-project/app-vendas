import { TextInputProps } from "react-native";
import { ContainerInput } from "./input.style";
import { DisplayFlexColumn } from "../globalStyles/globalView.style";
import TextInput from "../text/Text";
import { theme } from "../../themes/theme";
import { textTypes } from "../text/textTypes";

interface InputProps extends TextInputProps{
    title?:string,
}

const Input = ({title, ...props}:InputProps) => {
    return (
        <DisplayFlexColumn>
            {title && <TextInput margin="0px 0px 4px 8px" color={theme.colors.grayTheme.gray100} type={textTypes.PARAGRAPH_SEMI_BOLD}>{ title }</TextInput>}
            <ContainerInput {...props} />
        </DisplayFlexColumn>
    )
}

export default Input;