import { Button } from "@mui/material";
import styled from "styled-components";
import theme from "../../../styles/theme";

export const IntranetContainer = styled.div`
    min-height: 100vh;
    background: ${theme.colors.background};
    padding: 40px 20px;
  `;

export const IntranetInnerContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
  `;

export const IntranetHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
  `;

export const IntranetTitle = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    color: ${theme.colors.text};
    margin: 0;
  `;

export const CreateButton = styled(Button)`
    background: ${theme.colors.primary} !important;
    color: white !important;
    text-transform: none !important;
    font-weight: 600 !important;
    border-radius: 8px !important;
    padding: 10px 24px !important;

    &:hover {
      background: #d4620a !important;
    }
  `;

export const TableContainer = styled.div`
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    overflow: hidden;
  `;

export const EditButton = styled(Button)`
    color: ${theme.colors.primary} !important;
    text-transform: none !important;
    font-weight: 500 !important;
    min-width: auto !important;
  `;

export const DeleteButton = styled(Button)`
    color: #e53935 !important;
    text-transform: none !important;
    font-weight: 500 !important;
    min-width: auto !important;
  `;

export const StatusChip = styled.span<{ active: boolean }>`
    display: inline-block;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    background: ${({ active }) => (active ? "rgba(97, 206, 112, 0.15)" : "rgba(0,0,0,0.08)")};
    color: ${({ active }) => (active ? theme.colors.secondary : "#999")};
  `;
