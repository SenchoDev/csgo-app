import React from "react";
import { shallow } from "enzyme";

import { PlayerInfo } from './player-info.component'

describe("PlayerInfo component", () => {
  let wrapper;
  let mockTogglePlayersInfoHidden;
  let mockAddCrosshair;
  const mockInfo = { id: 1,
    name: "text",
    img: "jpg",
    role: "text",
    crosshairImg: "jpg",
    settings: {
      monitor: "a",
      mouse: "b",
      keyboard: "c",
      headset: "d",
      mousepad: "e",
    },
    crosshair:"text",}

  beforeEach(() => {
    mockTogglePlayersInfoHidden = jest.fn();

    const mockProps = {
      currentUser: {
        uid: "123",
      },
      togglePlayersInfoHidden: mockTogglePlayersInfoHidden,
    };

    wrapper = shallow(<PlayerInfo {...mockProps} />);
  });

  it('handle toggle players info to null', () => {
    wrapper.find('.info__close').simulate('click');
    
  })

});
