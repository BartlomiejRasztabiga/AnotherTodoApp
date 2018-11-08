import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  withMobileDialog
} from "@material-ui/core";

import { hideAddTodoDialog } from "../actions";
import { addTodo, uploadAttachments } from "../services/todosService";
import AttachmentsUploader from "./AttachmentsUploader";

function AddTodoDialog(props) {
  let [description, setDescription] = useState("");
  let [attachments, setAttachments] = useState([]);
  let [uploadInProgress, setUploadInProgress] = useState(false);

  const handleClose = () => {
    props.hideAddTodoDialog();
  };

  const handleFilesDrop = (acceptedFiles, rejectedFiles) => {
    setAttachments(acceptedFiles);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (attachments.length > 0) {
      setUploadInProgress(true);

      uploadAttachments(attachments, attachmentURLs => {
        setUploadInProgress(false);
        handleAddTodo(attachmentURLs);
      });
    } else {
      handleAddTodo();
    }
  };

  const handleAddTodo = attachmentsURLs => {
    let todo = { description };
    if (attachmentsURLs && attachmentsURLs.length > 0) {
      todo.attachments = attachmentsURLs;
    }

    addTodo(todo);
    setDescription("");
    setAttachments([]);

    handleClose();
  };

  return (
    <Dialog
      open={props.showAddTodoDialog}
      onClose={handleClose}
      fullScreen={props.fullScreen}
      style={{ overflowX: "hidden" }}
    >
      <DialogTitle>Add Todo</DialogTitle>
      <DialogContent onSubmit={handleSubmit} style={{ overflowX: "hidden" }}>
        <TextField
          label="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          margin="normal"
          variant="outlined"
          fullWidth
          multiline
        />
        <AttachmentsUploader
          onDrop={handleFilesDrop}
          attachments={attachments}
          uploadInProgress={uploadInProgress}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          color="primary"
          disabled={uploadInProgress}
        >
          Add Todo
        </Button>
      </DialogActions>
    </Dialog>
  );
}

AddTodoDialog.propTypes = {
  showAddTodoDialog: PropTypes.bool,
  hideAddTodoDialog: PropTypes.func,
  fullScreen: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    showAddTodoDialog: state.todosReducer.showAddTodoDialog
  };
};

const mapDispatchToProps = dispatch => {
  return {
    hideAddTodoDialog: () => dispatch(hideAddTodoDialog())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withMobileDialog()(AddTodoDialog));
