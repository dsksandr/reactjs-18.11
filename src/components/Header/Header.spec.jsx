import React from 'react';
import { Header } from './Header';

import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

test('Header should be rendered', () => { // snapshot test
  const tree = renderer
    .create(<Header chats={[{name: 'Chat1'}, {name: 'Chat2'}]} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Header should be rendered as ul', () => { // shallow test
  const header = shallow(<Header chats={[{name: 'Chat1'}, {name: 'Chat2'}]} />);
  const lis = header.find('li');

  expect(lis.length).toBe(2);
  expect(lis.first().text()).toBe('Chat1');
  expect(lis.last().text()).toBe('Chat2');
});