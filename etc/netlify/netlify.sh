#!/bin/bash
set -xeuo pipefail
test "$CI" = true || exit 1
npx pnpm@7.5.0 install -r --store-dir=node_modules/.pnpm-store
npx pnpm@7.5.0 build
