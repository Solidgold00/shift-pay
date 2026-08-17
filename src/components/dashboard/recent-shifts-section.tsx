import { StyleSheet } from 'react-native';

import { ShiftListItem } from '@/components/dashboard/shift-list-item';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { MOCK_RECENT_SHIFTS } from '@/data/mock-dashboard';

export function RecentShiftsSection() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.headerRow}>
        <ThemedText type="smallBold">Recent shifts</ThemedText>
        <ThemedText type="code" themeColor="textSecondary">
          PLACEHOLDER DATA
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.list}>
        {MOCK_RECENT_SHIFTS.map((shift) => (
          <ShiftListItem key={shift.id} shift={shift} />
        ))}
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Spacing.three,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.two,
  },
  list: {
    gap: Spacing.two,
  },
});
