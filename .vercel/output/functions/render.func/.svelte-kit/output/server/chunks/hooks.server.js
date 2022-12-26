function sequence(...handlers) {
  const length = handlers.length;
  if (!length)
    return ({ event, resolve }) => resolve(event);
  return ({ event, resolve }) => {
    return apply_handle(0, event, {});
    function apply_handle(i, event2, parent_options) {
      const handle2 = handlers[i];
      return handle2({
        event: event2,
        resolve: (event3, options) => {
          const transformPageChunk = async ({ html, done }) => {
            if (options?.transformPageChunk) {
              html = await options.transformPageChunk({ html, done }) ?? "";
            }
            if (parent_options?.transformPageChunk) {
              html = await parent_options.transformPageChunk({ html, done }) ?? "";
            }
            return html;
          };
          return i < length - 1 ? apply_handle(i + 1, event3, { transformPageChunk }) : resolve(event3, { transformPageChunk });
        }
      });
    }
  };
}
function auth() {
  return {
    id: "asdfasdfa",
    name: "Scott",
    email: "scott@leveluptuts.com",
    roles: ["admin"]
  };
}
async function logger({ event, resolve }) {
  const start_time = Date.now();
  const response = await resolve(event);
  console.log(`${Date.now() - start_time}ms  ${event.request.method} ${event.url.pathname}`);
  return response;
}
function authorize({ event, resolve }) {
  const user = auth();
  event.locals.user = user;
  return resolve(event);
}
const handle = sequence(logger, authorize);
export {
  handle
};
