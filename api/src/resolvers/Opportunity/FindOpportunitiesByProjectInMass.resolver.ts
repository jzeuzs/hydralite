import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { Opportunity } from "~/resolver-types/models";
import ContextType from "~/types/Context.type";
import { FindOpportunitiesByProjectInMassArgs } from "./args/FindOpportunitiesByProjectInMassArgs";

@Resolver()
export class FindOpportunitiesByProjectInMassResolver {
  @Mutation(() => [Opportunity])
  async findOpportunitiesByProjectInMass(
    @Arg("args")
    { limit, skip, projectId }: FindOpportunitiesByProjectInMassArgs,
    @Ctx() { prisma }: ContextType
  ): Promise<Opportunity[] | null> {
    return await prisma.opportunity.findMany({
      skip,
      take: limit,
      where: { projectId },
    });
  }
}
