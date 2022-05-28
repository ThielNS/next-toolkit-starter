import { Grid as _Grid } from '@mantine/core';
import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{}>;

const { Col } = _Grid;

const Grid: React.FC<Props> = ({ children }) => {
  return (
    <_Grid gutter="xl">
      {React.Children.map(children, (component) => (
        <Col span={12} md={6}>
          {component}
        </Col>
      ))}
    </_Grid>
  );
};

export default Grid;
