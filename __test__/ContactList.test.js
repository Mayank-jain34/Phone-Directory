import React from 'react';
import renderer from 'react-test-renderer';
jest.autoMockOff();
import ContactList from '../src/js/ContactList.js';
jest.autoMockOn();
import Main from '../src/js/Main.js';
jest.mock('react-dom');
describe('Componet Testing',()=>{
  it("checking for Main",()=>{
    const component = renderer.create(
     <Main></Main>
  );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("checking for ContactList",()=>{
    const component = renderer.create(
      <ContactList></ContactList>
  );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
