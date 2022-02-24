import { Follow } from "../../entities/follow/follow";
import { BaseDatabase } from "../BaseDatabase";

export class FollowBaseDatabase extends BaseDatabase {
    private static tableName = "following"

    addFollow = (input: Follow) => BaseDatabase
        .connection(FollowBaseDatabase.tableName)
        .insert({
            follower: input.getFollowed(),
            followed: input.getFollowed()
        })
}