import styled from 'styled-components';

export const MainText = Component => styled(Component)`
  color: ${props => props.theme.mainLightText};
  font-family: ${props => props.theme.mainTextFontFamily};
`;