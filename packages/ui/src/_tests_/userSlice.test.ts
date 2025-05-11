// src/_tests_/userSlice.test.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer, { loginUser, logoutUser } from "../../../../apps/vite-dashboard/src/slices/userSlice";

// Mock localStorage
beforeEach(() => {
  localStorage.clear();
  jest.restoreAllMocks();
});

describe("userSlice", () => {
  it("should return the initial state", () => {
    const store = configureStore({ reducer: { user: userReducer } });
    const state = store.getState().user;
    expect(state).toEqual({
      name: null,
      email: null,
      isAuthenticated: false
    });
  });

  it("should login a user and update state", () => {
    const store = configureStore({ reducer: { user: userReducer } });

    store.dispatch(
      loginUser({
        name: "John Doe",
        email: "johndoe@example.com"
      })
    );

    const state = store.getState().user;
    expect(state.name).toBe("John Doe");
    expect(state.email).toBe("johndoe@example.com");
    expect(state.isAuthenticated).toBe(true);
  });

  it("should logout a user and reset state", () => {
    const store = configureStore({ reducer: { user: userReducer } });

    store.dispatch(
      loginUser({
        name: "John Doe",
        email: "johndoe@example.com"
      })
    );
    store.dispatch(logoutUser());

    const state = store.getState().user;
    expect(state.name).toBeNull();
    expect(state.email).toBeNull();
    expect(state.isAuthenticated).toBe(false);
  });
});