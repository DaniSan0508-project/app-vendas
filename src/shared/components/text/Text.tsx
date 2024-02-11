import { TextProps } from "react-native";
import { ContainerText } from "./text.style";
import { textTypes } from "./textTypes";
import { useMemo } from "react";

interface TextProp extends TextProps {
    color?: string;
    type?: string;
}



const TextInput = ({ color, type, ...props }: TextProp) => {
    const handleFonteSize = useMemo(() => {
        switch (type) {
        case textTypes.TITLE:
            return '32px'
            default: 
            return '16px'
            
    }
    },[type])
    return <ContainerText fontSize={handleFonteSize} color={color} {...props} />;
}

export default TextInput;
