import styled from 'styled-components/native';
import { theme } from '../theme';

export const Container = styled.View<{ insetsTop?: number }>`
  flex: 1;
  background-color: ${theme.colors.background};
  padding-top: ${(props: { insetsTop?: number }) => props.insetsTop || 0}px;
`;

export const Centered = styled.View<{ insetsTop?: number }>`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.background};
  gap: ${theme.spacing.md}px;
  padding-top: ${(props: { insetsTop?: number }) => props.insetsTop || 0}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: ${theme.spacing.md}px;
  padding-top: ${theme.spacing.sm}px;
  padding-bottom: ${theme.spacing.xs}px;
`;

export const HeaderTitle = styled.Text`
  font-size: ${theme.fontSize.xxl}px;
  font-weight: 800;
  color: ${theme.colors.text};
`;

export const StickyHeader = styled.View`
  background-color: ${theme.colors.background};
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.border};
  padding-bottom: ${theme.spacing.xs}px;
`;

export const UserCard = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: ${theme.spacing.md}px;
  background-color: ${theme.colors.surface};
  margin-horizontal: ${theme.spacing.md}px;
  margin-vertical: ${theme.spacing.xs}px;
  border-radius: ${theme.borderRadius.md}px;
  border-width: 1px;
  border-color: ${theme.colors.border};
`;

export const UserImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${theme.colors.border};
`;

export const UserInfo = styled.View`
  margin-left: ${theme.spacing.md}px;
  flex: 1;
`;

export const UserName = styled.Text`
  font-size: ${theme.fontSize.md}px;
  font-weight: 700;
  color: ${theme.colors.text};
`;

export const UserEmail = styled.Text`
  font-size: ${theme.fontSize.sm}px;
  color: ${theme.colors.textSecondary};
  margin-top: 2px;
`;

export const UserRole = styled.View`
  background-color: ${theme.colors.primary}20;
  padding-horizontal: ${theme.spacing.sm}px;
  padding-vertical: 2px;
  border-radius: ${theme.borderRadius.sm}px;
  align-self: flex-start;
  margin-top: 4px;
`;

export const UserRoleText = styled.Text`
  font-size: ${theme.fontSize.xs}px;
  font-weight: 600;
  color: ${theme.colors.primary};
  text-transform: capitalize;
`;

export const InputGroup = styled.View`
  padding-horizontal: ${theme.spacing.md}px;
  gap: ${theme.spacing.sm}px;
  margin-bottom: ${theme.spacing.sm}px;
`;

export const FilterInput = styled.TextInput`
  height: 44px;
  background-color: ${theme.colors.border}40;
  border-radius: ${theme.borderRadius.md}px;
  padding-horizontal: ${theme.spacing.md}px;
  font-size: ${theme.fontSize.md}px;
  color: ${theme.colors.text};
`;

export const SortRow = styled.ScrollView`
  padding-horizontal: ${theme.spacing.md}px;
  margin-bottom: ${theme.spacing.sm}px;
`;

export const ResultCount = styled.Text`
  font-size: ${theme.fontSize.sm}px;
  color: ${theme.colors.textSecondary};
  padding-horizontal: ${theme.spacing.md}px;
  padding-bottom: ${theme.spacing.sm}px;
`;

export const LoadingText = styled.Text`
  font-size: ${theme.fontSize.md}px;
  color: ${theme.colors.textSecondary};
`;

export const ErrorText = styled.Text`
  font-size: ${theme.fontSize.md}px;
  color: ${theme.colors.error};
  text-align: center;
  padding-horizontal: ${theme.spacing.xl}px;
`;

export const EmptyContainer = styled.View`
  align-items: center;
  padding-top: 80px;
  gap: ${theme.spacing.sm}px;
`;

export const EmptyTitle = styled.Text`
  font-size: ${theme.fontSize.lg}px;
  font-weight: 700;
  color: ${theme.colors.text};
`;

export const EmptySubtitle = styled.Text`
  font-size: ${theme.fontSize.md}px;
  color: ${theme.colors.textSecondary};
`;
