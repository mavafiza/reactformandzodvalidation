import React from 'react';
import styled from 'styled-components';

interface CircleProps {
  width?: string;
  height?: string;
  color?: string;
  top?: string;
  left?: string;
  zIndex?: number;
}

const Circle: React.FC<CircleProps> = ({
  width = '112px',
  height = '112px',
  color = '#bc3a801a',
  top = '0',
  left = '0',
  zIndex = 1,
}) => {
  const MyCircle = styled.div`
    background-color: ${color};
    width: ${width};
    height: ${height};
    border-radius: 50%;
    position: absolute;
    top: ${top};
    left: ${left};
    z-index: ${zIndex};
  `;

  return <MyCircle />;
};

export default Circle;
