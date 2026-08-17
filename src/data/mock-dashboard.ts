/**
 * Placeholder dashboard data for the initial Shift Pay UI.
 * Replace with real pay-period and shift queries in a later step.
 */

export type MockShift = {
  id: string;
  date: string;
  hours: number;
  label: string;
  estimatedPay: number;
};

export const MOCK_PAY_PERIOD = {
  label: 'Current pay period',
  dateRange: 'Aug 1 – Aug 15, 2026',
  estimatedPay: 1240,
  hoursWorked: 32.5,
  shiftCount: 8,
} as const;

export const MOCK_RECENT_SHIFTS: MockShift[] = [
  {
    id: 'shift-1',
    date: 'Mon, Aug 12',
    hours: 8,
    label: 'Morning shift',
    estimatedPay: 156,
  },
  {
    id: 'shift-2',
    date: 'Sat, Aug 10',
    hours: 6.5,
    label: 'Evening shift',
    estimatedPay: 127.5,
  },
  {
    id: 'shift-3',
    date: 'Thu, Aug 8',
    hours: 7.5,
    label: 'Day shift',
    estimatedPay: 146.25,
  },
];
