export const fetcher = (...args: unknown[]) =>
  fetch(...(args as [RequestInfo, RequestInit])).then((res) => res.json());
