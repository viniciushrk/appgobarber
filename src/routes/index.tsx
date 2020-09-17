import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import AuthRoute from './auth.route';
import AppRoutes from './app.route';

import { useAuth } from '../hooks/auth';

const Routes: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  return user ? <AppRoutes /> : <AuthRoute />;
};

export default Routes;
