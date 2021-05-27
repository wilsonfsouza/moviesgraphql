import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import Category from "./Category";
import CategoriesSchema from "../../models/CategoriesSchema";

@InputType()
class CategoryInput {
    @Field()
    description: String;

    @Field()
    name: String;
}

@Resolver(Category)
class CategoryResolver {

    @Query(() => [Category])
    async categories() {
        const categories = await CategoriesSchema.find();

        return categories;
    }

    @Mutation(() => Category)
    async createCategory(@Arg("categoryInput") categoryInput: CategoryInput) {
        const category = await CategoriesSchema.create(categoryInput);
        return category;
    }
}

export default CategoryResolver;