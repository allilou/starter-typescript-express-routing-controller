import 'reflect-metadata';
import { Controller, Param, Body, Get, Post, Put, Delete, BodyParam, QueryParam, JsonController, UploadedFile } from 'routing-controllers';

@Controller()
export class UserController {
    @Get('/users')
    getAll() {
        return 'This action returns all users';
    }

    @Get('/users/:id')
    getOne(@Param('id') id: number) {
        return 'This action returns user #' + id;
    }

    @Post('/users/')
    post(@UploadedFile("file") file: any, @BodyParam('name') name: string, @Body() body: any) {
        console.log("name", name);
        console.log("file", file);

        return 'Saving user : ' + name;
    }

    @Put('/users/:id')
    put(@Param('id') id: number, @Body() user: any) {
        return 'Updating a user...';
    }

    @Delete('/users/:id')
    remove(@Param('id') id: number) {
        return 'Removing user...';
    }
}