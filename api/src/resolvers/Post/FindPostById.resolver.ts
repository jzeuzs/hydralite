import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { isAuthenticated } from "~/middleware/isAuthenticated.middleware";
import { Post, User } from "~/resolver-types/models";
import { FindPostByIdArgs } from "./args/FindPostByIdArgs";
import ContextType from "~/types/Context.type";
import executeOrFail from "~/util/executeOrFail";
import { PostRepo } from "~/db/PostRepo";
import { ProjectMemberRepo } from "~/db/ProjectMemberRepo";

const postRepo = new PostRepo();
const memberRepo = new ProjectMemberRepo();

@Resolver()
export class FindPostByIdResolver {
  @Mutation(() => Post)
  @UseMiddleware(isAuthenticated)
  async findPostById(
    @Arg("args") { postId, projectId }: FindPostByIdArgs,
    @Ctx() { req, prisma }: ContextType
  ): Promise<Post | null> {
    // retrieve the currently logged in user
    const user: User = req.user as User;

    return executeOrFail(async () => {
      const post = await postRepo.findPostById(postId);

      // // the post isnt public
      // if (post!.isPublic === false) {
      //   // fetch the logged in member
      //   const member = await memberRepo.findMemberByUserAndProjectId(
      //     user.id,
      //     projectId
      //   );

      //   // make sure the user is authorized to see the post
      //   let continueScript = false;
      //   member!.roles!.forEach((role) => {
      //     if (post!.visibleTo!.find((postRole) => role.id === postRole.id))
      //       continueScript = true;
      //   });
      // }

      return post;
    });
  }
}
