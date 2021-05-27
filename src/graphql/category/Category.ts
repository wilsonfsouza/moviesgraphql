import { Field, ObjectType } from "type-graphql";

@ObjectType()
class Category {
    @Field()
    _id: String;

    @Field()
    description: String;

    @Field()
    name: String;
}

export default Category;