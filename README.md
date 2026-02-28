# NPMJS to NPMX Redirector

A tiny userscript that automatically redirects `www.npmjs.com` and `npm.im` to `npmx.dev`.

## Install

1. Install a userscript manager (e.g., Tampermonkey, Violentmonkey, or Greasemonkey).
2. Click [HERE](https://raw.githubusercontent.com/chawyehsu/npmjs-to-npmxdev/main/npmjs-to-npmxdev.user.js) to open the userscript in your manager.
3. Confirm installation in your userscript manager.

## Features

- Redirects package pages and any paths from npmjs.com or npm.im to npmx.dev.
- Runs at `document-start` and uses `location.replace` to keep history clean.

## How It Works

- On page load, the script swaps the hostname to `npmx.dev` and navigates with `location.replace`.

## License

**npmjs-to-npmxdev** © [Chawye Hsu](https://github.com/chawyehsu). Released under the [MIT](license) license.

> [Website](https://chawyehsu.com) · GitHub [@chawyehsu](https://github.com/chawyehsu) · Twitter [@chawyehsu](https://twitter.com/chawyehsu)
