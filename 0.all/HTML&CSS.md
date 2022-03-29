# HTML&CSS

[TOC]

## HTML 基础

### 一、常用标签

#### 1.1 标题标签`<h1>~<h6>`

#### 1.2 段落标签`<p>`

#### 1.3 换行标签`<br />`

#### 4、文本格式化标签

1. 加粗：`<strong>`/`<b>`
2. 倾斜：`<em>`/`<i>`
3. 删除线：`<del>`/`<s>`
4. 下划线：`<ins>`/`<u>`

PS:`<b>/<i>/<s>/<u>`主要代表样式；`<strong>/<em>`主要表示对内容的强调，`<del> /<ins>`主要表示文档被编辑

#### 5、区块标签

1. `<div>`块级元素
2. `<span>`行内元素

#### 6、图像标签

1. `<img src="图像URL"/>`  
   | 属性名称 | 值 | 备注 |
   | :-----: | :-----: | :---: |
   | src | 图片路径 | 必须属性 |
   | alt | 文本 | 替换文本，img 不能显示时的文字 |
   | title | 文本 | 提示文本，鼠标放上去的时候显示的文字 |
   | width | px | img 的高 |
   | height | px | img 的高 |
   | border | px | img 的边框粗细 |

2. 路径
   - 相对路径
   - 绝对路径

#### 7、超链接标签

`<a href="跳转目标" target="目标窗口弹出方式">文本&图像</a>`

1. href 是必须属性，目标的 URL 地址；target 设为\_blank 代表新窗口打开
2. 空链接：`<a href="#" >页面名称</a>`
3. 锚点链接
   1. 链接文本的 href 属性设为名字：`<a href="#two">二</a>`
   2. 目标位置标签加一个 Id 属性=名字：`<h3 id="two">第二页</h3>`

#### 8、表格标签

```html
<table>
  <tr>
    <th>表头单元格</th>
    <td>单元格内的文字1</td>
    <td>单元格内的文字2</td>
  </tr>
</table>
```

1. 表头单元格`<th>`
   - 文本内容会加粗居中显示
2. 属性
   - 多用 CSS 进行设置
3. 合并单元格
   - 跨行合并：rowspan="合并单元格的个数"
   - 跨列合并：colspan="合并单元格的个数"
   - 目标单元格
     - 跨行：最上侧的单元格
     - 跨列：最左侧的单元格
4. 合并后要将被合并的单元格删除

#### 9、列表标签

##### (1) 无序列表

```html
<ul>
  <li>列表事项1</li>
  <li>列表事项2</li>
  ...
</ul>
```

ps:

1. 各列表项之间没有顺序级别之分，是并列的
2. `<ul>`中只能放`<li>`
3. `<li>`中可以放任何元素

##### (2) 有序列表

```html
<ol>
  <li>list1</li>
  <li>list2</li>
  ...
</ol>
```

##### (3) 自定义列表

```html
<dl>
  <dt>名词1</dt>
  <dd>名词解释1</dd>
  <dd>名词解释2</dd>
  ...
</dl>
```

#### 10、表单标签

目的：**收集用户信息**

##### (1) 表单域

```html
<form action="url地址" method="提交方式" name="表单域名称">各种表单元素控件</form>
```

##### (2)表单元素

###### a. input 输入表单元素`input`

`<input type="属性值">`
| 属性值 | 备注 | 属性值 | 备注 |
| :----: | :-------: | :----: | :-------: |
| button | 可点击按钮 | checkbox | 复选框 |
| file | 输入字段和提交按钮，供文件上传 | hidden | 隐藏的输入字段 |
| image | 图像形式的提交按钮 | password | 密码字段，其中的字符被掩码 |
| radio | 单选按钮 | reset | 重置，清除表单中的所有数据 |
| submit | 提交 | text | 单行输入字段，默认宽度 20 字符 |

###### b. input 的其他属性

| 属性值  |                     备注                     |  属性值   |              备注              |
| :-----: | :------------------------------------------: | :-------: | :----------------------------: |
|  name   |            定义 input 元素的名称             |   value   |      规定 input 元素的值       |
| checked | 设为 checked->规定此元素首次加载时应当被选中 | maxlength | 规定输入字段中的字符的最大长度 |

1. name 和 value 都要有，主要给后台使用
2. 设置单、复选框的 name 时，需要给选项相同的 name

###### c. input 元素定义标注`<label>`

用于绑定一个表单元素，当点击`<label>`标签内的文本时，浏览器自动将焦点转移到相应的表单元素上

```html
<input type="radio" name="sex" id="men" />
<label for="men">男</label>
<input type="radio" name="sex" id="women" />
<label for="women">女</label>
```

###### d. 多个选项时定义下拉列表`<select>`

```html
<select>
  <option>选项1</option>
  <option>选项2</option>
  ...
</select>
```

select 中至少包含一对`<option>`  
在`<option>`中定义`select="select"`时代表当前项时默认项

---

## CSS 基础

### 一、CSS 规范等

### 二、基础选择器

#### 1、标签选择器

#### 2、类选择器

```css
.red {
  color: red;
  属性2: 属性值2;
  ...;
}
```

```html
<div class="red">红色</div>
```

##### (1) 使用"."进行标识；命名规范->《Web 前端开发规范手册》

##### (2) 多类名

1. 多个类名之间用空格分开
2. 可以将一些相同的样式放在一个类之中
3. 标签可以调用公共的类，然后再调用自己独有的类

#### 3、ID 选择器

```css
/* 为特定ID的元素设置样式，HTML中以ID属性设置选择器 */
#id名 {
  属性1: 属性值1;
  ...;
}
/* id属性只能在每个HTML文档中出现一次 */
```

#### 4、通配符选择器

选取页面中的所有元素，不需要调用，会自动使用

```css
* {
  margin: 0;
  padding: 0;
}
```

### 三、字体属性

#### 1、字体

```css
body{
    font-family:'Microsoft YaHei',tahoma,arial,'Hiragino Sans GB;
}
```

#### 2、字体大小

```css
body {
  /* Chrome默认16px */
  font-size: 16px;
}
```

#### 3、字体粗细

normal：400；bold：700；  
范围：100~900；没有单位！！！

```css
h2 {
  font-weight: 400;
}
```

#### 4、文字样式

默认：`font-style:normal;`斜体：`font-style:italic;`

#### 5、字体符合属性

```css
div {
  font: font-style font-weight font-size line-height font-family;
}
```

1. 不能换顺序
2. font-size&&font-family 不能省略

### 四、文本属性

#### 1、文本颜色

```css
div {
  color: #ffffff;
  background-color: blue;
  /* color: rgba(0,0,0,.4) */
}
```

#### 2、对齐文本

`text-align`;默认 left 左对齐

#### 3、装饰文本

`text-decoration`;默认 none  
可以添加下划线(underline);删除线(line-through);上划线(overline)

#### 4、文本缩进

`text-indent`用来指定文本第一行的缩进，通常是段落首行缩进  
`p{text-indent:20px;} -> p{text-indent:2em;}`

#### 5、行间距

`line-height`

### 五、CSS 的引入

1. 内部样式表
2. 行内样式表
3. 外部样式表
   - `<link rel="stylesheet" href="css_Path" />`

### 六、复合选择器

#### 1、后代选择器

可以选择父元素里面的子元素  
`父元素 子元素{样式声明};`

#### 2、子选择器

只能选择某元素的最近一级子元素  
`元素1>元素2{样式声明};`

#### 3、并集选择器

可以选择多组标签，同时为他们定义相同的样式  
`元素1,元素2{样式声明};`

#### 4、伪类选择器

##### (1) 链接伪类选择器

1. `a:link` 选择所有未被访问的链接
2. `a:visited` 选择所有已被访问的链接
3. `a:hover` 选择鼠标指针位于其上的链接
4. `a:active` 选择活动的链接

##### (2) :focus 伪类选择器

用于选取获得焦点的表单元素

```css
input:focus {
  color: red;
  background-color: skyblue;
}
```

### 七、元素显示模式

#### 1、块元素

1. 独占一行
2. 高、宽、内外边距都可以控制
3. 宽度默认是父级的 100%
4. 容器，内部可以是块或行内元素
5. 文字类元素内不能使用块级元素

#### 2、行内元素

1. 相邻行内元素在一行上，一行可以显示多个
2. 高、宽直接设置无效
3. 默认宽度就是本身内容宽度
4. 只能容纳文本或其他行内元素
5. 链接里边不能再放链接

#### 3、行内块元素

`<img/>`、`<input/>`、`<td>`同时具有块元素和行内元素的特点

1. 和相邻行内元素(行内块)在同一行，但是之间会有缝隙，一行可以显示多个
2. 默认宽度==内容宽度
3. 高度、行高及内外边距都可以控制

#### 4、元素模式的转换

```css
display: block;
display: inline;
display: inline-block;
```

### 八、CSS 的背景

#### 1、背景颜色

`background-color:颜色值;`  
通常定义在最后一组  
可以设置为`transparent | color`，其中透明为默认值

#### 2、背景图片

`background-image:none|url;`  
元素的背景图像，位于`background-color`的上层  
实际开发中常用于 logo、装饰小图片和超大的背景图片，便于控制位置(精灵图)

#### 3、背景平铺

`background-repeat:repeat|no-repeat|repeat-x|repeat-y;`

#### 4、背景图片位置

`background-position:x y;`  
其中 x、y 可以为方位名词(position)也可为精确数值(length)

1. 参数是 position
   - `position:top|center|bottom|left|center|right;`
   - 两个都是 position，前后顺序无关
   - 只指定一个方位名词，另一个省略，则另一个默认居中对齐
2. 参数是 length
   - `lenght:百分数|长度值(浮点+px);`
   - 第一个为 x，第二个为 y
   - 只指定一个数值，另一个省略，则数值代表 x，y 默认居中
3. 参数是混合单位
   - 第一个是 x，第二个是 y

#### 5、背景图像固定(背景附着)

`background-attachment:scroll|fixed;`  
背景图像是否固定或随着页面的剩余部分滚动，可以用于制作**视差滚动**的效果

#### 6、背景符合写法

`background:transparent url() reprat scroll x y;`

#### 7、背景色半透明

`background:rgba(0,0,0,.3);`or`background:rgba(0,0,0,0.3);`
