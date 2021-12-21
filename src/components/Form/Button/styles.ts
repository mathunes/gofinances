import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

//Resolver conflito colando entre parênteses
export const Container = styled(TouchableOpacity)`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
    align-items: center;
    justify-content: center;
    padding: 18px;
    border-radius: 5px;    
`;

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.shape}
`;