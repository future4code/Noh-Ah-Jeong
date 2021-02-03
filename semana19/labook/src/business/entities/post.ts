export type Post = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
}

export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}

export type createPostInputDTO = {
    photo: string,
    description: string,
    type: POST_TYPES
}