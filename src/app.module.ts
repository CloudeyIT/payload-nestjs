import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { CmsModule } from './cms/cms.module'
import configuration from './configuration'

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [configuration],
  }), CmsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
