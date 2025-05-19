/* const buf1 = Buffer.alloc(10,1); // 创建一个长度为10的Buffer实例, 并用1填充
console.log(buf1); // <Buffer 01 01 01 01 ... 01>
console.log(buf1.toString('hex')); // 01010101, 16进制表示
const buf2 = Buffer.from([0x1, 0x2, 0x3])
console.log(buf2.toString('hex')); // 010203, 16进制表示
const buf3 = Buffer.from('你好！', 'utf8'); // 创建一个utf8编码的Buffer实例
console.log(buf3.toString('hex')); // e4bda0e5a5bd, 16进制表示
console.log(buf3.toString('utf8')); // 你好！, utf8编码 */

/* const buf4 = Buffer.alloc(256);
const len = buf4.write("HelloWorld!"); // 写入字符串
console.log(`写入 ${len} 个字节`); // 写入 11 个字节 */

/* const bufFir = Buffer.from("Hello","utf8");
const bufLast = Buffer.from("World","utf8");
const bufConcat = Buffer.concat([bufFir,bufLast]);
console.log(bufConcat.toString("utf8")); // HelloWorld */
