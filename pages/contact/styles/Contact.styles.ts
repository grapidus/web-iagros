import { Button } from '@mui/material';
import styled, { keyframes } from 'styled-components';
import { device, size } from '../../../constants/breakpoints';
import theme from '../../../styles/theme';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ── Page wrapper ───────────────────────────────────────────────────────── */

export const ContactContainer = styled.div`
  width: 100%;
  background: #fafaf8;
`;

export const ContactInnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem 6rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  animation: ${fadeUp} 0.7s ease both;

  @media (min-width: ${size.md}px) {
    padding: 5rem 2rem 7rem;
  }

  @media ${device.lg} {
    grid-template-columns: 1fr 1.3fr;
    gap: 5rem;
    align-items: start;
  }
`;

/* ── Info panel ─────────────────────────────────────────────────────────── */

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ContactHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const EyebrowLabel = styled.span`
  display: inline-block;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${theme.colors.primary};
  background: rgba(238, 112, 7, 0.08);
  border: 1px solid rgba(238, 112, 7, 0.2);
  border-radius: 100px;
  padding: 0.35rem 1rem;
  width: fit-content;
`;

export const Title = styled.h1`
  font-family: 'Fraunces', serif;
  font-size: clamp(2rem, 1.4rem + 2.2vw, 3rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: #1a2e1d;
  margin: 0;

  span {
    color: ${theme.colors.primary};
  }
`;

export const Description = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 1.05rem;
  line-height: 1.75;
  color: #4a5e50;
  margin: 0;
  max-width: 44ch;
`;

/* ── Feature items ──────────────────────────────────────────────────────── */

export const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem;
  border-radius: 16px;
  background: #fff;
  border: 1px solid rgba(28, 46, 35, 0.07);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.09);
  }
`;

export const FeatureIcon = styled.div<{ $color?: string }>`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: ${({ $color }) => $color ?? `linear-gradient(135deg, #c05e00, ${theme.colors.primary})`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const FeatureText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h3 {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    color: #1a2e1d;
    margin: 0;
  }

  p {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.88rem;
    color: #5a7060;
    margin: 0;
    line-height: 1.5;
  }
`;

/* ── Contact info cards ─────────────────────────────────────────────────── */

export const ContactInfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
`;

export const ContactInfoCard = styled.a`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding: 1rem 1.1rem;
  border-radius: 14px;
  background: #fff;
  border: 1px solid rgba(28, 46, 35, 0.07);
  text-decoration: none;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:hover {
    border-color: rgba(238, 112, 7, 0.3);
    box-shadow: 0 6px 20px rgba(238, 112, 7, 0.08);
  }
`;

export const ContactInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding: 1rem 1.1rem;
  border-radius: 14px;
  background: #fff;
  border: 1px solid rgba(28, 46, 35, 0.07);
`;

export const InfoLabel = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${theme.colors.primary};
`;

export const InfoValue = styled.span`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.88rem;
  color: #1a2e1d;
  font-weight: 500;
  line-height: 1.4;
`;

/* ── Form section ───────────────────────────────────────────────────────── */

export const FormSection = styled.div`
  position: relative;
`;

export const FormContainer = styled.div`
  background: #fff;
  border-radius: 24px;
  padding: 2.5rem 2rem;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(28, 46, 35, 0.07);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary});
    border-radius: 24px 24px 0 0;
  }

  @media (min-width: ${size.md}px) {
    padding: 3rem 2.5rem;
  }
`;

export const FormTitle = styled.h2`
  font-family: 'Fraunces', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a2e1d;
  margin: 0 0 2rem;
`;

export const FormGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -12px;
`;

export const FormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

interface FormColumnProps {
  half?: boolean;
}

export const FormColumn = styled.div<FormColumnProps>`
  flex: 0 0 100%;
  max-width: 100%;
  padding: 12px;

  @media ${device.sm} {
    flex: ${({ half }) => (half ? '0 0 50%' : '0 0 100%')};
    max-width: ${({ half }) => (half ? '50%' : '100%')};
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(28, 46, 35, 0.08);
`;

export const StyledSubmitButton = styled(Button)`
  background: linear-gradient(135deg, ${theme.colors.primary}, #ff9a3c) !important;
  color: #fff !important;
  border: none !important;
  border-radius: 12px !important;
  padding: 0.875rem 2.5rem !important;
  font-family: 'DM Sans', sans-serif !important;
  font-size: 1rem !important;
  font-weight: 700 !important;
  text-transform: none !important;
  letter-spacing: 0 !important;
  box-shadow: 0 4px 20px rgba(238, 112, 7, 0.35) !important;
  transition: transform 0.2s ease, box-shadow 0.2s ease !important;
  width: 100%;

  &:hover:not(:disabled) {
    transform: translateY(-2px) !important;
    box-shadow: 0 8px 28px rgba(238, 112, 7, 0.45) !important;
  }

  &:active {
    transform: translateY(0) !important;
  }

  &:disabled {
    background: #e8ede9 !important;
    color: #9ab09e !important;
    box-shadow: none !important;
  }
`;

export const FormNote = styled.div`
  margin-top: 1rem;
  text-align: center;
`;

export const NoteText = styled.p`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  color: #8aa48e;
  margin: 0;
`;
