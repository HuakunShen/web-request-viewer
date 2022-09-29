export default defineEventHandler((event) => {
  setResponseHeader(event, "Access-Control-Allow-Origin", "*");
  return getHeader(event, "user-agent");
});
