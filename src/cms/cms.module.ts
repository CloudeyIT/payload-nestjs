import { Module, Scope } from '@nestjs/common'
import { CmsService } from './cms.service'
import { HttpAdapterHost } from '@nestjs/core'
import payload from 'payload'
import config from './payload.config'

@Module({
  providers: [
    CmsService,
    {
      provide: 'CMS',
      inject: [HttpAdapterHost],
      scope: Scope.DEFAULT, // Singleton
      useFactory: async (httpAdapterHost: HttpAdapterHost) => {
        return await payload.init({
          secret: 'fc2f5dec-403d-444c-94b3-daf626de148f',
          mongoURL: 'mongodb://root:payloady@localhost',
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