// src/_tests_/metricsSlice.test.ts
import { configureStore } from "@reduxjs/toolkit";
import metricsReducer, { updateMetrics, fetchMetrics } from "../../../../apps/vite-dashboard/src/slices/metricsSlice";

describe("metricsSlice", () => {
  it("should return the initial state", () => {
    const store = configureStore({ reducer: { metrics: metricsReducer } });
    const state = store.getState().metrics;
    expect(state).toMatchObject({
      users: 0,
      revenue: 0,
      engagement: 0,
      status: "idle",
      error: null,
    });
  });

  it("should update metrics correctly", () => {
    const store = configureStore({ reducer: { metrics: metricsReducer } });

    const payload = {
      users: 500,
      revenue: 10000,
      engagement: 85,
    };

    store.dispatch(updateMetrics(payload));
    const state = store.getState().metrics;

    expect(state.users).toBe(500);
    expect(state.revenue).toBe(10000);
    expect(state.engagement).toBe(85);
    expect(state.status).toBe("idle"); // Only async thunk updates status
  });

  it("should handle fetchMetrics async thunk", async () => {
    const store = configureStore({ reducer: { metrics: metricsReducer } });

    const promise = store.dispatch(fetchMetrics());
    const stateWhileLoading = store.getState().metrics;
    expect(stateWhileLoading.status).toBe("loading");

    await promise;
    const finalState = store.getState().metrics;

    expect(finalState.status).toBe("succeeded");
    expect(typeof finalState.users).toBe("number");
    expect(typeof finalState.revenue).toBe("number");
    expect(typeof finalState.engagement).toBe("number");
  });
});
