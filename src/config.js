const isProd = process.env.NODE_ENV === 'production'

export const appConf = {
  isProduction: isProd,
  api: {
    baseUrl: '/' // todo edit it
  }
}