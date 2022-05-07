import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "6dd34506407ccd",
      pass: "11febd2aa54fd0"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <suport@feedget.com>',
            to: 'Marcelo Gomes <marcelo.sobrinho@outlook.com>',
            subject,
            html: body,
        });
    }
}