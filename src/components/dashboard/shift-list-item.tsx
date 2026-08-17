import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { type MockShift } from '@/data/mock-dashboard';

type ShiftListItemProps = {
  shift: MockShift;
};

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function ShiftListItem({ shift }: ShiftListItemProps) {
  return (
    <ThemedView type="backgroundElement" style={styles.item}>
      <ThemedView style={styles.topRow}>
        <ThemedText type="smallBold">{shift.date}</ThemedText>
        <ThemedText type="smallBold" themeColor="primary">
          {formatCurrency(shift.estimatedPay)}
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.bottomRow}>
        <ThemedText type="small" themeColor="textSecondary">
          {shift.hours} hrs · {shift.label}
        </ThemedText>
        <ThemedText type="code" themeColor="textSecondary">
          MOCK
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  item: {
    borderRadius: Spacing.two,
    padding: Spacing.three,
    gap: Spacing.one,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: Spacing.two,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: Spacing.two,
  },
});
