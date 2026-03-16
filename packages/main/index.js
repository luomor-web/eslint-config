import tsConfig from '@yiluxiangbei/eslint-config-ts'
import baseConfig from '@yiluxiangbei/eslint-config-base'
import stylisticConfig from '@yiluxiangbei/eslint-config-stylistic'
import jsonConfig from '@yiluxiangbei/eslint-config-json'

export const getConfig = () => {
  return [
    ...baseConfig,
    ...tsConfig,
    ...stylisticConfig,
    ...jsonConfig,
  ]
}
