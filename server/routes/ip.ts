export default defineEventHandler((event) => {
  setResponseHeader(event, "Access-Control-Allow-Origin", "*");
  return event.req.headers["x-forwarded-for"] || event.req.socket.remoteAddress;
});
