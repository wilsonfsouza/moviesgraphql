import { Query, Resolver } from "type-graphql";
import Category from "./Category";

@Resolver(Category)
class CategoryResolver {

    @Query(() => [Category])
    async categories() {

    }
}

export default CategoryResolver;