/* eslint-disable require-jsdoc */
import React from 'react';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
    minHeight: '180px',
    minWidth: '220px'
  }
});

class PPGModal extends React.Component {

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.log(error, info);
  }

  render() {
    const {setOpen, classes, width, height, setPadding, onlyChildren, onBackAction} = this.props;
    let style = {
      margin: 'auto',
      width: width,
      height: height,
      overflowY: 'scroll',
      padding: '32px',
    };
  
    if (!setPadding) {
      style.padding = '48px 0px 0px 0px';
    }

    if (onlyChildren) {
      style.padding = '0px 0px 0px 0px';
    }
  
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={setOpen}
        onClose={this.props.handleClose}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={style}
          className={classes.paper}
        >
          {
            onlyChildren ? this.props.children : (
              <>
                <div style={{ position: 'absolute', top: '5px', left: '5px' }}>
                  {
                    (onBackAction) ? (
                      <IconButton onClick={this.props.onBackAction}>
                        <ArrowBackIcon />
                      </IconButton>
                      )
                    : null
                  }
                </div>
                <div style={{ position: 'absolute', top: '5px', right: '5px' }}>
                  <IconButton onClick={this.props.handleClose}>
                    <Close />
                  </IconButton>
                </div>
                { this.props.children }
              </>
            )
          }
        </div>
      </Modal>
    );
  }
}

export default withStyles(styles)(PPGModal);
