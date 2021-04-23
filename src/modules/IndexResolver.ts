import { Resolver, Query } from "type-graphql";
@Resolver()
export class IndexResolver {
  @Query(() => String, { name: "hello" })
  hello(): string {
    return "Hello World";
  }
}