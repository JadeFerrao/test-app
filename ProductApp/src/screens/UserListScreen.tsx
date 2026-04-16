import React, { useCallback } from 'react';
import {
  FlatList,
  ActivityIndicator,
  StatusBar,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { useUsers } from '../hooks/useUsers';
import { User, RootStackParamList, UserSortField, SortOption } from '../types';
import { theme } from '../theme';
import {
  Container, Centered, Header, HeaderTitle, StickyHeader, ResultCount,
  LoadingText, ErrorText, EmptyContainer, EmptyTitle, EmptySubtitle,
  UserCard, UserImage, UserInfo, UserName, UserEmail, UserRole, UserRoleText,
  InputGroup, FilterInput, SortRow
} from './UserListScreen.styles';
import { Chip, ChipText } from '../components/SortFilterBar.styles';

type NavProp = NativeStackNavigationProp<RootStackParamList, 'UserList'>;

const SORT_OPTIONS: SortOption<UserSortField>[] = [
  { label: 'Name: A-Z', value: 'name_asc' },
  { label: 'Name: Z-A', value: 'name_desc' },
  { label: 'ID: Ascending', value: 'id_asc' },
  { label: 'ID: Descending', value: 'id_desc' },
];

const UserListScreen: React.FC = () => {
  const navigation = useNavigation<NavProp>();
  const insets = useSafeAreaInsets();
  const { users, loading, error, filterState, updateFilter } = useUsers();

  const renderItem = useCallback(
    ({ item }: { item: User }) => (
      <UserCard activeOpacity={0.7}>
        <UserImage source={{ uri: item.image }} />
        <UserInfo>
          <UserName>{`${item.firstName} ${item.lastName}`}</UserName>
          <UserEmail>{item.email}</UserEmail>
          <UserRole>
            <UserRoleText>{item.role}</UserRoleText>
          </UserRole>
        </UserInfo>
      </UserCard>
    ),
    []
  );

  const keyExtractor = useCallback((item: User) => String(item.id), []);

  if (loading) {
    return (
      <Centered insetsTop={insets.top}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
        <LoadingText>Loading users...</LoadingText>
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
        <HeaderTitle>Users</HeaderTitle>
        <Ionicons
          name="close"
          size={28}
          color={theme.colors.text}
          onPress={() => navigation.goBack()}
        />
      </Header>

      <StickyHeader>
        <InputGroup>
          <FilterInput
            placeholder="Filter by Last Name"
            value={filterState.lastName}
            onChangeText={(text: string) => updateFilter({ lastName: text })}
          />
          <FilterInput
            placeholder="Filter by Email Domain (e.g. gmail.com)"
            value={filterState.emailDomain}
            onChangeText={(text: string) => updateFilter({ emailDomain: text })}
          />
        </InputGroup>

        <SortRow horizontal showsHorizontalScrollIndicator={false}>
          {SORT_OPTIONS.map((opt) => (
            <Chip
              key={opt.value}
              active={filterState.sort === opt.value}
              onPress={() => updateFilter({ sort: filterState.sort === opt.value ? null : opt.value })}
              style={{ marginRight: 8, height: 32 }}
            >
              <ChipText active={filterState.sort === opt.value}>{opt.label}</ChipText>
            </Chip>
          ))}
        </SortRow>

        {users.length > 0 && (
          <ResultCount>{users.length} users found</ResultCount>
        )}
      </StickyHeader>

      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={
          <EmptyContainer>
            <Ionicons name="people-outline" size={48} color={theme.colors.textSecondary} />
            <EmptyTitle>No users found</EmptyTitle>
            <EmptySubtitle>Try adjusting your search or filters</EmptySubtitle>
          </EmptyContainer>
        }
        contentContainerStyle={{ paddingBottom: theme.spacing.xl }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default UserListScreen;
