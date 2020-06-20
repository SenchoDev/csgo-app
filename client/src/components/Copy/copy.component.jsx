import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { connect } from "react-redux";

import { toggleCopiedButton } from "../../redux/settings/settings.actions";
import InfoButton from "../info-buton/info-button.component";

import ClipboardImg from "../../assets/copy.png";

import "./copy.styles.scss";

const Copy = ({ toggleCopiedButton, crosshair }) => (
    <CopyToClipboard
      text={crosshair}
      onCopy={() =>
        toggleCopiedButton(true) &&
        setTimeout(() => toggleCopiedButton(false), 1200)
      }
    >
      <button className="copy">
        <InfoButton img={ClipboardImg} purple fix text={"Copy crosshair"} />
      </button>
    </CopyToClipboard>
)
const mapDispatchToProps = (dispatch) => ({
  toggleCopiedButton: (boolVal) => dispatch(toggleCopiedButton(boolVal)),
});

export default connect(null, mapDispatchToProps)(Copy);
