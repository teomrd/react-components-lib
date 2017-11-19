import React from "react";
import PropTypes from "prop-types";

const AnnotatedSearchResult = ({ value, term }) => {
  const position = value.toLowerCase().indexOf(term.toLowerCase());
  const before = value.slice(0, position);
  const match = value.slice(position, position + term.length);
  const after = value.slice(position + term.length, value.length);
  return position < 0 ? (
    <div>{value}</div>
  ) : (
    <div>
      {before}
      <b>{match}</b>
      {after}
    </div>
  );
};

AnnotatedSearchResult.propTypes = {
  value: PropTypes.string,
  term: PropTypes.string
};

AnnotatedSearchResult.defaultProps = {
  value: "",
  term: ""
};

export default AnnotatedSearchResult;
