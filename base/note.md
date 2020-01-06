
\x41表示"A"  ascll值 十六进制

\u03a3表示希腊字符Σ  unicode值 十六进制

‘\u03a3’.length // 1

数值、布尔值、对象和字符串值都有toString()，null和undefined没有，强制调用会报错。

String()可以把任何类型转为字符串。

(12).toString(8); // ’14’  数字可以传递一个基数作为参数。
