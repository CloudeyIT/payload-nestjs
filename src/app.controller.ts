import { Controller, Get, Inject } from '@nestjs/common'
import { AppService } from './app.service'
import { Payload } from 'payload'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, @Inject('CMS') private readonly cms: Payload) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Get('test')
  async getTest(): Promise<string[]> {
    const pages = await this.cms.find<'pages'>({ collection: 'pages', where: {}})
    return pages.docs.map((page) => {
      return page.title
    })
  }
}
