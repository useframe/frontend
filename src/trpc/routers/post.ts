import { z } from "zod";
import { router, publicProcedure } from "@/server/trpc";

export const postRouter = router({
  /**
   * @example
   * ```ts
   * await trpc.post.getAll.query();
   * ```
   */
  getAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.post.findMany({
      orderBy: { createdAt: "desc" },
    });
  }),

  /**
   * @example
   * ```ts
   * await trpc.post.getById.query({ id: 1 });
   * ```
   */
  getById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.post.findUnique({
        where: { id: input.id },
      });
    }),

  /**
   * @example
   * ```ts
   * await trpc.post.create.mutate({ title: "New Post", content: "Content" });
   * ```
   */
  create: publicProcedure
    .input(
      z.object({
        title: z.string().min(1),
        content: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.post.create({
        data: input,
      });
    }),

  /**
   * @example
   * ```ts
   * await trpc.post.delete.mutate({ id: 1 });
   * ```
   */
  delete: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.post.delete({
        where: { id: input.id },
      });
    }),
});
