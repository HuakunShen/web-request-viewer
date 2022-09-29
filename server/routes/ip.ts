export default defineEventHandler(
  (event) =>
    event.req.headers["x-forwarded-for"] || event.req.socket.remoteAddress
);
