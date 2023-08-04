import { type QueryOptions } from '@tanstack/query-core'

import {
  type GetBalanceError,
  type GetBalanceParameters,
  type GetBalanceReturnType,
  getBalance,
} from '../actions/getBalance.js'
import type { Config } from '../config.js'
import type { Evaluate, PartialBy } from '../types/utils.js'
import type { ScopeKeyParameter } from './types.js'
import { filterQueryOptions } from './utils.js'

export type GetBalanceOptions<config extends Config> = Evaluate<
  PartialBy<GetBalanceParameters<config>, 'address'> & ScopeKeyParameter
>

export function getBalanceQueryOptions<config extends Config>(
  config: config,
  options: GetBalanceOptions<config> = {},
) {
  return {
    async queryFn({ queryKey }) {
      const {
        address,
        blockNumber,
        blockTag,
        scopeKey: _,
        ...parameters
      } = queryKey[1]
      if (!address) throw new Error('address is required')
      const balance = await getBalance(
        config,
        blockNumber
          ? { ...parameters, address, blockNumber }
          : { ...parameters, address, blockTag },
      )
      return balance ?? null
    },
    queryKey: getBalanceQueryKey(options),
  } as const satisfies QueryOptions<
    GetBalanceQueryFnData,
    GetBalanceError,
    GetBalanceData,
    GetBalanceQueryKey<config>
  >
}

export type GetBalanceQueryFnData = Evaluate<GetBalanceReturnType>

export type GetBalanceData = GetBalanceQueryFnData

export function getBalanceQueryKey<config extends Config>(
  options: GetBalanceOptions<config> = {},
) {
  return ['balance', filterQueryOptions(options)] as const
}

export type GetBalanceQueryKey<config extends Config> = ReturnType<
  typeof getBalanceQueryKey<config>
>
