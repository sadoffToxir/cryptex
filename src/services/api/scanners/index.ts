import axios from 'axios'

import { createApi } from '@/services/api/helper'

import bsc from './bsc';
import ether from './ether';
import polygon from './polygon';

export const bscApi = createApi(axios, bsc)
export const etherApi = createApi(axios, ether)
export const polygonApi = createApi(axios, polygon)
