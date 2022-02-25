export class Feed{
    private id: string;
    private title: string;
    private description: string;
    private createAt: string;
    private userId: string;
    private userName: string;
    constructor(id: string, title: string, description: string, createAt: string, userId: string, userName: string) {
        this.id = id,
        this.title = title,
        this.description = description,
        this.createAt = createAt,
        this.userId = userId,
        this.userName = userName
    }
    getId() {
        return this.id
    }
    getTitle() {
        return this.title
    }
    getDescription() {
        return this.description
    }
    getCreateAt() {
        return this.createAt
    }
    getUserId() {
        return this.userId
    }
    getuserName() {
        return this.userName
    }
}