import { create } from 'zustand';

type Severity = 'success' | 'error' | 'info' | 'warning';

interface NotificationState {
  open: boolean;
  message: string;
  severity: Severity;
  show: (message: string, severity: Severity) => void;
  hide: () => void;
}

export const useNotificationStore = create<NotificationState>((set) => ({
  open: false,
  message: '',
  severity: 'info',
  show: (message, severity) => set({ open: true, message, severity }),
  hide: () => set({ open: false }),
}));
