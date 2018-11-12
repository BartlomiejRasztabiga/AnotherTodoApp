import React from "react";
import PropTypes from "prop-types";
import { IconButton, Tooltip } from "@material-ui/core";

import AttachmentIcon from "@material-ui/icons/Attachment";

function TodoAttachments(props) {
  const openLinkInNewTab = url => {
    let tab = window.open(url, "_blank");
    tab.focus();
  };

  return (
    <div style={{ marginRight: 50 }}>
      {props.todoData.attachments &&
        props.todoData.attachments.map((attachment, key) => {
          let attachmentObject = Object.entries(attachment)[0];
          return (
            <Tooltip key={key} title={attachmentObject[0]}>
              <IconButton
                aria-label="Attachment"
                onClick={() => openLinkInNewTab(attachmentObject[1])}
              >
                <AttachmentIcon />
              </IconButton>
            </Tooltip>
          );
        })}
    </div>
  );
}

TodoAttachments.propTypes = {
  todoData: PropTypes.object
};

export default TodoAttachments;
