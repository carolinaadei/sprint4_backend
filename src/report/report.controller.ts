import { Controller, Get, Res, UseGuards } from '@nestjs/common';
import { ReportService } from './report.service';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport'; 

@UseGuards(AuthGuard('jwt')) 
@Controller('reports')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get('users/csv')
  async generateUserCsv(@Res() res: Response): Promise<void> {
    await this.reportService.generateUserCsv(res);
  }

  @Get('users/pdf')
  async generateUserPdf(@Res() res: Response): Promise<void> {
    await this.reportService.generateUserPdf(res);
  }
}