import React from 'react';

interface ISuggestion {
  name: string;
  type: string;
}

interface IProps {
  data: ISuggestion[];
  onClick: (suggestion: ISuggestion) => void;
}

const Suggestions = ({ data, onClick }: IProps) =>
  data.length > 0 && (
    <ul>
      {data.map((suggestion) => (
        <li key={suggestion.name} onClick={() => onClick(suggestion)}>
          {suggestion.name} {suggestion.type}
        </li>
      ))}
    </ul>
  );

export default Suggestions;
