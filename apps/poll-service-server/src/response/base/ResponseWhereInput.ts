/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ChoiceWhereUniqueInput } from "../../choice/base/ChoiceWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { QuestionWhereUniqueInput } from "../../question/base/QuestionWhereUniqueInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class ResponseWhereInput {
  @ApiProperty({
    required: false,
    type: () => ChoiceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ChoiceWhereUniqueInput)
  @IsOptional()
  @Field(() => ChoiceWhereUniqueInput, {
    nullable: true,
  })
  choice?: ChoiceWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => QuestionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestionWhereUniqueInput)
  @IsOptional()
  @Field(() => QuestionWhereUniqueInput, {
    nullable: true,
  })
  question?: QuestionWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput;
}

export { ResponseWhereInput as ResponseWhereInput };
