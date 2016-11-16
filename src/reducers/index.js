import { combineReducers } from 'redux';
import page from './page';
import user from './user';

export default combineReducers({
  page,
  user
});



/*
const inititalState = {
  user: 'Unknown user',
  name: 'Vyacheslav',
  surname: 'Zinkevichius',
  age: 32
};

export default function userstate(state = inititalState) {
  return state;
}*/
