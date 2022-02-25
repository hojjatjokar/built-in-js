import React from 'react';

interface IProps {
  data: {
    name: string;
    type: string;
  };
}

const Result = ({ data }: IProps) =>
  data ? (
    <p>
      {data.name} {data.type}
    </p>
  ) : null;

export default Result;
