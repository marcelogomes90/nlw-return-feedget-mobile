import { prisma } from "../../prisma";
import { FeedbackCreatData, FeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
    async create({ type, coment, screenshot }: FeedbackCreatData) {
        await prisma.feedback.create({
            data: {
                type,
                coment,
                screenshot,
            }
        })
    }
}