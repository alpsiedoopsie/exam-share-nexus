
import { useState, useEffect } from 'react';
import { UserRole } from '@/types';

// This is a placeholder hook that will be replaced with Supabase auth later
export function useUserRole() {
  // For now, we'll use localStorage to simulate role-based access
  const [role, setRole] = useState<UserRole>(() => {
    const savedRole = localStorage.getItem('userRole');
    return (savedRole as UserRole) || 'student';
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching user data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const updateRole = (newRole: UserRole) => {
    setRole(newRole);
    localStorage.setItem('userRole', newRole);
  };

  return { role, isLoading, updateRole };
}
