import { buildConfig } from 'payload/config'
import { Pages } from './collections/pages.collection'
import * as path from 'path'

export default buildConfig({
  collections: [
    Pages,
  ],
  routes: {
    admin: '/cms/admin',
    api: '/cms/api',
    graphQL: '/cms/graphql',
    graphQLPlayground: '/cms/playground',
  },
  typescript: {
    outputFile: path.resolve(__dirname, './cms/types/cms.types.ts'),
  },
})
