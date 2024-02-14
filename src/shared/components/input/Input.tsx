import { TextInputProps, View } from "react-native";
import { ContainerInput } from "./input.style";
import { DisplayFlexColumn } from "../globalStyles/globalView.style";

interface InputProps extends TextInputProps{
    title?:string,
}

const Input = ({title, ...props}:InputProps) => {
    return (
        <DisplayFlexColumn>
            <ContainerInput {...props} />
        </DisplayFlexColumn>
    )
}

export default Input;