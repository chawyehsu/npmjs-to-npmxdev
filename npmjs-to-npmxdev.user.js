// ==UserScript==
// @name        NPMJS to NPMX Redirector
// @namespace   https://github.com/chawyehsu/npmjs-to-npmxdev
// @version     1.0
// @description 自动将 www.npmjs.com 和 npm.im 的访问重定向至 npmx.dev
// @author      Gemini
// @match       *://www.npmjs.com/*
// @match       *://npm.im/*
// @run-at      document-start
// @grant       none
// @license     MIT
// ==/UserScript==

(function() {
    'use strict';

    // 获取当前 URL 对象
    const currentUrl = new URL(window.location.href);

    // 设置目标域名
    const targetHost = 'npmx.dev';

    // 如果当前域名不是目标域名，则执行替换
    if (currentUrl.hostname !== targetHost) {
        currentUrl.hostname = targetHost;

        // 使用 replace 避免在浏览器历史记录中产生多余的记录
        window.location.replace(currentUrl.href);
    }
})();
