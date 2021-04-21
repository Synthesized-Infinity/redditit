import { join } from 'path'

export * from './Reddit'
export const version = require(join(__dirname, '..', 'package.json')).version