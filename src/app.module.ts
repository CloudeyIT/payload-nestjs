import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { CmsModule } from './cms/cms.module'

@Module({
  imports: [ConfigModule.forRoot(), CmsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
