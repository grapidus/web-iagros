import styled from 'styled-components';
import { device } from '../../../../constants/breakpoints';

export const FooterContainer = styled.footer`
  background-color: #ee7007;
  color: white;
  padding: 40px 0 20px;
  font-family: 'Roboto', Arial, sans-serif;
  position: relative;
  width: 100%;
`;

export const WaveContainer = styled.div`
  width: 100%;
  height: 20vw;
  min-height: 80px;
  max-height: 370px;
  background: url('https://iagros.com/wp-content/uploads/2024/10/background-footer-svg.svg')
    no-repeat center center;
  background-size: cover;
  margin-bottom: -1px;
`;

export const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  position: relative;
  z-index: 3;

  @media ${device.sm} {
    padding: 0 1.5rem;
    gap: 35px;
  }

  @media ${device.md} {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 2rem;
    gap: 40px;
  }

  @media ${device.lg} {
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
  }
`;

export const FooterSection = styled.div`
  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
    color: white;
  }

  p {
    margin: 8px 0;
    line-height: 1.6;
    font-size: 14px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 12px;

      a {
        color: white;
        text-decoration: none;
        font-size: 14px;
        transition: opacity 0.3s ease;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;

export const LogoSection = styled(FooterSection)`
  img {
    max-width: 150px;
    height: auto;
    margin-bottom: 15px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0;
  flex-wrap: wrap;

  @media ${device.sm} {
    gap: 15px;
  }

  a {
    display: inline-block;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    img {
      width: 25px;
      height: 25px;
      object-fit: contain;

      @media ${device.sm} {
        width: 30px;
        height: 30px;
      }
    }
  }
`;

export const MapContainer = styled.div`
  iframe {
    width: 100%;
    height: 180px;
    border: 0;
    border-radius: 8px;

    @media ${device.sm} {
      height: 200px;
    }

    @media ${device.md} {
      height: 220px;
    }
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);

  p {
    margin: 0;
    font-size: 12px;
    opacity: 0.8;
  }
`;

export const TermsLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 15px;

  @media ${device.sm} {
    flex-direction: row;
    justify-content: center;
    gap: 20px;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 12px;
    opacity: 0.8;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 1;
    }
  }
`;
