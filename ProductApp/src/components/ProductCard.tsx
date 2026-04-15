import React from 'react';
import LazyImage from './LazyImage';
import { Product } from '../types';
import { theme } from '../theme';
import {
  Card, Body, CategoryRow, Category, RatingBadge, RatingText,
  Title, PriceRow, Price, OriginalPrice, DiscountBadge, DiscountText,
  Chevron, ChevronText,
} from './ProductCard.styles';

interface ProductCardProps {
  product: Product;
  onPress: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onPress }) => {
  const discountedPrice = product.price * (1 - product.discountPercentage / 100);

  return (
    <Card onPress={onPress} activeOpacity={0.85}>
      <LazyImage
        uri={product.thumbnail}
        width="100%"
        height={160}
        borderRadius={theme.borderRadius.md}
        resizeMode="contain"
      />
      <Body>
        <CategoryRow>
          <Category>{product.category}</Category>
          <RatingBadge>
            <RatingText>★ {product.rating.toFixed(1)}</RatingText>
          </RatingBadge>
        </CategoryRow>

        <Title numberOfLines={2}>{product.title}</Title>

        <PriceRow>
          <Price>${discountedPrice.toFixed(2)}</Price>
          {product.discountPercentage > 0 && (
            <OriginalPrice>${product.price.toFixed(2)}</OriginalPrice>
          )}
          {product.discountPercentage > 0 && (
            <DiscountBadge>
              <DiscountText>-{Math.round(product.discountPercentage)}%</DiscountText>
            </DiscountBadge>
          )}
          <Chevron>
            <ChevronText>›</ChevronText>
          </Chevron>
        </PriceRow>
      </Body>
    </Card>
  );
};

export default ProductCard;
