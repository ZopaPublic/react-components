#!/bin/bash
set -xeuo pipefail
test "$CI" = true || exit 1
npx pnpm@6.32.10 install -r --store-dir=node_modules/.pnpm-store
npx pnpm@6.32.10 build
