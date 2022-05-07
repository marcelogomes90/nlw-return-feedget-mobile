import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendEmailSpy = jest.fn();

const submiteFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendEmailSpy }
)

describe('submite feedback', () =>{
    it('should be able to submit a feedback', async () => {
        await expect(submiteFeedback.execute({
            type: 'BUG',
            coment: 'exemple',
            screenshot: 'data:image/png;base64.asiiasohdioashodihaisido',
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendEmailSpy).toHaveBeenCalled();
    });

    it('should not be able to submit feedback whitout a type', async () => {
        await expect(submiteFeedback.execute({
            type: '',
            coment: 'exemple',
            screenshot: 'data:image/png;base64.asiiasohdioashodihaisido',
        })).rejects.not.toThrow();
    });

    it('should not be able to submit feedback whitout a coment', async () => {
        await expect(submiteFeedback.execute({
            type: 'BUG',
            coment: '',
            screenshot: 'data:image/png;base64.asiiasohdioashodihaisido',
        })).rejects.not.toThrow();
    });

    it('should not be able to submit feedback whit an invalid screenshot', async () => {
        await expect(submiteFeedback.execute({
            type: 'BUG',
            coment: 'tá tudo bugado',
            screenshot: 'test.jpg',
        })).rejects.not.toThrow();
    });
});