import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';

function getGreeting(): string {
  const hour = new Date().getHours();

  if (hour < 12) {
    return 'Good morning';
  }

  if (hour < 17) {
    return 'Good afternoon';
  }

  return 'Good evening';
}

export function DashboardHeader() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="smallBold" themeColor="primary" style={styles.appName}>
        Shift Pay
      </ThemedText>
      <ThemedText type="subtitle" style={styles.greeting}>
        {getGreeting()}
      </ThemedText>
      <ThemedText themeColor="textSecondary" style={styles.subtitle}>
        Track your shifts and estimated pay at a glance.
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Spacing.one,
  },
  appName: {
    letterSpacing: 0.4,
    textTransform: 'uppercase',
  },
  greeting: {
    fontSize: 28,
    lineHeight: 34,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 22,
  },
});
