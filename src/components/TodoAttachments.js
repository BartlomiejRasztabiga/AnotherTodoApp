import React from "react";
import PropTypes from "prop-types";
import { IconButton } from "@material-ui/core";

import AttachmentIcon from "@material-ui/icons/Attachment";

function TodoAttachments(props) {
  const openLinkInNewTab = url => {
    let tab = window.open(url, "_blank");
    tab.focus();
  };

  return (
    <div style={{ marginRight: 50 }}>
      {props.todoData.attachments &&
        props.todoData.attachments.map((attachment, key) => (
          <IconButton
            aria-label="Attachment"
            key={key}
            onClick={() => openLinkInNewTab(attachment)}
          >
            <AttachmentIcon />
          </IconButton>
        ))}
    </div>
  );
}

TodoAttachments.propTypes = {
  todoData: PropTypes.object
};

export default TodoAttachments;
