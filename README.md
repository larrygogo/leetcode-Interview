# LeetCode 面试题
[前往原题](https://github.com/LeetCode-OpenSource/hire/blob/master/foundations_zh.md)

### 约定
针对题目中未声明的部分作出以下约定：

1. 答案中不需要判断浏览器环境，实际使用时直接给定使用环境，并调用不同的handle
2. 错误的stack只包含题目中给定的格式，没有其他额外的可能
3. Firefox 的错误stack是没有message的（而不是为空行），Chrome 第一行为message


### 阐述
1. 本答案只针对面试题提供，并不是对生产环境中的实际需求的解决方案
2. 其实Chrome和Firefox的关键区别是：是否需要直接针对 `@` 进行处理，如果实际环境中只有这两种浏览器，则不需要拆分`ChromeErrorHandle`和`FirefoxErrorHandle`，我这样处理是希望能够提高拓展性
3. 因为题目给了很多发挥的空间，所以我在这些地方就发挥了自己的想象力 =。=


