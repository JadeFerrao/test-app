import React, { useState } from 'react';
import { Modal, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';
import { SortOption, Category, FilterState } from '../types';
import {
  Row, Chip, ChipText, ClearChip, ClearChipText, ChipIcon,
  Overlay, Sheet, TallSheet, SheetTitle, Option, OptionText,
} from './SortFilterBar.styles';

const SORT_OPTIONS: SortOption[] = [
  { label: 'Price: Low to High', value: 'price_asc' },
  { label: 'Price: High to Low', value: 'price_desc' },
  { label: 'Name: A–Z', value: 'name_asc' },
  { label: 'Name: Z–A', value: 'name_desc' },
];

interface SortFilterBarProps {
  filterState: FilterState;
  categories: Category[];
  onUpdate: (partial: Partial<FilterState>) => void;
}

const SortFilterBar: React.FC<SortFilterBarProps> = ({ filterState, categories, onUpdate }) => {
  const [showSort, setShowSort] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const activeSort = SORT_OPTIONS.find((o) => o.value === filterState.sort);
  const activeCategory = categories.find((c) => c.slug === filterState.category);
  const hasActiveFilters = filterState.sort || filterState.category;

  return (
    <Row>
      <Chip active={!!filterState.sort} onPress={() => setShowSort(true)}>
        <ChipIcon>
          <Ionicons
            name="swap-vertical"
            size={14}
            color={filterState.sort ? '#fff' : theme.colors.text}
          />
        </ChipIcon>
        <ChipText active={!!filterState.sort}>
          {activeSort ? activeSort.label : 'Sort'}
        </ChipText>
      </Chip>

      <Chip active={!!filterState.category} onPress={() => setShowFilter(true)}>
        <ChipIcon>
          <Ionicons
            name="filter"
            size={14}
            color={filterState.category ? '#fff' : theme.colors.text}
          />
        </ChipIcon>
        <ChipText active={!!filterState.category}>
          {activeCategory ? activeCategory.name : 'Category'}
        </ChipText>
      </Chip>

      {hasActiveFilters && (
        <ClearChip onPress={() => onUpdate({ sort: null, category: null })}>
          <ChipIcon>
            <Ionicons name="close" size={14} color={theme.colors.error} />
          </ChipIcon>
          <ClearChipText>Clear</ClearChipText>
        </ClearChip>
      )}

      <Modal visible={showSort} transparent animationType="slide">
        <Overlay onPress={() => setShowSort(false)} />
        <Sheet>
          <SheetTitle>Sort By</SheetTitle>
          {SORT_OPTIONS.map((opt) => (
            <Option
              key={opt.value}
              active={filterState.sort === opt.value}
              onPress={() => {
                onUpdate({ sort: filterState.sort === opt.value ? null : opt.value });
                setShowSort(false);
              }}
            >
              <OptionText active={filterState.sort === opt.value}>{opt.label}</OptionText>
              {filterState.sort === opt.value && (
                <Ionicons name="checkmark" size={18} color={theme.colors.primary} />
              )}
            </Option>
          ))}
        </Sheet>
      </Modal>

      <Modal visible={showFilter} transparent animationType="slide">
        <Overlay onPress={() => setShowFilter(false)} />
        <TallSheet>
          <SheetTitle>Filter by Category</SheetTitle>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Option
              active={!filterState.category}
              onPress={() => { onUpdate({ category: null }); setShowFilter(false); }}
            >
              <OptionText active={!filterState.category}>All Categories</OptionText>
              {!filterState.category && (
                <Ionicons name="checkmark" size={18} color={theme.colors.primary} />
              )}
            </Option>
            {categories.map((cat) => (
              <Option
                key={cat.slug}
                active={filterState.category === cat.slug}
                onPress={() => {
                  onUpdate({ category: filterState.category === cat.slug ? null : cat.slug });
                  setShowFilter(false);
                }}
              >
                <OptionText active={filterState.category === cat.slug}>{cat.name}</OptionText>
                {filterState.category === cat.slug && (
                  <Ionicons name="checkmark" size={18} color={theme.colors.primary} />
                )}
              </Option>
            ))}
          </ScrollView>
        </TallSheet>
      </Modal>
    </Row>
  );
};

export default SortFilterBar;
