// ==UserScript==
// @name        NPMJS to NPMX Redirector
// @namespace   https://github.com/chawyehsu/npmjs-to-npmxdev
// @supportURL  https://github.com/chawyehsu/npmjs-to-npmxdev/issues
// @version     1.1
// @author      Chawye Hsu, Gemini
// @description    Redirects www.npmjs.com and npm.im to npmx.dev automatically
// @description:ja www.npmjs.com と npm.im のアクセスを npmx.dev に自動的にリダイレクトします
// @description:ko www.npmjs.com 및 npm.im 방문을 npmx.dev로 자동으로 리다이렉트합니다
// @description:fr Redirige automatiquement www.npmjs.com et npm.im vers npmx.dev
// @description:de Leitet www.npmjs.com und npm.im automatisch nach npmx.dev weiter
// @description:es Redirige automáticamente www.npmjs.com y npm.im a npmx.dev
// @description:pt Redireciona automaticamente www.npmjs.com e npm.im para npmx.dev
// @description:ru Автоматически перенаправляет www.npmjs.com и npm.im на npmx.dev
// @description:zh-CN 自动将 www.npmjs.com 和 npm.im 的访问重定向至 npmx.dev
// @description:zh-TW 自動將 www.npmjs.com 和 npm.im 的訪問重定向至 npmx.dev
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABGUUKwAAAGwElEQVR4Ae1bW0scSRQ+3uPdFRUvQaJ58MYSg+AFjAoaAl5QHzTeyLL/YfMPhF3YpwXzAzaCN7xgXpKHVVB02QfN+mBcSUTihVUhKt7vuuermertaWcm7kzP2D1uwUxXV1d31/edU6fOqeoiuuPJzxH+6Ojob05PT7P8/f0fXF1dhTqqZ+RyPz+/o8vLy8/BwcF/7ezsbNtr6zUCYmNjo46Pj1u48ncMPIcfEs55f3s3m6DskjEcMIYP3NZf792717W1tbWrbrcNAWFhYcl8w898QwNXClJX9IH8GePqZ3w/HB4e/i3xBMgMJH92dvYLV4L0lXJ53QeOwPQtE5AUFRX129HR0QkwKUAZ+Pf8e8llZlV34PlqYoxZ5+fnqyzsKVQWYGHwOP+Cf4Eo9PEEjC+smC0EwNpzYY6PA1fDy7FitkjcOtRFqmsYPc9DG3G7lWZy36aTE9GtlTInmUhg5uu/C5XnmzHO24wITm6+1Us8rlNSUhK1t7dTYmIiAXhAQAC9ffuWXr16Jc5v0EA/K2bz9XkArqyspMbGRgGcjRodHBxQR0cHsXETZTcgQKnyrw4pRcbNAHxcXBw1NzcL9QdgaMT4+DiNjY3ZdImbojAVAQBbXl5Ojx8/pouLC4GRx3Pq6uqivb09gjb812QaAiB9dmCotbWV2KUVONH3379/TyMjIy5JHw8xDQGQ/pMnT6iwsFCoPRrPzoyQPvv3LknfNARA+hynUFtbG0VGRiqWf3Z2lt69e+ey9E1DAKSfn59PpaWlSt+HDejt7aW1tTWXpW8aAuD0oO/HxMQI6cMBWlhYoDdv3rgF3hQEQNK5ubn09OlTpe+j4f39/bS0tOSW+puCgMDAQHr+/DklJCQo0l9eXqbBwUG03+1k6FEA0s/MzKTq6mrFxcVYD9X/+PGj29IHe4YmAH29oaGB7t+/L9Qf4NfX14Xxk46QuypgWAJg+dPT06m+vl7BCEIw7GH4gxOkRzIsAQBXV1cnSAAZkD4cnu7ubuJYXg/s4hmGJACAU1JShPpD6kiQ+OjoKE1NTekmfTzXkATA86uqqqKsrCzh+ED6u7u7wu1F8KNnMhwBAB8fH09NTU2EIRAJWjA5OSl+UiP0IsFwBED94fTA+ZGWXoa80AJog57JUARA+jxbK9zekJAQgRN9f3p6WvR/vSy/mkBDEQCJl5SUiMAHmoAEi48JD3dCXjVgbd4wBED6ERERIuQNDw/XNeTVglafG4YASLygoEBogJQ+NKKvr094f3r3fUmCYQhAn8eEB2wAtAHW/tOnTzQ8PKy74ZPgcTQEAZA0rD4mPKX0QcLAwAAh8tN76DMcARjvW1paxPgvpQ/gIMDT6dY1ANLPzs4Wix0Aj4T+jpAXXcCT0se7bp0AAMQqT3JyshLyYp4P830gx9PJbQKk1GRDteey3N4R/f3hw4dUW1urXAYhWOfTM+RVHm4n49L3AAAJa42JCm2C+mKtDn1YGjRtHfU54v20tDRF+nB4enp6xJy/Jzw/9buRd4kA3AhnJTU19doQBQI2NzdpZWUF1RwmkAMCMeODe0AqAGOVR++Q12Ej+ILLBOChjtTdUbm6IahTU1NDGRkZivRlyMtfqeka86vfq827bQO0D7zJOcBjlhezveqQd2JiwiMhr7M23QoBsO7Pnj2jR48eKZZehryurvI6A+nsmtcJgPT5kzzh+GDFBwl9H/0eU17eMHxqQtyyATBe+KmTvTL1dUi/rKzsWsiLyc7t7W3zEABVxfqcNoEA/hLT7hAI6WN1F+t8oaGhQv0h8ZmZGTH2e9rr07YV5y5pAEDu7+8LV9XeQ1Gm1QyUYegrKiqi4uJihSBoBELejY0Nr0sfbXKJANyIZA+k5Yr9f3zZAenjSw8Ah8Tn5+d1WeW1/8avl3rNCAJwXl4eVVRUCP9BkueNkNcZDW5pgLMHa69hvIfjExQURPztvpD+6uqqV0JebVvU514jAOre2dlJQ0NDigbAkC4uLno85FUD1ua9RgC6wNzcnI37jG5wG5ZfTYLXCMBLbxusGrjMe80Iyhca7fg/AZAI90UsuVom5IwmIs+058qK2TInyB7aZ37PnmfeZcin7lkxWwjAvjpuJraW3ZX0wYrZQoB1U+FrRn9+BxgAxtdyI6ViBLGpkKO1Pl8nABiBVeJUPrXiGZkTVos/uEISG4hMrqBck5VNfjxjbL2M7SXPPX6RWGxA8ufne9hUyDsxMKUbxzdE8w3YQWo76yHvNv4RW2f3GcOf3NQfeQ7iJzV4NN8hMOyrw9Yy9t4e8EN8dvO08WXo4Rb+AxKO6AU4OBIhAAAAAElFTkSuQmCC
// @match       *://www.npmjs.com/*
// @match       *://npm.im/*
// @run-at      document-start
// @grant       none
// @license     MIT
// @downloadURL https://raw.githubusercontent.com/chawyehsu/npmjs-to-npmxdev/main/npmjs-to-npmxdev.user.js
// @updateURL   https://raw.githubusercontent.com/chawyehsu/npmjs-to-npmxdev/main/npmjs-to-npmxdev.user.js
// ==/UserScript==

(function() {
    'use strict';

    const currentUrl = new URL(window.location.href);
    const targetHost = 'npmx.dev';

    if (currentUrl.hostname !== targetHost) {
        currentUrl.hostname = targetHost;

        // Use location.replace to avoid cluttering the browser history
        // and preventing redirect loops when using the back button.
        window.location.replace(currentUrl.href);
    }
})();
