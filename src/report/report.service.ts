import { Injectable } from '@nestjs/common';
import { UserService } from '../service/user.service'; 
import { stringify } from 'csv-stringify';
import { Response } from 'express';

@Injectable()
export class ReportService {
  constructor(private readonly userService: UserService) {}

  async generateUserCsv(res: Response): Promise<void> {
    const users = await this.userService.findAll(); 

    const csvData = await new Promise<string>((resolve, reject) => {
      stringify(users.map(user => [user.id, user.username, user.email]), 
        { header: true, columns: ['ID', 'User', 'Email'] }, 
        (err, output) => {
          if (err) {
            reject(err);
          }
          resolve(output);
        },
      );
    });

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="users.csv"');
    res.send(csvData);
  }
}

import { Injectable } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { Response } from 'express';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfsFonts';

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs; 

@Injectable()
export class ReportService {
  constructor(private readonly userService: UserService) {}

  async generateUserPdf(res: Response): Promise<void> {
    const users = await this.userService.findAll();

    const documentDefinition = {
      content: [
        { text: 'Relatório de Usuários', style: 'header' },
        {
          table: {
            body: [
              [
                { text: 'ID', style: 'tableHeader' },
                { text: 'Username', style: 'tableHeader' },
                { text: 'Email', style: 'tableHeader' },
              ],
              ...users.map(user => [user.id, user.username, user.email]),
            ],
          },
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 20],
        },
        tableHeader: {
          bold: true,
          fontSize: 12,
          color: 'black',
        },
      },
    };

    const pdfDoc = pdfMake.createPdfKitDocument(documentDefinition);
    const chunks: Uint8Array[] = [];

    pdfDoc.on('data', (chunk) => {
      chunks.push(chunk);
    });

    pdfDoc.on('end', () => {
      const pdfData = Buffer.concat(chunks);
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="users.pdf"');
      res.send(pdfData);
    });

    pdfDoc.end();
  }
}