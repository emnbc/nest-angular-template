import { Injectable } from '@nestjs/common';
import * as Excel from 'exceljs';
import { Response } from 'express';
import { UsersService } from '../rest/users/users.service';

@Injectable()
export class ExcelService {

  constructor(private usersService: UsersService) { }

  async xlsList(res: Response) {

    const users = await this.usersService.findAll({take: 1000, skip: 0, where: {}, order: {id: 'ASC'}});
      
    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet("Users");

    worksheet.columns = [
      {header: 'ID', key: 'id', width: 8},
      {header: 'First Name', key: 'firstName', width: 24},
      {header: 'Last Name', key: 'lastName', width: 24},
      {header: 'Username', key: 'username', width: 24},
      {header: 'Birth Date', key: 'birthDate', width: 32},
      {header: 'Email', key: 'email', width: 32},
      {header: 'Active', key: 'isActive', width: 16},
    ] as any[];

    worksheet.addRows(users.result); // to do map birth date as Object

    res.setHeader("Content-Disposition", "attachment; filename=test.xlsx");
    await workbook.xlsx.write(res);

    res.end();
  }

}