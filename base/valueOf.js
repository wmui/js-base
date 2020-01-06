
// valueOf()用于null和undefined会报错，用于其他类型会返回自身
// number string boolean都有自身的valueOf()方法，并非继承自object

console.log('111'.valueOf());
console.log((111).valueOf());
console.log([].valueOf());
console.log(({}).valueOf());
console.log((function test() {}).valueOf());

var obj = {age: 1}
var obj2 = obj.valueOf()
obj2.age = 2
console.log(obj); // { age: 2}


// 对象参与运算时，先调用 valueOf()方法，如果结果为NaN，再调用 toString() 方法
var a = {
    valueOf: function () {
        return 1
    }
}

var b = a + 1
console.log(b); // 2
