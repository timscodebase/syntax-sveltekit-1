import { f as fail } from "../../../chunks/index2.js";
const actions = {
  email: async ({ locals, request }) => {
    if (!locals?.user?.roles?.includes("admin"))
      return fail(401, { error_message: "un-authorized" });
    const data = await request.formData();
    data.get("name");
    data.get("email");
    data.get("message");
    return {
      message: "Email Sent!"
    };
  },
  test: () => {
    console.log("hit test action");
  }
};
export {
  actions
};
