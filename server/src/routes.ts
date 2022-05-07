import express from 'express';
import { prisma } from './prisma';
import { SubmitFeedbackUseCase } from './repositories/use-cases/submit-feedback-use-case';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {
    const { type, coment, screenshot } = req.body;

    const prismaFeedbackRepository = new PrismaFeedbacksRepository()
    const nodemailerMailAdapter = new NodemailerMailAdapter()
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbackRepository, nodemailerMailAdapter)

    await submitFeedbackUseCase.execute({
        type,
        coment,
        screenshot,
    })

    return res.status(201).send();
});