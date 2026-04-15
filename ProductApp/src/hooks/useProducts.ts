import { useState, useEffect, useMemo } from 'react';
import { fetchProducts, fetchCategories } from '../api/products';
import { Product, Category, FilterState, ProductSortField } from '../types';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterState, setFilterState] = useState<FilterState>({
    search: '',
    sort: null,
    category: null,
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [productsData, categoriesData] = await Promise.all([
          fetchProducts(),
          fetchCategories(),
        ]);
        setProducts(productsData.products);
        setCategories(categoriesData);
      } catch (err) {
        setError('Failed to load products. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by search
    if (filterState.search.trim()) {
      const q = filterState.search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // Filter by category
    if (filterState.category) {
      result = result.filter((p) => p.category === filterState.category);
    }

    // Sort
    if (filterState.sort) {
      result = sortProducts(result, filterState.sort);
    }

    return result;
  }, [products, filterState]);

  const updateFilter = (partial: Partial<FilterState>) => {
    setFilterState((prev) => ({ ...prev, ...partial }));
  };

  return {
    products: filteredProducts,
    categories,
    loading,
    error,
    filterState,
    updateFilter,
  };
}

function sortProducts(products: Product[], sort: ProductSortField): Product[] {
  return [...products].sort((a, b) => {
    switch (sort) {
      case 'price_asc':
        return a.price - b.price;
      case 'price_desc':
        return b.price - a.price;
      case 'name_asc':
        return a.title.localeCompare(b.title);
      case 'name_desc':
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });
}
