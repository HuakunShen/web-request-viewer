export default defineEventHandler((event) => {
  console.log(Date.now());
  return Date.now();
});
