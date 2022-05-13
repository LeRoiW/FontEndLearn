# JavaScript

[TOC]

---

## Part 1 基础部分

### 一、初识 JavaScript

&emsp;是一种运行在客户端的脚本语言(解释型语言，但是对于解释型和编译型二者对立存在争议)

> 脚本语言：不需要编译，运行过程中由 JS 解释器逐行进行解释并运行

#### 1.1 Browser & JavaScript

&emsp;浏览器分为两部分

1. 渲染引擎：用来解析 HTML 与 CSS，俗称内核
2. JS 引擎：也称为 JS 解释器。 用来读取网页中的 JavaScript 代码，对其处理后运行

> 浏览器本身并不会执行 JS 代码，而是通过内置 JavaScript 引擎(解释器) 来执行 JS 代码 。JS 引擎执行代码时逐行解释每一句源码（转换为机器语言），然后由计算机去执行，所以 JavaScript 语言归为脚本语言，会逐行解释执行。

#### 1.2 JavaScript 的组成

![JS 的组成](JavaScript_img/Part1/figure1-1.png)

1. ECMAScript
   - 由 ECMA 国际（ 原欧洲计算机制造商协会）进行标准化的一门编程语言，这种语言在万维网上应用广泛，它往往被称为 JavaScript 或 JScript，但实际上后两者是 ECMAScript 语言的实现和扩展。
   - ECMAScript 规定了 JS 的编程语法和基础核心知识，是所有浏览器厂商共同遵守的一套 JS 语法工业标准。
2. DOM
   - 文档对象模型（Document Object Model，简称 DOM）
   - 是 W3C 组织推荐的处理可扩展标记语言的标准编程接口。通过 DOM 提供的接口可以对页面上的各种元素进行操作（大小、位置、颜色等）。
3. BOM
   - 浏览器对象模型（Browser Object Model，简称 BOM）
   - 提供了独立于内容的、可以与浏览器窗口进行互动的对象结构。通过 BOM 可以操作浏览器窗口，比如弹出框、控制浏览器跳转、获取分辨率等。

#### 1.3 书写

1. 行内式  
   `<input type="button" value="点我试试" onclick="alert('Hello World')" />`
2. HTML 内嵌  
   `<script>alert('Hello World~!');</script>`
3. 外部 JS 文件  
   `<script src="my.js"></script>`

#### 1.4 输入输出语句

|        方法        |                      说明                      |  归属   |
| :----------------: | :--------------------------------------------: | :-----: |
|    `alert(msg)`    |                浏览器弹出警示框                | Browser |
| `console.log(msg)` |            浏览器控制台打印输出信息            | Browser |
|   `prompt(info)`   | 浏览器弹出输入框，用户可以输入，传入值为字符串 | Browser |

### 二、JavaScript 变量

1. 本质：是程序在内存中申请的一块用于存放数据的空间
2. 声明：`var i;`
3. 赋值：`i = 1;`
4. 初始化：

   ```javascript
   var myname = 'name';
   var age = 18;
   ```

5. 声明变量的特殊情况

   |             情况             |                说明                |   结果    |
   | :--------------------------: | :--------------------------------: | :-------: |
   | `var age; console.log(age);` |           只声明，不赋值           | undefined |
   |     `console.log(age);`      |       不声明不赋值，直接调用       |   报错    |
   |  `age=9; console.log(age);`  | 不声明直接赋值，会变成**全局变量** |     9     |

### 三、数据类型

&emsp;JavaScript 是一种弱类型或者说动态语言，相同变量可以用作不同类型（不用提前声明变量类型，运行过程中自动确定）

#### 3.1 分类

1. 简单数据类型：Number、String、Boolean、Undefined、Null
2. 复杂数据类型：Object

#### 3.2 简单数据类型

##### 3.2.1 Number

1. 范围
   - 最大值：`Number.MAX_VALUE` -> 1.7976931348623157e+308
   - 最小值：`Number.MIN_VALUE` -> 5e-324
2. 三个特殊值
   - Infinity -> 代表无穷大，大于任何数值
   - -Infinity -> 代表无穷小，小于任何数值
   - NaN -> Not a number，代表一个非数值
3. isNaN()
   - 用来判断一个变量是否为非数字的类型，返回 true 或者 false
     ![isNaN](JavaScript_img/Part1/figure3-1.png)

##### 3.2.2 String

1. 嵌套：可以用单引号嵌套双引号，或者用双引号嵌套单引号(外双内单，外单内双)
2. 转义符

   | 转义符 | 解释说明 |
   | :----: | :------: |
   |  `\n`  |   换行   |
   |  `\\`  |   斜杠   |
   |  `\'`  |  单引号  |
   |  `\"`  |  双引号  |
   |  `\t`  |   Tab    |
   |  `\b`  |   空格   |

3. 字符串长度：`str.length`
4. 字符串拼接

   ```javascript
   // 1.1 字符串 "相加"
   alert('hello' + ' ' + 'world'); // hello world
   // 1.2 数值字符串 "相加"
   alert('100' + '100'); // 100100
   // 1.3 数值字符串 + 数值
   alert('11' + 12); // 1112
   console.log('age:' + 18); // 只要有字符就会相连
   var age = 18;
   console.log('age:' + age); // age:18
   console.log('小明' + age + '岁啦'); // 小明18岁啦
   ```

#### 3.3 数据类型转换

1. 转换为字符串

   |        方式        |             说明             |        eg.        |
   | :----------------: | :--------------------------: | :---------------: |
   |    `toString()`    |         转换成字符串         | `num.toString();` |
   |     `String()`     |       强制转换成字符串       |  `String(num);`   |
   | **加号拼接字符串** | 和字符串拼接的结果都是字符串 |    -,隐式转换     |

2. 转换成数字

   |         方式         |                       说明                        |
   | :------------------: | :-----------------------------------------------: |
   |  `parseInt(string)`  |  提取以数值开头的 string 中的第一个 NaN 前的 Int  |
   | `parseFloat(string)` | 提取以数值开头的 string 中的第一个 NaN 前的 Float |
   |      `Number()`      |                 强制转换成数字串                  |
   |     JS 隐式转换      |             利用算数运算进行隐式转换              |

### 四、运算符

#### 4.1 算数运算符

&emsp;加(+)、减(-)、乘(\*)、除(/)、取余(取模,%)，浮点运算同样具有精度问题 => 不能直接比较浮点数是否相等

#### 4.2 自增运算符

&emsp; ++、--

#### 4.3 关系运算符

| 运算符  |             说明             |  案例   | 结果  |
| :-----: | :--------------------------: | :-----: | :---: |
|    <    |             小于             |   1<2   | true  |
|    >    |             大于             |   1>2   | false |
|   <=    |           小于等于           |  2<=2   | true  |
|   >=    |           大于等于           |  3<=2   | false |
|   ==    |       等于(**会转型**)       | 2==’2‘  | true  |
|   !=    |       不等(**会转型**)       | 2!='2'  | false |
| === !== | 全等，要求值和数据类型都相同 | 2===’2‘ | false |

#### 4.4 逻辑运算符

&emsp;And(\&\&),Or(||),Not(!)

#### 4.5 短路运算

&emsp;逻辑中断，当有多个表达式(值)时，左边的表达式可以确定结果就不再运算右边的表达式

1. AND：表达式 1 && 表达式 2
   - 表达式 1 为 true，返回表达式 2 的值
   - 表达式 1 为 false，返回 false
2. OR：表达式 1 || 表达式 2
   - 表达式 1 为 true，返回 true
   - 表达式 1 为 false,返回表达式 2 的值

#### 4.6 赋值运算符

&emsp;=、+=、-=、\*=、/=

#### 4.7 运算符优先级

| 优先级 |   运算符   |      顺序      |
| :----: | :--------: | :------------: |
|   1    |   小括号   |       ()       |
|   2    | 一元运算符 |    ++ -- !     |
|   3    | 算数运算符 | 先\* / % 后+ - |
|   4    | 关系运算符 |   > >= < <=    |
|   5    | 相等运算符 | == != === !==  |
|   6    | 逻辑运算符 |  先&& 后 \|\|  |
|   7    | 赋值运算符 |       =        |
|   8    | 逗号运算符 |       ,        |

### 五、流程控制

> 顺序结构、分支结构、循环结构

#### 5.1 分支

1. 分支语句(if)

   ```Javascript
   if (条件表达式) {
     // 执行语句1;
   }else if{
     // 执行语句2;
   }else{
     // 执行语句3;
   }
   ```

2. 三元表达式
   `条件表达式?表达式1:表达式2`
3. 多分支语句(switch)

   ```Javascript
    switch(表达式){
        case value1:
            执行语句1;
            break;
        case value2:
            执行语句2;
            break;
        default:
            执行语句;
    }
   ```

#### 5.2 循环

1. for 循环

   ```javascript
   for (初始化变量; 条件表达式; 操作表达式) {
     // 循环体
   }
   ```

2. 打印倒三角

   ```javascript
   // 打印倒三角
   var str = '';
   for (var i = 0; i < 10; i++) {
     for (var j = 0; j < 10; j++) {
       str = str + '★';
     }
     str += '\n';
   }
   console.log(str);
   ```

3. 九九乘法表

   ```javascript
   // 九九乘法表
   // 一共有9行，但是每行的个数不一样，因此需要用到双重 for 循环
   // 外层的 for 循环控制行数 i ，循环9次 ，可以打印 9 行
   // 内层的 for 循环控制每行公式  j
   // 核心算法：每一行 公式的个数正好和行数一致， j <= i;
   // 每行打印完毕，都需要重新换一行
   var str = '';
   for (var i = 1; i <= 9; i++) {
     // 外层循环控制行数
     for (var j = 1; j <= i; j++) {
       str += j + '×' + i + '=' + i * j + '\t';
     }
     str += '\n';
   }
   console.log(str);
   ```

4. while 循环

   ```javascript
   while (条件表达式) {
     // 循环体
   }
   ```

5. do while 循环

   ```javascript
   do {
     // 循环体
   } while (条件表达式);
   ```

6. continue
   用于立即跳出本次循环，继续下一次循环
7. break
   用于立即跳出整个循环

### 六、数组

1. 创建数组
   - 可以存放任意类型的数据
   - `var arrayName = new Array();`
   - 利用数组字面量创建：`var arrayName=[];`
2. 索引(下标)
3. 遍历
   - 获取长度：`数组名.length`
4. 新增元素
   1. length 属性是可读写的，可以通过修改 length 的值实现扩容；新增加的默认为 undefined
   2. 新增数组元素，修改索引号 -> `array[5]='blue';`
5. 筛选数组

   ```javascript
   var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
   var newArr = [];
   // 刚开始 newArr.length 就是 0
   for (var i = 0; i < arr.length; i++) {
     if (arr[i] >= 10) {
       // 新数组索引号应该从0开始 依次递增
       newArr[newArr.length] = arr[i];
     }
   }
   console.log(newArr);
   ```

6. 反转数组

   ```javascript
   // 将数组 ['red', 'green', 'blue', 'pink', 'purple'] 的内容反过来存放
   // 1、声明一个新数组 newArr
   // 2、把旧数组索引号第4个取过来（arr.length - 1)，给新数组索引号第0个元素 (newArr.length)
   // 3、我们采取 递减的方式  i--
   var arr = ['red', 'green', 'blue', 'pink', 'purple', 'hotpink'];
   var newArr = [];
   for (var i = arr.length - 1; i >= 0; i--) {
     newArr[newArr.length] = arr[i];
   }
   console.log(newArr);
   ```

7. 冒泡排序

   ```javascript
   // 冒泡排序
   // var arr = [5, 4, 3, 2, 1];
   var arr = [4, 1, 2, 3, 5];
   // 外层循环管趟数
   for (var i = 0; i < arr.length - 1; i++) {
     // 里面的循环管 每一趟的交换次数
     for (var j = 0; j < arr.length - i - 1; j++) {
       // 内部交换2个变量的值 前一个和后面一个数组元素相比较
       if (arr[j] > arr[j + 1]) {
         var temp = arr[j];
         arr[j] = arr[j + 1];
         arr[j + 1] = temp;
       }
     }
   }
   console.log(arr);
   ```

![冒泡排序](JavaScript_img/Part1/figure6-1.png)
![冒泡排序](JavaScript_img/Part1/figure6-2.gif)
