import React from 'react';
import PropTypes from 'prop-types';
import { FiExternalLink } from 'react-icons/fi';

export default function ExternalLink({ link, label }) {
  return (
    <a href={link} rel="noopener noreferrer">
      <FiExternalLink
        style={{ width: '16px', height: '14px', marginLeft: '5px' }}
      />
      {label}
    </a>
  );
}

ExternalLink.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
