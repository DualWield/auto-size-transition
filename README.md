# React &lt;AutoSizeTransition /&gt;

大小可以随着内容变化而缓慢变化

![](https://s1.ax1x.com/2020/04/10/GTaAeO.gif)

## Usage:

```
yarn add auto-size-transition
```

```javascript
import AutoSizeTransition from "auto-size-transition";

<AutoSizeTransition style={{background: 'red'}}>
  {visible ? (
    <div style={{ width: 300, display: "inline-block", padding: 20 }}>
      <p>如果天总也不亮，那就摸黑过生活；</p>
      <p>如果发出声音是危险的，那就保持沉默；</p>
      <p>如果自觉无力发光，那就别去照亮别人。</p>
      <p>但是——但是：</p>
      <p>不要习惯了黑暗就为黑暗辩护；</p>
      <p>不要为自己的苟且而得意洋洋；</p>
      <p>不要嘲讽那些比自己更勇敢、更有热量的人们。</p>
      <p>可以卑微如尘土，不可扭曲如蛆虫。</p>
    </div>
  ) : (
    <div style={{ width: 200, display: "inline-block", padding: 20 }}>
      <p>苟利国家生死以 岂因祸福避趋之</p>
    </div>
  )}
</AutoSizeTransition>;
```

## Demo
https://codesandbox.io/s/compassionate-kapitsa-6uxeo

## Motivation
因为从height:0 到 height: auto;  transition 是无效的，因为 transition 变化的起点跟终点必须是确定的。故希望有一个组件可以根据内部的大小动态伸缩，同时也有transition的效果。