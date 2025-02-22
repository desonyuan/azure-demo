import { MidwayConfig } from '@midwayjs/core';

export default {
  console.log(process.env.PORT,'process.env.PORT');

  // use for cookie sign key, should change to your own and keep security
  keys: '1740231949393_8242',
  koa: {
    port: process.env.PORT || 7001,
  },
} as MidwayConfig;
