import styled, { css } from 'styled-components';

const glassmorphismStrong = css`
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.4);
`;

const typeColor: Record<string, string> = {
  success: '#2e7d32',
  error: '#c62828',
  warning: '#e65100',
  info: '#1565c0',
};

export const ToastContainer = styled.div`
  position: fixed;
  bottom: 24px;
  left: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 9999;
  pointer-events: none;
`;

interface ToastItemProps {
  $type: 'success' | 'error' | 'warning' | 'info';
}

export const ToastItem = styled.div<ToastItemProps>`
  ${glassmorphismStrong}
  pointer-events: all;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
  min-width: 300px;
  max-width: 400px;
  border-left: 3px solid ${({ $type }) => typeColor[$type]};

  svg {
    color: ${({ $type }) => typeColor[$type]};
    flex-shrink: 0;
    margin-top: 2px;
  }
`;

export const ToastBody = styled.div`
  flex: 1;
`;

export const ToastTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
`;

export const ToastMessage = styled.p`
  font-size: 12px;
  color: #555;
  margin: 2px 0 0;
`;

export const ToastClose = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  color: #999;
  transition: color 0.15s, background 0.15s;
  cursor: pointer;
  flex-shrink: 0;
  background: transparent;
  border: none;
  padding: 0;

  &:hover {
    color: #1a1a1a;
    background: #f0f0f0;
  }
`;
