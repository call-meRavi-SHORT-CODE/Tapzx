import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useAuth } from '../../contexts/AuthContext';
import { router } from 'expo-router';

export default function SettingsScreen() {
  const { logout } = useAuth();

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Logout",
          style: "destructive",
          onPress: async () => {
            try {
              await logout();
              router.replace('/(auth)/signin');
            } catch (error: any) {
              Alert.alert("Error", error.message);
            }
          }
        }
      ]
    );
  };

  const handleEditProfile = () => {
    router.push('/(auth)/profile');
  };

  const handleEditLinks = () => {
    router.push('/(auth)/addlinks');
  };

  const settingsItems = [
    {
      title: 'Edit Profile',
      subtitle: 'Update your personal information',
      icon: 'person-outline',
      onPress: handleEditProfile,
    },
    {
      title: 'Manage Links',
      subtitle: 'Add or edit your social links',
      icon: 'link-outline',
      onPress: handleEditLinks,
    },
    {
      title: 'Privacy Settings',
      subtitle: 'Control who can see your profile',
      icon: 'shield-outline',
      onPress: () => Alert.alert('Coming Soon', 'Privacy settings will be available soon!'),
    },
    {
      title: 'Notifications',
      subtitle: 'Manage your notification preferences',
      icon: 'notifications-outline',
      onPress: () => Alert.alert('Coming Soon', 'Notification settings will be available soon!'),
    },
    {
      title: 'Analytics',
      subtitle: 'View your profile performance',
      icon: 'analytics-outline',
      onPress: () => Alert.alert('Coming Soon', 'Analytics will be available soon!'),
    },
    {
      title: 'Help & Support',
      subtitle: 'Get help and contact support',
      icon: 'help-circle-outline',
      onPress: () => Alert.alert('Coming Soon', 'Help & Support will be available soon!'),
    },
    {
      title: 'About',
      subtitle: 'App version and information',
      icon: 'information-circle-outline',
      onPress: () => Alert.alert('About Tapzx', 'Version 1.0.0\n\nTapzx - Your digital business card'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient colors={["#0F172A", "#1E293B", "#334155"]} style={styles.gradient}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Settings</Text>
          </View>

          {/* Settings Items */}
          <View style={styles.settingsContainer}>
            {settingsItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.settingItem}
                onPress={item.onPress}
                activeOpacity={0.7}
              >
                <View style={styles.settingIcon}>
                  <Ionicons name={item.icon as any} size={20} color="#F59E0B" />
                </View>
                <View style={styles.settingContent}>
                  <Text style={styles.settingTitle}>{item.title}</Text>
                  <Text style={styles.settingSubtitle}>{item.subtitle}</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#64748B" />
              </TouchableOpacity>
            ))}
          </View>

          {/* Logout Button */}
          <View style={styles.logoutContainer}>
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
              <View style={styles.logoutIcon}>
                <Ionicons name="log-out-outline" size={20} color="#EF4444" />
              </View>
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>

          {/* App Info */}
          <View style={styles.appInfo}>
            <Text style={styles.appInfoText}>Tapzx v1.0.0</Text>
            <Text style={styles.appInfoSubtext}>Made with ❤️ for digital networking</Text>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
  },
  gradient: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  settingsContainer: {
    marginBottom: 32,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  settingIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  settingContent: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: 14,
    color: '#94A3B8',
  },
  logoutContainer: {
    marginBottom: 32,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(239, 68, 68, 0.2)',
  },
  logoutIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#EF4444',
  },
  appInfo: {
    alignItems: 'center',
    paddingBottom: 32,
  },
  appInfoText: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 4,
  },
  appInfoSubtext: {
    fontSize: 12,
    color: '#64748B',
  },
});