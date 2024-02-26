import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as handlebars from 'handlebars';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class MailerService {
  private transporter: nodemailer.Transporter;
  private confirmationTemplate: handlebars.TemplateDelegate;
  constructor() {
    this.transporter = nodemailer.createTransport(
      {
        host: process.env.MAIL_HOST,
        port: Number(process.env.MAIL_PORT),
        secure: process.env.MAILER_SECURE === 'true',
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASSWORD,
        },
      },
      {
        from: {
          name: 'No-reply',
          address: process.env.MAIL_FROM,
        },
      },
    );

    // // Load Handlebars templates
    this.confirmationTemplate = this.loadTemplate('confirmation.hbs');
  }

  private loadTemplate(templateName: string): handlebars.TemplateDelegate {
    const templatesFolderPath = path.join(__dirname, './templates');

    const templatePath = path.resolve(templatesFolderPath, templateName);

    const templateSource = fs.readFileSync(templatePath, 'utf8');
    return handlebars.compile(templateSource);
  }
  async sendOrderConfirmation(orderData) {
    const html = this.confirmationTemplate({ name: 'Hashmi', orderData });
    try {
      await this.transporter.sendMail({
        to: 'Hashmi.hr@ramaera.in',
        subject: 'Order Confirmation Details',
        html: html,
      });
    } catch (err) {
      console.log(err);
    }
  }
}
