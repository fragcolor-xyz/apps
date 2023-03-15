// Copyright 2017-2023 @polkadot/apps-routing authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { TFunction } from 'i18next';
import type { Route } from './types.js';

import Component from '@polkadot/app-assets';

export default function create (t: TFunction): Route {
  return {
    Component,
    display: {
      needsApi: [
        'tx.assets.setMetadata',
        'tx.assets.transferKeepAlive'
      ]
    },
    group: 'network',
    icon: 'shopping-basket',
    name: 'assets',
    text: t<string>('nav.assets', 'Assets', { ns: 'apps-routing' })
  };
}
