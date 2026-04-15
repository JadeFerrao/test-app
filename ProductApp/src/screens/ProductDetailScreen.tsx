import React, { useEffect, useState } from 'react';
import {
  StatusBar,
  Dimensions,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { fetchProductById } from '../api/products';
import LazyImage from '../components/LazyImage';
import { Product, RootStackParamList } from '../types';
import { theme } from '../theme';
import {
  Container, Centered, LoadingText, ErrorEmoji, ErrorText, BackBtn, BackBtnText,
  Header, BackButton, BackIcon, BackLabel, HeaderTitle, HeaderSpacer,
  ScrollContainer, Gallery, DotsRow, Dot, Content, Row,
  CategoryBadge, CategoryText, RatingBadge, RatingText, ReviewCount, RatingRow,
  Title, PriceRow, Price, OriginalPrice, DiscountBadge, DiscountText,
  SectionLabel, Description, InfoGrid, InfoRowContainer, InfoLabel, InfoValue,
  TagsRow, Tag, TagText, ReviewCard, ReviewHeader, ReviewerName,
  ReviewRatingText, ReviewComment, ReviewDate
} from './ProductDetailScreen.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'ProductDetail'>;

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const ProductDetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const { productId } = route.params;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await fetchProductById(productId);
        setProduct(data);
      } catch {
        setError('Failed to load product details.');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [productId]);

  const discountedPrice = product
    ? product.price * (1 - product.discountPercentage / 100)
    : 0;

  if (loading) {
    return (
      <Centered insetsTop={insets.top}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
        <LoadingText>Loading details...</LoadingText>
      </Centered>
    );
  }

  if (error || !product) {
    return (
      <Centered insetsTop={insets.top}>
        <ErrorEmoji>⚠️</ErrorEmoji>
        <ErrorText>{error ?? 'Product not found'}</ErrorText>
        <BackBtn onPress={() => navigation.goBack()}>
          <BackBtnText>Go Back</BackBtnText>
        </BackBtn>
      </Centered>
    );
  }

  return (
    <Container insetsTop={insets.top}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <BackIcon>‹</BackIcon>
          <BackLabel>Back</BackLabel>
        </BackButton>
        <HeaderTitle numberOfLines={1}>{product.title}</HeaderTitle>
        <HeaderSpacer />
      </Header>

      <ScrollContainer
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: insets.bottom + theme.spacing.xl }}
      >
        {/* Image Gallery */}
        <FlatList
          data={product.images}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, i) => String(i)}
          onMomentumScrollEnd={(e) => {
            const idx = Math.round(e.nativeEvent.contentOffset.x / SCREEN_WIDTH);
            setActiveImage(idx);
          }}
          renderItem={({ item }) => (
            <LazyImage uri={item} width={SCREEN_WIDTH} height={280} borderRadius={0} />
          )}
          style={{ height: 280, backgroundColor: '#F3F4F6' }}
        />

        {/* Dots */}
        {product.images.length > 1 && (
          <DotsRow>
            {product.images.map((_, i) => (
              <Dot key={i} active={i === activeImage} />
            ))}
          </DotsRow>
        )}

        <Content>
          {/* Category & Rating */}
          <Row>
            <CategoryBadge>
              <CategoryText>{product.category}</CategoryText>
            </CategoryBadge>
            <RatingRow>
              <RatingBadge>
                <RatingText>★ {product.rating.toFixed(1)}</RatingText>
              </RatingBadge>
              <ReviewCount>({product.reviews.length} reviews)</ReviewCount>
            </RatingRow>
          </Row>

          {/* Title */}
          <Title>{product.title}</Title>

          {/* Price */}
          <PriceRow>
            <Price>${discountedPrice.toFixed(2)}</Price>
            {product.discountPercentage > 0 && (
              <>
                <OriginalPrice>${product.price.toFixed(2)}</OriginalPrice>
                <DiscountBadge>
                  <DiscountText>-{Math.round(product.discountPercentage)}% OFF</DiscountText>
                </DiscountBadge>
              </>
            )}
          </PriceRow>

          {/* Description */}
          <SectionLabel>Description</SectionLabel>
          <Description>{product.description}</Description>

          {/* Tags */}
          {product.tags.length > 0 && (
            <>
              <SectionLabel>Tags</SectionLabel>
              <TagsRow>
                {product.tags.map((tag) => (
                  <Tag key={tag}>
                    <TagText>{tag}</TagText>
                  </Tag>
                ))}
              </TagsRow>
            </>
          )}

          {/* Product Details */}
          <SectionLabel>Product Details</SectionLabel>
          <InfoGrid>
            <InfoRow label="Brand" value={product.brand ?? 'N/A'} />
            <InfoRow label="SKU" value={product.sku} />
            <InfoRow label="Weight" value={`${product.weight} kg`} />
            <InfoRow label="Stock" value={`${product.stock} units`} />
            <InfoRow label="Min. Order" value={`${product.minimumOrderQuantity} units`} />
            <InfoRow label="Availability" value={product.availabilityStatus} />
            <InfoRow
              label="Dimensions"
              value={`${product.dimensions.width} × ${product.dimensions.height} × ${product.dimensions.depth} cm`}
            />
          </InfoGrid>

          {/* Policies */}
          <SectionLabel>Policies & Shipping</SectionLabel>
          <InfoGrid>
            <InfoRow label="Warranty" value={product.warrantyInformation} />
            <InfoRow label="Shipping" value={product.shippingInformation} />
            <InfoRow label="Return Policy" value={product.returnPolicy} />
          </InfoGrid>

          {/* Reviews */}
          {product.reviews.length > 0 && (
            <>
              <SectionLabel>Customer Reviews</SectionLabel>
              {product.reviews.map((review, i) => (
                <ReviewCard key={i}>
                  <ReviewHeader>
                    <ReviewerName>{review.reviewerName}</ReviewerName>
                    <ReviewRatingText>
                      {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                    </ReviewRatingText>
                  </ReviewHeader>
                  <ReviewComment>{review.comment}</ReviewComment>
                  <ReviewDate>
                    {new Date(review.date).toLocaleDateString('en-US', {
                      year: 'numeric', month: 'short', day: 'numeric',
                    })}
                  </ReviewDate>
                </ReviewCard>
              ))}
            </>
          )}
        </Content>
      </ScrollContainer>
    </Container>
  );
};

const InfoRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <InfoRowContainer>
    <InfoLabel>{label}</InfoLabel>
    <InfoValue>{value}</InfoValue>
  </InfoRowContainer>
);

export default ProductDetailScreen;

