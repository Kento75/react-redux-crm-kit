import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';

const ResultDialog = ({ isResultDialogOpen, onCloseDialog, resultDialogTitle, resultDialogMessage }) => (
  <Dialog open={isResultDialogOpen} fullWidth maxWidth={'md'}>
    <DialogContent>
      <DialogTitle> {resultDialogTitle} </DialogTitle>
      <DialogContentText> {resultDialogMessage} </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onCloseDialog} color="primary">
        OK
      </Button>
    </DialogActions>
  </Dialog>
);

ResultDialog.propTypes = {
  isResultDialogOpen: PropTypes.bool.isRequired,
  onCloseDialog: PropTypes.func.isRequired,
  resultDialogTitle: PropTypes.string.isRequired,
  resultDialogMessage: PropTypes.string.isRequired,
};

export default ResultDialog;
