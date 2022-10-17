import styled from '@emotion/styled';

export const Card = styled.div`
  position: relative;
  border: 2px dashed black;
  padding: 8px;
  border-radius: 4px;
`;
export const CardName = styled.h2`
  margin-top: 0;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;
export const Info = styled.p`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: 8px;
  color: ${p => p.theme.color.text};
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.25px;

  svg {
    display: block;
    margin-right: 8px;
    color: rgb(165, 164, 164);
  }
`;

export const Chip = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  color: ${p => p.theme.color.acent};

  background-color: ${({ eventType }) => {
    switch (eventType) {
      case 'free':
        return 'rgb(26, 158, 0)';
      case 'paid':
        return 'rgb(0, 68, 253)';
      case 'vip':
        return 'rgb(253, 59, 0)';
      default:
        return 'rgb(138, 138, 138)';
    }
  }};
`;
