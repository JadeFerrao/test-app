import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';
import { Container, Icon, Input, ClearButton } from './SearchBar.styles';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  placeholder = 'Search...',
}) => {
  return (
    <Container>
      <Icon>
        <Ionicons name="search" size={16} color={theme.colors.textSecondary} />
      </Icon>
      <Input
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.textSecondary}
        returnKeyType="search"
        autoCorrect={false}
        autoCapitalize="none"
      />
      {value.length > 0 && (
        <ClearButton onPress={() => onChangeText('')}>
          <Ionicons name="close-circle" size={18} color={theme.colors.textSecondary} />
        </ClearButton>
      )}
    </Container>
  );
};

export default SearchBar;

