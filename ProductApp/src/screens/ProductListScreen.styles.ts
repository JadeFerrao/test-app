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
