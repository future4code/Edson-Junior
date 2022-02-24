export class Follow {
    private follower: string;
    private followed: string;
    constructor(follower: string, followed: string) {
        this.follower = follower,
            this.followed = followed
    }
    getFollower() {
        return this.follower
    }
    getFollowed() {
        return this.followed
    }
}