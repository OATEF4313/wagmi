import type { Config } from '@wagmi/core'

export type ConfigParameter<config extends Config = Config> = {
  config?: config | undefined
}
