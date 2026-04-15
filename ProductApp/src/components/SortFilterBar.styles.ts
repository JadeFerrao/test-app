import styled from 'styled-components/native';
import { theme } from '../theme';

export const Row = styled.View`
  flex-direction: row;
  padding-horizontal: ${theme.spacing.md}px;
  padding-bottom: ${theme.spacing.sm}px;
  gap: ${theme.spacing.sm}px;
  flex-wrap: wrap;
`;

export const Chip = styled.TouchableOpacity<{ active?: boolean }>`
  flex-direction: row;
  align-items: center;
  padding-horizontal: ${theme.spacing.md}px;
  padding-vertical: ${theme.spacing.xs + 2}px;
  border-radius: ${theme.borderRadius.full}px;
  border-width: 1px;
  border-color: ${({ active }) => (active ? theme.colors.primary : theme.colors.border)};
  background-color: ${({ active }) => (active ? theme.colors.primary : theme.colors.surface)};
`;

export const ChipText = styled.Text<{ active?: boolean }>`
  font-size: ${theme.fontSize.sm}px;
  color: ${({ active }) => (active ? '#fff' : theme.colors.text)};
  font-weight: 500;
`;

export const ClearChip = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-horizontal: ${theme.spacing.md}px;
  padding-vertical: ${theme.spacing.xs + 2}px;
  border-radius: ${theme.borderRadius.full}px;
  background-color: #FEE2E2;
  border-width: 1px;
  border-color: #FECACA;
`;

export const ClearChipText = styled.Text`
  font-size: ${theme.fontSize.sm}px;
  color: ${theme.colors.error};
  font-weight: 500;
`;

export const ChipIcon = styled.View`
  margin-right: 4px;
`;

export const Overlay = styled.TouchableOpacity`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Sheet = styled.View`
  background-color: ${theme.colors.surface};
  border-top-left-radius: ${theme.borderRadius.lg}px;
  border-top-right-radius: ${theme.borderRadius.lg}px;
  padding: ${theme.spacing.lg}px;
  padding-bottom: 40px;
`;

export const TallSheet = styled(Sheet)`
  max-height: 60%;
`;

export const SheetTitle = styled.Text`
  font-size: ${theme.fontSize.lg}px;
  font-weight: 700;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.md}px;
`;

export const Option = styled.TouchableOpacity<{ active?: boolean }>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: ${theme.spacing.md}px;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.border};
  background-color: ${({ active }) => (active ? '#F5F3FF' : 'transparent')};
  margin-horizontal: ${({ active }) => (active ? `-${theme.spacing.lg}px` : '0px')};
  padding-horizontal: ${({ active }) => (active ? `${theme.spacing.lg}px` : '0px')};
`;

export const OptionText = styled.Text<{ active?: boolean }>`
  font-size: ${theme.fontSize.md}px;
  color: ${({ active }) => (active ? theme.colors.primary : theme.colors.text)};
  font-weight: ${({ active }) => (active ? '600' : '400')};
`;
