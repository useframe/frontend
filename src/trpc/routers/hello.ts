import { publicProcedure, router } from "@/server/trpc";
import { z } from "zod";

export const helloRouter = router({
  hello: publicProcedure.input(z.object({ name: z.string() })).query((opts) => {
    return {
      greeting: `hello ${opts.input.name}`,
    };
  }),
});
