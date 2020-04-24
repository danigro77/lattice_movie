import React from 'react';
import PropTypes from 'prop-types';
import { MdCheck, MdClose } from 'react-icons/md';

import { formatDate } from '../../utils/datesAndTimes';
import './style.css';

const TitleValueRow = ({
  title,
  value,
  isDate,
  isMoney,
  isBoolean,
  isLink,
}) => {
  const handleValue = () => {
    if (isDate) return formatDate(new Date(value));
    if (isMoney) return `$ ${value}`;
    if (isLink) return <a href={value} rel="noopener noreferrer" target="_blank">{value}</a>;
    if (isBoolean) return value ? <MdCheck /> : <MdClose />;
    return value;
  };

  return (
    <div className="row">
      <div className="row-title">{title}</div>
      <div className="row-value">{handleValue()}</div>
    </div>
  );
};

TitleValueRow.defaultProps = {
  isDate: false,
  isMoney: false,
  isBoolean: false,
  isLink: false,
};

TitleValueRow.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
  isDate: PropTypes.bool,
  isMoney: PropTypes.bool,
  isBoolean: PropTypes.bool,
  isLink: PropTypes.bool,
};

export default TitleValueRow;
