import React from "react";
import PropTypes from "prop-types";
import Dropzone from "react-dropzone";

import {
  Avatar,
  List,
  Typography,
  ListItem,
  ListItemText,
  LinearProgress
} from "@material-ui/core";
import AttachFileIcon from "@material-ui/icons/AttachFile";

function AttachmentsUploader(props) {
  return (
    <>
      <Dropzone
        onDrop={props.onDrop}
        accept="image/*,video/*,audio/*"
        className="dropzone"
      >
        {props.attachments.length > 0 ? (
          <List>
            {props.attachments.map((attachment, key) => (
              <ListItem key={key}>
                <Avatar>
                  <AttachFileIcon />
                </Avatar>
                <ListItemText>{attachment.name}</ListItemText>
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography align="center">Drop your attachments here...</Typography>
        )}
      </Dropzone>
      <br />
      <br />
      {props.uploadInProgress && <LinearProgress />}
    </>
  );
}

AttachmentsUploader.propTypes = {
  onDrop: PropTypes.func,
  attachments: PropTypes.array,
  uploadInProgress: PropTypes.bool
};

export default AttachmentsUploader;
