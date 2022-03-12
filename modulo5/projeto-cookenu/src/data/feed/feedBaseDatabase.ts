import { BaseDatabase } from "../BaseDatabase";

export class FeedBaseDatabase extends BaseDatabase {
    private static tableName = "recipes"
    private static tableName1 = "User"

    getFeed = (id: string) => BaseDatabase
        .connection(FeedBaseDatabase.tableName)
        .select(
            `${FeedBaseDatabase.tableName}.id`,
            `${FeedBaseDatabase.tableName}.title`,
            `${FeedBaseDatabase.tableName}.description`,
            `${FeedBaseDatabase.tableName}.create_at as createAt`,
            `${FeedBaseDatabase.tableName}.user_id as userId`,
            `${FeedBaseDatabase.tableName1}.name as userName`,
        )
        .join(
            `${FeedBaseDatabase.tableName1}`,
            `${FeedBaseDatabase.tableName}.user_id`,
            ` ${FeedBaseDatabase.tableName1}.id`
    )
    .where(`${FeedBaseDatabase.tableName}.user_id`, id)
}