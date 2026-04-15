import { useUIStore } from '../../stores/uiStore';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, AlertTriangle, CheckCircle, Info, X } from 'lucide-react';
import {
  ToastBody,
  ToastClose,
  ToastContainer,
  ToastItem,
  ToastMessage,
  ToastTitle
} from './styles/Toast.styles';

const icons = {
  success: <CheckCircle size={16} />,
  error: <AlertCircle size={16} />,
  warning: <AlertTriangle size={16} />,
  info: <Info size={16} />
};

export function ToastProvider() {
  const { toasts, removeToast } = useUIStore();

  return (
    <ToastContainer>
      <AnimatePresence>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, x: -40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -40, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <ToastItem $type={t.type}>
              {icons[t.type]}
              <ToastBody>
                <ToastTitle>{t.title}</ToastTitle>
                {t.message && <ToastMessage>{t.message}</ToastMessage>}
              </ToastBody>
              <ToastClose onClick={() => removeToast(t.id)} aria-label="Cerrar">
                <X size={14} />
              </ToastClose>
            </ToastItem>
          </motion.div>
        ))}
      </AnimatePresence>
    </ToastContainer>
  );
}

export default ToastProvider;
