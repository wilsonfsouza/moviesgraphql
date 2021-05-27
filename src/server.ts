import { buildSchema } from "type-graphql";
import "reflect-metadata";
import "./utils/connection";
import { ApolloServer } from "apollo-server";

async function bootstrap() {

    const schema = await buildSchema({
        resolvers: []
    });

    const server = new ApolloServer({ schema });

    server.listen({ port: 4100 }, () => console.log("Server running on port: 4100"));
}

bootstrap();