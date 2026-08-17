import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { MOCK_PAY_PERIOD } from '@/data/mock-dashboard';
import { useTheme } from '@/hooks/use-theme';

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function PayPeriodSummaryCard() {
  const theme = useTheme();

  return (
    <ThemedView type="backgroundElement" style={styles.card}>
      <ThemedView style={styles.headerRow}>
        <ThemedText type="smallBold">{MOCK_PAY_PERIOD.label}</ThemedText>
        <ThemedView style={styles.placeholderBadge}>
          <ThemedText type="code" themeColor="textSecondary">
            PLACEHOLDER
          </ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedText type="small" themeColor="textSecondary">
        {MOCK_PAY_PERIOD.dateRange}
      </ThemedText>

      <ThemedView style={styles.payBlock}>
        <ThemedText style={styles.estimatedPay}>{formatCurrency(MOCK_PAY_PERIOD.estimatedPay)}</ThemedText>
        <ThemedText type="small" themeColor="textSecondary">
          Estimated pay
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.statsRow}>
        <ThemedView style={styles.stat}>
          <ThemedText type="smallBold">{MOCK_PAY_PERIOD.hoursWorked}</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            Hours worked
          </ThemedText>
        </ThemedView>

        <ThemedView style={[styles.divider, { backgroundColor: theme.border }]} />

        <ThemedView style={styles.stat}>
          <ThemedText type="smallBold">{MOCK_PAY_PERIOD.shiftCount}</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            Shifts
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: Spacing.three,
    padding: Spacing.four,
    gap: Spacing.three,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.two,
  },
  placeholderBadge: {
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.half,
    borderRadius: Spacing.one,
  },
  payBlock: {
    gap: Spacing.half,
  },
  estimatedPay: {
    fontSize: 36,
    lineHeight: 42,
    fontWeight: '700',
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: Spacing.three,
  },
  stat: {
    flex: 1,
    gap: Spacing.half,
  },
  divider: {
    width: 1,
  },
});
