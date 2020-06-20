import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "./playerscrosshairs.styles.scss";

import InfoButton from "../../components/info-buton/info-button.component";

import Copy from "../../assets/copy.png";
import PinkHeart from "../../assets/pink.png";

import { selectFavoriteCrosshairs } from "../../redux/settings/settings.selector";
import { toggleCopiedButton} from "../../redux/settings/settings.actions";
import { selectIfCopied } from "../../redux/settings/settings.selector";


const PlayersCrosshairs = ({ savedCrosshairs, copied, toggleCopiedButton }) => {
  return (
    <div className="crosshair">
    <div className={`${copied ? 'info__copied-succes': ''} info__copied`}> <p className="info__copied-text">Copied to clipboard</p></div>
      
    {savedCrosshairs.map(({ crosshair, id, name, team}) => (
        <div className="crosshair__wrap" key={id}>
          <img src={PinkHeart} alt="pink heart" />
          <h2 className="crosshair__heading">{name}</h2>
          <span className="crosshair__team">{team}</span>
          <CopyToClipboard
            text={crosshair}
            onCopy={() =>
              toggleCopiedButton(true) &&
              setTimeout(() => toggleCopiedButton(false), 3000)
            }
          >
            <button className="info__btn-wrap">
              <InfoButton
                img={Copy}
                purple
                fix
                text={"Copy crosshair"}
              />
            </button>
          </CopyToClipboard>
          <p className="crosshair__config">See config</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  savedCrosshairs: selectFavoriteCrosshairs,
  copied: selectIfCopied
});

const mapDispatchToProps = (dispatch) => ({
  toggleCopiedButton: (boolVal) => dispatch(toggleCopiedButton(boolVal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayersCrosshairs);
