import { TouchableOpacityProps, Text } from "react-native";
import { ButtonContainer, ButtonSecondary, GradientButton } from "./button.style";
import TextInput from "../text/Text";
import { theme } from "../../themes/theme";
import { textTypes } from "../text/textTypes";


interface ButtonProps extends TouchableOpacityProps {
    title: string;
    margin?: string;
    type: string,
}



const Button = ({ title, type, margin, ...props }: ButtonProps) => {

    const renderText = (color: string) => (
     <TextInput type={textTypes.BUTTON_BOLD} color={color}>{title}</TextInput>
)
    switch (type) {
        case theme.buttons.buttonsTheme.secondary:
            return (
                <ButtonSecondary margin={margin} {...props}>
                    {renderText(theme.colors.mainTheme.primary)}
                </ButtonSecondary>
            );
        case theme.buttons.buttonsTheme.primary:
        default:
            return (
                <ButtonContainer margin={margin} {...props}>
                    <GradientButton
                        start={{ x: 0.0, y: 0.0 }}
                        end={{x:1.0, y:1.0 }}
                        colors={[theme.colors.purpleTheme.purple80, theme.colors.pinkTheme.pink80]}>
                        {renderText(theme.colors.neutralTheme.white)}
                    </GradientButton>
                </ButtonContainer>
        )
    }
}

export default Button;