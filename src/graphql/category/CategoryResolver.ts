import { Query, Resolver } from "type-graphql";
import Category from "./Category";
import CategoriesSchema from "../../models/CategoriesSchema";

@Resolver(Category)
class CategoryResolver {

    @Query(() => [Category])
    async categories() {
        const categories = await CategoriesSchema.find();

        return categories;
    }
}

export default CategoryResolver;