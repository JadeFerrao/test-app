import styled from 'styled-components/native';
import { theme } from '../theme';

export const Card = styled.TouchableOpacity`
  background-color: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.lg}px;
  margin-horizontal: ${theme.spacing.md}px;
  margin-bottom: ${theme.spacing.md}px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.08;
  shadow-radius: 8px;
  elevation: 3;
  overflow: hidden;
`;

export const Body = styled.View`
  padding: ${theme.spacing.md}px;
`;

export const CategoryRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.xs}px;
`;

export const Category = styled.Text`
  font-size: ${theme.fontSize.xs}px;
  color: ${theme.colors.primary};
  font-weight: 600;
  text-transform: capitalize;
`;

export const RatingBadge = styled.View`
  background-color: #FEF3C7;
  padding-horizontal: 6px;
  padding-vertical: 2px;
  border-radius: ${theme.borderRadius.sm}px;
`;

export const RatingText = styled.Text`
  font-size: ${theme.fontSize.xs}px;
  color: #92400E;
  font-weight: 600;
`;

export const Title = styled.Text`
  font-size: ${theme.fontSize.md}px;
  font-weight: 600;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.sm}px;
  line-height: 22px;
`;

export const PriceRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${theme.spacing.sm}px;
`;

export const Price = styled.Text`
  font-size: ${theme.fontSize.lg}px;
  font-weight: 700;
  color: ${theme.colors.text};
`;

export const OriginalPrice = styled.Text`
  font-size: ${theme.fontSize.sm}px;
  color: ${theme.colors.textSecondary};
  text-decoration-line: line-through;
`;

export const DiscountBadge = styled.View`
  background-color: #DCFCE7;
  padding-horizontal: 6px;
  padding-vertical: 2px;
  border-radius: ${theme.borderRadius.sm}px;
`;

export const DiscountText = styled.Text`
  font-size: ${theme.fontSize.xs}px;
  color: #166534;
  font-weight: 600;
`;

export const Chevron = styled.View`
  margin-left: auto;
  width: 44px;
  height: 32px;
  border-radius: ${theme.borderRadius.full}px;
  background-color: ${theme.colors.primary};
  justify-content: center;
  align-items: center;
`;

export const ChevronText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 700;
`;
