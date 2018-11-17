#!/usr/bin/env bash

set -ex

INPUT_REPO="$1"; shift
INDEX_OUTPUT_DIR="$(mktemp -d)"

bazel run "@com_github_google_zoekt//cmd/zoekt-git-index" -- \
  -branches master \
  -prefix origin/ \
  -index "${INDEX_OUTPUT_DIR}" \
  "${INPUT_REPO}"

ibazel run "//zoekt/cmd:cmd.binary" -- \
  -index "${INDEX_OUTPUT_DIR}" \
  "$@"
