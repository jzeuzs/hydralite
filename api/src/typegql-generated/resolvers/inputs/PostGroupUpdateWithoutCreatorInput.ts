import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { PostUpdateManyWithoutPostGroupsInput } from "../inputs/PostUpdateManyWithoutPostGroupsInput";
import { ProjectUpdateOneWithoutPostGroupsInput } from "../inputs/ProjectUpdateOneWithoutPostGroupsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateManyWithoutMemberOfPostGroupsInput } from "../inputs/UserUpdateManyWithoutMemberOfPostGroupsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PostGroupUpdateWithoutCreatorInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isCommunity?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutMemberOfPostGroupsInput, {
    nullable: true
  })
  members?: UserUpdateManyWithoutMemberOfPostGroupsInput | undefined;

  @TypeGraphQL.Field(_type => PostUpdateManyWithoutPostGroupsInput, {
    nullable: true
  })
  posts?: PostUpdateManyWithoutPostGroupsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateOneWithoutPostGroupsInput, {
    nullable: true
  })
  project?: ProjectUpdateOneWithoutPostGroupsInput | undefined;
}