import { TouchableOpacityProps } from "react-native";
import { ActivityIndicator, ButtonContainer, ButtonSecondary, GradientButton } from "./button.style";
import TextInput from "../text/Text";
import { theme } from "../../themes/theme";
import { textTypes } from "../text/textTypes";


interface ButtonProps extends TouchableOpacityProps {
    title: string;
    margin?: string;
    type: string;
    disable?: boolean;
    loading: boolean;
    onPress: () => void;
}



const Button = ({ title, type, onPress, loading, disable, margin, ...props }: ButtonProps) => {
    const handleOnPress = () => {
        if (!loading && !disable) {
            onPress();
        }
    }

    const renderText = (color: string) => (
        <>
            <TextInput type={textTypes.BUTTON_BOLD} color={color}>{title}</TextInput>
            {loading && <ActivityIndicator color={theme.colors.neutralTheme.white} />}
        </>)
     
    switch (type) {
        case theme.buttons.buttonsTheme.secondary:
            return (
                <ButtonSecondary {...props} margin={margin} onPress={handleOnPress} >
                    {renderText(theme.colors.mainTheme.primary)}
                </ButtonSecondary>
            );
        case theme.buttons.buttonsTheme.primary:
        default:
            return (
                <ButtonContainer {...props}  margin={margin} onPress={handleOnPress}>
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