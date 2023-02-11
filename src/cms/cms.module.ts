import { Module, Scope } from '@nestjs/common'
import { CmsService } from './cms.service'
import { HttpAdapterHost } from '@nestjs/core'
import payload from 'payload'
import { ConfigService } from '@nestjs/config'
import config from './payload.config'

@Module({
  providers: [
    CmsService,
    {
      provide: 'CMS',
      inject: [HttpAdapterHost, ConfigService],
      scope: Scope.DEFAULT, // Singleton
      useFactory: async (httpAdapterHost: HttpAdapterHost, configService: ConfigService) => {
        return await payload.init({
          secret: configService.getOrThrow('cms.secret'),
          mongoURL: configService.getOrThrow('cms.mongoUrl'),
          express: httpAdapterHost.httpAdapter.getInstance(),
          config,
        })
      },
    },
  ],
  exports: [CmsService, 'CMS'],
})
export class CmsModule {
}