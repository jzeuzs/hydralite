import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OauthConnectionCreateNestedManyWithoutUserInput } from "../inputs/OauthConnectionCreateNestedManyWithoutUserInput";
import { ProjectCreateNestedManyWithoutFollowersInput } from "../inputs/ProjectCreateNestedManyWithoutFollowersInput";
import { ProjectCreateNestedManyWithoutLikersInput } from "../inputs/ProjectCreateNestedManyWithoutLikersInput";
import { ProjectCreateNestedManyWithoutOwnerInput } from "../inputs/ProjectCreateNestedManyWithoutOwnerInput";
import { UserCreateNestedManyWithoutFollowersInput } from "../inputs/UserCreateNestedManyWithoutFollowersInput";
import { UserCreateNestedManyWithoutFollowingInput } from "../inputs/UserCreateNestedManyWithoutFollowingInput";
import { UserProfileCreateNestedOneWithoutUserInput } from "../inputs/UserProfileCreateNestedOneWithoutUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateWithoutAllProjectsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  joinDate?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  hydra!: number;

  @TypeGraphQL.Field(_type => UserProfileCreateNestedOneWithoutUserInput, {
    nullable: false
  })
  profile!: UserProfileCreateNestedOneWithoutUserInput;

  @TypeGraphQL.Field(_type => ProjectCreateNestedManyWithoutOwnerInput, {
    nullable: true
  })
  ownedProjects?: ProjectCreateNestedManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateNestedManyWithoutLikersInput, {
    nullable: true
  })
  likedProjects?: ProjectCreateNestedManyWithoutLikersInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateNestedManyWithoutFollowersInput, {
    nullable: true
  })
  followedProjects?: ProjectCreateNestedManyWithoutFollowersInput | undefined;

  @TypeGraphQL.Field(_type => OauthConnectionCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  oauthConnections?: OauthConnectionCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutFollowersInput, {
    nullable: true
  })
  following?: UserCreateNestedManyWithoutFollowersInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutFollowingInput, {
    nullable: true
  })
  followers?: UserCreateNestedManyWithoutFollowingInput | undefined;
}
