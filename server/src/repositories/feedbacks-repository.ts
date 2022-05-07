export interface FeedbackCreatData {
    type: string;
    coment: string;
    screenshot?: string;
}

export interface FeedbacksRepository {
    create: (data: FeedbackCreatData) => Promise<void>;
}