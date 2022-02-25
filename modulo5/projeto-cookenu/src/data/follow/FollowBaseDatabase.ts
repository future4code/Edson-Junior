import { Follow } from "../../entities/follow/follow";
import { BaseDatabase } from "../BaseDatabase";

export class FollowBaseDatabase extends BaseDatabase {
    private static tableName = "following"

    addFollow = (input: Follow) => BaseDatabase
        .connection(FollowBaseDatabase.tableName)
        .insert({
            follower: input.getFollower(),
            followed: input.getFollowed()
        })
    getFollowById = (id: string) => BaseDatabase
        .connection(FollowBaseDatabase.tableName)
        .where("follower", id)
    
    deleteFollow = (id: string) => BaseDatabase
        .connection(FollowBaseDatabase.tableName)
        .delete()
        .where("follower", id)
}