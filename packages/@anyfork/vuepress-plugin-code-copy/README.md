## @anyfork/vuepress-plugin-code-copy

## install

```sh
npm i @anyfork/vuepress-plugin-code-copy
# or
yarn add @anyfork/vuepress-plugin-code-copy
```
## usage
- config.js

```js
module.exports = {
  plugins: [
    [
    '@anyfork/vuepress-plugin-code-copy',
    {
      copyText: '复制代码',
      tip: {
        content: '复制成功!'
      }
    }
    ]
  ];
}
```

## api

#### selector

Selector, default to `div[class*="language-"] pre`

#### copyText

Copy the text displayed in the code block, the default is `copy code`

#### change

`change: (text:string, e:HTMLelement) => void`
When copying changes, the callback function, `text` 'is the code block copy text or failure prompt, `e` is the attribute of the component element itself. You can implement some advanced customization functions on this basis (`this` is the current component)

#### visibleTip

Display the default prompt after code copying. The default is `true`

#### tip

- time
  After copying successfully, the display time will be prompted by default, which is `3000` . If it is `infinity`, it is unlimited
- content
  The prompt content after copying successfully. The default is `copy success`
- title
  Title after copying successfully, default is `tips`