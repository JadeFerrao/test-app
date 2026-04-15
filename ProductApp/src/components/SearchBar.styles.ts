import styled from 'styled-components/native';
import { theme } from '../theme';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.full}px;
  padding-horizontal: ${theme.spacing.md}px;
  padding-vertical: ${theme.spacing.sm}px;
  border-width: 1px;
  border-color: ${theme.colors.border};
  margin-horizontal: ${theme.spacing.md}px;
  margin-vertical: ${theme.spacing.sm}px;
  shadow-color: ${theme.colors.shadow};
  shadow-offset: 0px 2px;
  shadow-opacity: 1;
  shadow-radius: 4px;
  elevation: 2;
`;

export const Icon = styled.View`
  margin-right: ${theme.spacing.sm}px;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: ${theme.fontSize.md}px;
  color: ${theme.colors.text};
  padding-vertical: 0px;
`;

export const ClearButton = styled.TouchableOpacity`
  padding: 4px;
`;
