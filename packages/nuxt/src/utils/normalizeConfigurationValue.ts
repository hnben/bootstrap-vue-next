import type { ConfigurationValue } from '../types/ModuleOptions'

export const normalizeConfigurationValue = <T extends ConfigurationValue<string>>(
  option: T,
): Exclude<T, boolean> => {
  return typeof option === 'boolean'
    ? ({ all: option } as Exclude<T, boolean>)
    : (option as Exclude<T, boolean>)
}
