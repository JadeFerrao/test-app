import { useState, useEffect, useMemo } from 'react';
import { fetchUsers } from '../api/users';
import { User, UsersResponse, UserFilterState, UserSortField } from '../types';

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterState, setFilterState] = useState<UserFilterState>({
    lastName: '',
    emailDomain: '',
    sort: null,
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        // We fetch a larger batch to support client-side domain filtering if needed
        const data = await fetchUsers({ limit: 100 });
        setUsers(data.users);
      } catch (err) {
        setError('Failed to load users. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const filteredUsers = useMemo(() => {
    let result = [...users];

    // Filter by last name
    if (filterState.lastName.trim()) {
      const q = filterState.lastName.toLowerCase();
      result = result.filter((u) => u.lastName.toLowerCase().includes(q));
    }

    // Filter by email domain
    if (filterState.emailDomain.trim()) {
      const domain = filterState.emailDomain.toLowerCase();
      result = result.filter((u) => u.email.toLowerCase().endsWith(domain) || u.email.toLowerCase().includes(`@${domain}`));
    }

    // Sort
    if (filterState.sort) {
      result = sortUsers(result, filterState.sort);
    }

    return result;
  }, [users, filterState]);

  const updateFilter = (partial: Partial<UserFilterState>) => {
    setFilterState((prev) => ({ ...prev, ...partial }));
  };

  return {
    users: filteredUsers,
    loading,
    error,
    filterState,
    updateFilter,
  };
}

function sortUsers(users: User[], sort: UserSortField): User[] {
  return [...users].sort((a, b) => {
    switch (sort) {
      case 'name_asc':
        return `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`);
      case 'name_desc':
        return `${b.firstName} ${b.lastName}`.localeCompare(`${a.firstName} ${a.lastName}`);
      case 'id_asc':
        return a.id - b.id;
      case 'id_desc':
        return b.id - a.id;
      default:
        return 0;
    }
  });
}
