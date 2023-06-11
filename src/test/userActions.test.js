import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchUsers, deleteUser } from '../redux/features/userSlice';
import { describe, expect, it } from 'vitest';

const mockStore = configureMockStore([thunk]);
const mockAxios = new MockAdapter(axios);

describe('userActions', () => {
  it('should fulfilled when users are fetched successfully', async () => {
    const store = mockStore({});
    const usersData = [{ id: 1, name: 'Leanne Graham' }, { id: 2, name: 'Ervin Howell' }];
    mockAxios.onGet('https://jsonplaceholder.typicode.com/users').reply(200, usersData);

    await store.dispatch(fetchUsers());
    const actions = store.getActions();
    
    expect(actions[1].type).toBe('users/fetchUsers/fulfilled');
    expect(actions[1].payload).toEqual(usersData);
  });

  it('should rejected when an error occurs during users fetch', async () => {
    const store = mockStore({});
    mockAxios.onGet('https://jsonplaceholder.typicode.com/users').reply(500, 'Internal Server Error');

    await store.dispatch(fetchUsers());
    const actions = store.getActions();
    
    expect(actions[1].type).toBe('users/fetchUsers/rejected');
    expect(actions[1].payload).toBe('Internal Server Error');
  });

  it('should dispatch deleteUser with the provided userId', () => {
    const store = mockStore({});
    const userId = 1;

    store.dispatch(deleteUser(userId));
    const actions = store.getActions();
    
    expect(actions[0].type).toBe('users/deleteUser');
    expect(actions[0].payload).toBe(userId);
  });
});
