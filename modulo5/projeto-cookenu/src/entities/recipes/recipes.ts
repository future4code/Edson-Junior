
export class Recipes {
    private id: string;
    private title: string;
    private description: string;
    private createAt: string;
    private userId: string;
    constructor(id: string, title: string, description: string, createAt: string, userId: string) {
        this.id = id,
            this.title = title,
            this.description = description,
            this.createAt = createAt,
            this.userId = userId
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
}