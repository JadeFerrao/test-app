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
  align-items: center;
  padding-horizontal: ${theme.spacing.md}px;
  padding-vertical: ${theme.spacing.sm}px;
  background-color: ${theme.colors.background};
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.border};
`;

export const BackButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 60px;
`;

export const BackIcon = styled.Text`
  font-size: 28px;
  color: ${theme.colors.primary};
  font-weight: 300;
  line-height: 32px;
`;

export const BackLabel = styled.Text`
  font-size: ${theme.fontSize.md}px;
  color: ${theme.colors.primary};
  font-weight: 500;
`;

export const HeaderTitle = styled.Text`
  flex: 1;
  font-size: ${theme.fontSize.md}px;
  font-weight: 700;
  color: ${theme.colors.text};
  text-align: center;
`;

export const ScrollContainer = styled.ScrollView`
  flex: 1;
`;

export const Gallery = styled.View`
  height: 280px;
  background-color: #F3F4F6;
`;

export const DotsRow = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 6px;
  padding-vertical: ${theme.spacing.sm}px;
`;

export const Dot = styled.View<{ active?: boolean }>`
  width: ${(props: { active?: boolean }) => (props.active ? '18px' : '6px')};
  height: 6px;
  border-radius: 3px;
  background-color: ${(props: { active?: boolean }) => (props.active ? theme.colors.primary : theme.colors.border)};
`;

export const Content = styled.View`
  padding: ${theme.spacing.md}px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${theme.spacing.sm}px;
  margin-bottom: ${theme.spacing.sm}px;
`;

export const CategoryBadge = styled.View`
  background-color: #EDE9FE;
  padding-horizontal: 10px;
  padding-vertical: 3px;
  border-radius: ${theme.borderRadius.full}px;
`;

export const CategoryText = styled.Text`
  font-size: ${theme.fontSize.xs}px;
  color: ${theme.colors.primary};
  font-weight: 600;
  text-transform: capitalize;
`;

export const RatingBadge = styled.View`
  background-color: #FEF3C7;
  padding-horizontal: 8px;
  padding-vertical: 3px;
  border-radius: ${theme.borderRadius.full}px;
`;

export const RatingText = styled.Text`
  font-size: ${theme.fontSize.xs}px;
  color: #92400E;
  font-weight: 600;
`;

export const ReviewCount = styled.Text`
  font-size: ${theme.fontSize.sm}px;
  color: ${theme.colors.textSecondary};
`;

export const Title = styled.Text`
  font-size: ${theme.fontSize.xl}px;
  font-weight: 800;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.sm}px;
  line-height: 30px;
`;

export const PriceRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${theme.spacing.sm}px;
  margin-bottom: ${theme.spacing.lg}px;
`;

export const Price = styled.Text`
  font-size: ${theme.fontSize.xxl}px;
  font-weight: 800;
  color: ${theme.colors.text};
`;

export const OriginalPrice = styled.Text`
  font-size: ${theme.fontSize.lg}px;
  color: ${theme.colors.textSecondary};
  text-decoration-line: line-through;
`;

export const DiscountBadge = styled.View`
  background-color: #DCFCE7;
  padding-horizontal: 8px;
  padding-vertical: 3px;
  border-radius: ${theme.borderRadius.full}px;
`;

export const DiscountText = styled.Text`
  font-size: ${theme.fontSize.xs}px;
  color: #166534;
  font-weight: 700;
`;

export const SectionLabel = styled.Text`
  font-size: ${theme.fontSize.md}px;
  font-weight: 700;
  color: ${theme.colors.text};
  margin-top: ${theme.spacing.lg}px;
  margin-bottom: ${theme.spacing.sm}px;
`;

export const Description = styled.Text`
  font-size: ${theme.fontSize.md}px;
  color: ${theme.colors.textSecondary};
  line-height: 24px;
`;

export const InfoGrid = styled.View`
  background-color: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.md}px;
  overflow: hidden;
  border-width: 1px;
  border-color: ${theme.colors.border};
`;

export const InfoRowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding-horizontal: ${theme.spacing.md}px;
  padding-vertical: ${theme.spacing.sm + 2}px;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.border};
`;

export const InfoLabel = styled.Text`
  font-size: ${theme.fontSize.sm}px;
  color: ${theme.colors.textSecondary};
  font-weight: 500;
  flex: 1;
`;

export const InfoValue = styled.Text`
  font-size: ${theme.fontSize.sm}px;
  color: ${theme.colors.text};
  font-weight: 600;
  flex: 2;
  text-align: right;
`;

export const TagsRow = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm}px;
`;

export const Tag = styled.View`
  background-color: #F3F4F6;
  padding-horizontal: 10px;
  padding-vertical: 4px;
  border-radius: ${theme.borderRadius.full}px;
  border-width: 1px;
  border-color: ${theme.colors.border};
`;

export const TagText = styled.Text`
  font-size: ${theme.fontSize.xs}px;
  color: ${theme.colors.textSecondary};
  font-weight: 500;
`;

export const ReviewCard = styled.View`
  background-color: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.md}px;
  padding: ${theme.spacing.md}px;
  margin-bottom: ${theme.spacing.sm}px;
  border-width: 1px;
  border-color: ${theme.colors.border};
`;

export const ReviewHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.xs}px;
`;

export const ReviewerName = styled.Text`
  font-size: ${theme.fontSize.sm}px;
  font-weight: 700;
  color: ${theme.colors.text};
`;

export const ReviewRatingText = styled.Text`
  font-size: ${theme.fontSize.sm}px;
  color: #F59E0B;
`;

export const ReviewComment = styled.Text`
  font-size: ${theme.fontSize.sm}px;
  color: ${theme.colors.textSecondary};
  line-height: 20px;
  margin-bottom: ${theme.spacing.xs}px;
`;

export const ReviewDate = styled.Text`
  font-size: ${theme.fontSize.xs}px;
  color: ${theme.colors.textSecondary};
`;

export const LoadingText = styled.Text`
  font-size: ${theme.fontSize.md}px;
  color: ${theme.colors.textSecondary};
`;

export const ErrorEmoji = styled.Text`
  font-size: 40px;
`;

export const ErrorText = styled.Text`
  font-size: ${theme.fontSize.md}px;
  color: ${theme.colors.error};
  text-align: center;
`;

export const BackBtn = styled.TouchableOpacity`
  background-color: ${theme.colors.primary};
  padding-horizontal: ${theme.spacing.lg}px;
  padding-vertical: ${theme.spacing.sm}px;
  border-radius: ${theme.borderRadius.full}px;
`;

export const BackBtnText = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: ${theme.fontSize.md}px;
`;
