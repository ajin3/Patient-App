import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.module';
import { UserUpdateDto } from './user.update.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  async createUser(@Body() userDto: User) {
    return this.appService.createUser(userDto)
  }

  @Get()
  readUser() {
    return this.appService.readUser()
  }

  @Get(':id')
  public async readUserById(
    @Param('id') id: number) {
    return this.appService.readUserById(id);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string, @Body() updateData: UserUpdateDto
  ): Promise<User> {
    return this.appService.updateUser(id, updateData)
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.appService.deleteUser(id)
  }


}
