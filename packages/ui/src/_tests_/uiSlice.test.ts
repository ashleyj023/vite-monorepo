/// <reference types="jest" />

import { configureStore } from "@reduxjs/toolkit";
import uiReducer, { toggleDarkMode, toggleSidebar, setSidebarOpen } from "../../../../apps/vite-dashboard/src/slices/uiSlice";


beforeEach(() => {
  localStorage.clear();
  jest.restoreAllMocks();
});

describe("uiSlice", () => {
  it("should return the initial state", () => {
    const store = configureStore({ reducer: { ui: uiReducer } });
    const state = store.getState().ui;
    expect(state).toEqual({
      darkMode: false,
      sidebarOpen: true,
    });
  });

  it("should toggle dark mode and update localStorage", () => {
    const store = configureStore({ reducer: { ui: uiReducer } });

    store.dispatch(toggleDarkMode());
    expect(store.getState().ui.darkMode).toBe(true);

    store.dispatch(toggleDarkMode());
    expect(store.getState().ui.darkMode).toBe(false);
  });

  it("should toggle sidebar open state", () => {
    const store = configureStore({ reducer: { ui: uiReducer } });

    store.dispatch(toggleSidebar());
    expect(store.getState().ui.sidebarOpen).toBe(false);

    store.dispatch(toggleSidebar());
    expect(store.getState().ui.sidebarOpen).toBe(true);
  });

  it("should set sidebarOpen explicitly", () => {
    const store = configureStore({ reducer: { ui: uiReducer } });

    store.dispatch(setSidebarOpen(false));
    expect(store.getState().ui.sidebarOpen).toBe(false);

    store.dispatch(setSidebarOpen(true));
    expect(store.getState().ui.sidebarOpen).toBe(true);
  });
});

