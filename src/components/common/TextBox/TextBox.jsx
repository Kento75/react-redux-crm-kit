import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const TextBox = ({ labelText, placeholderText, textValue, onKeyDownFunc, onChangeFunc }) => (
  <TextField
    label={labelText}
    placeholder={placeholderText}
    value={textValue}
    onKeyDown={e => onKeyDownFunc(e)}
    onChange={e => onChangeFunc(e)}
    margin="normal"
  />
);

TextBox.propTypes = {
  labelText: PropTypes.string.isRequired,
  placeholderText: PropTypes.string.isRequired,
  textValue: PropTypes.string.isRequired,
  onKeyDownFunc: PropTypes.func.isRequired,
  onChangeFunc: PropTypes.func.isRequired,
};

export default TextBox;
