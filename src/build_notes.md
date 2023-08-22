
1. Put FAQ data in an array of objects called faq. Put faq in its own file called faq.js
2. import the svgs like this
```
import desktop from './images/illustration-woman-online-desktop.svg';

```
And use them in a `<picture></picture>` responsively like this:
```
<picture>
    <source media="(min-width: 768px)" srcset={desktop} />
    <img src={mobile} alt="" />
</picture>
```