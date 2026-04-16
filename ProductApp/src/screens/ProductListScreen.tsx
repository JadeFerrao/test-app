import React, { useCallback } from 'react';
import {
  FlatList,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { useProducts } from '../hooks/useProducts';
import { useDebounce } from '../hooks/useDebounce';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import SortFilterBar from '../components/SortFilterBar';
import { Product } from '../types';
import { RootStackParamList } from '../types';
import { theme } from '../theme';
import { Ionicons } from '@expo/vector-icons';
import {
  Container, Centered, Header, HeaderTitle, StickyHeader, ResultCount,
  LoadingText, ErrorText, EmptyContainer, EmptyTitle, EmptySubtitle
} from './ProductListScreen.styles';

type NavProp = NativeStackNavigationProp<RootStackParamList, 'ProductList'>;

const ProductListScreen: React.FC = () => {
  const navigation = useNavigation<NavProp>();
  const { products, categories, loading, error, filterState, updateFilter } = useProducts();

  // Debounce the search input before filtering
  const [searchInput, setSearchInput] = React.useState('');
  const debouncedSearch = useDebounce(searchInput, 350);

  React.useEffect(() => {
    updateFilter({ search: debouncedSearch });
  }, [debouncedSearch]);

  const handlePress = useCallback(
    (product: Product) => {
      navigation.navigate('ProductDetail', { productId: product.id });
    },
    [navigation]
  );

  const renderItem = useCallback(
    ({ item }: { item: Product }) => (
      <ProductCard product={item} onPress={() => handlePress(item)} />
    ),
    [handlePress]
  );

  const keyExtractor = useCallback((item: Product) => String(item.id), []);

  const insets = useSafeAreaInsets();

  if (loading) {
    return (
      <Centered insetsTop={insets.top}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
        <LoadingText>Loading products...</LoadingText>
      </Centered>
    );
  }

  if (error) {
    return (
      <Centered insetsTop={insets.top}>
        <Ionicons name="warning-outline" size={40} color={theme.colors.error} />
        <ErrorText>{error}</ErrorText>
      </Centered>
    );
  }

  return (
    <Container insetsTop={insets.top}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.colors.background} />
      <Header>
        <HeaderTitle>Products</HeaderTitle>
        <Ionicons
          name="people-circle"
          size={32}
          color={theme.colors.primary}
          onPress={() => navigation.navigate('UserList')}
        />
      </Header>
      {/* Sticky search and filter block */}
      <StickyHeader>
        <SearchBar
          value={searchInput}
          onChangeText={setSearchInput}
          placeholder="Search products..."
        />
        <SortFilterBar
          filterState={filterState}
          categories={categories}
          onUpdate={updateFilter}
        />
        {products.length > 0 && (
          <ResultCount>{products.length} products</ResultCount>
        )}
      </StickyHeader>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={
          <EmptyContainer>
            <Ionicons name="search-outline" size={48} color={theme.colors.textSecondary} />
            <EmptyTitle>No results found</EmptyTitle>
            <EmptySubtitle>Try adjusting your search or filters</EmptySubtitle>
          </EmptyContainer>
        }
        contentContainerStyle={{ paddingBottom: theme.spacing.xl }}
        showsVerticalScrollIndicator={false}
        initialNumToRender={8}
        maxToRenderPerBatch={10}
        windowSize={10}
        removeClippedSubviews
      />
    </Container>
  );
};

export default ProductListScreen;

