import { Text, TextProps } from "react-native";
import { ContainerText } from "./text.style";

interface Prop extends TextProps {
    color?: string;
}

const TextInput = (props: Prop) => {
    return <ContainerText {...props} />;
}

export default TextInput;
