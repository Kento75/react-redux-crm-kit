import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import LinearProgress from '@material-ui/core/LinearProgress';
import DialogContent from '@material-ui/core/DialogContent';

const LoadingDialog = ({ isLoadingDialogOpen, progressColor }) => (
  <Dialog open={isLoadingDialogOpen} fullWidth maxWidth={'md'}>
    <DialogContent>
      <LinearProgress mode="indeterminate" color={progressColor} />
    </DialogContent>
  </Dialog>
);

LoadingDialog.propTypes = {
  isLoadingDialogOpen: PropTypes.bool.isRequired,
  progressColor: PropTypes.string.isRequired,
};

export default LoadingDialog;
