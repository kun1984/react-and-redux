import React from 'react';
import {mount} from 'enzyme';

import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());

const {expect} = chai;

import ModifyPropsHOC from '../../src/inheritance/ModifyPropsHOC.js';

describe('ModifyPropsHOC', () => {

  it('should render with modified props as red', () => {
    class DivComponent extends React.Component {
      render () {
        return <div>hello world</div>;
      }
    }
    const NewComponent = ModifyPropsHOC(DivComponent);
    const wrapper = mount(<NewComponent />);

    expect(wrapper.find('div')).to.have.style('color').equal('red');
  });

  it('should render with modified props as green', () => {
    class SpanComponent extends React.Component {
      render () {
        return <span>hello world</span>;
      }
    }
    const NewComponent = ModifyPropsHOC(SpanComponent);
    const wrapper = mount(<NewComponent />);

    expect(wrapper.find('span')).to.have.style('color').equal('green');
  });


});


