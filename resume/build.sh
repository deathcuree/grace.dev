#!/bin/sh
# Rebuilds src/assets/Andaya_AI_Engineer.pdf from resume/Andaya_AI_Engineer.html.
# Uses the headless Chromium that Playwright installs (npx playwright install chromium),
# or any Chromium binary given in BROWSER_BIN.
set -e
cd "$(dirname "$0")/.."
OUT="${1:-src/assets/Andaya_AI_Engineer.pdf}"
BROWSER="${BROWSER_BIN:-$(ls -d "$HOME"/Library/Caches/ms-playwright/chromium_headless_shell-*/chrome-headless-shell-*/chrome-headless-shell 2>/dev/null | sort | tail -n 1)}"
if [ -z "$BROWSER" ]; then
	echo "No headless Chromium found. Run: npx playwright install chromium" >&2
	exit 1
fi
PROFILE="$(mktemp -d)"
"$BROWSER" --no-pdf-header-footer --user-data-dir="$PROFILE" --print-to-pdf="$PWD/$OUT" "file://$PWD/resume/Andaya_AI_Engineer.html" 2>/dev/null
rm -rf "$PROFILE"
echo "Wrote $OUT"
