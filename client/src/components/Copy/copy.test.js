import React from 'react';
import { shallow } from 'enzyme';
import { Copy } from './copy.component';

describe('Copy component', () => {
  let wrapper;
  let mockToggleCopiedButton;
  beforeEach(() => {
    mockToggleCopiedButton = jest.fn();

    const mockProps = {
      toggleCopiedButton: mockToggleCopiedButton,
      crosshair: 'crosshairData',
    }

    wrapper = shallow(<Copy {...mockProps}/>)
  })

  it('should render Copy component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call toggleCopiedButton to true if component is clicked', () =>{
    wrapper.find('CopyToClipboard').simulate('click');
    expect(mockToggleCopiedButton).toBeTruthy();
  })
})

