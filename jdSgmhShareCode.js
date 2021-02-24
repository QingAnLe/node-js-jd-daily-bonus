let inviteCodes = [
  ''
]
// 判断github action里面是否有东东萌宠互助码
if (process.env.SGMHSHARECODES) {
  if (process.env.SGMHSHARECODES.indexOf('&') > -1) {
    console.log(`您的东东萌宠互助码选择的是用&隔开\n`)
    inviteCodes = process.env.SGMHSHARECODES.split('&');
  } else if (process.env.SGMHSHARECODES.indexOf('\n') > -1) {
    console.log(`您的东东萌宠互助码选择的是用换行隔开\n`)
    inviteCodes = process.env.SGMHSHARECODES.split('\n');
  } else {
    inviteCodes = process.env.SGMHSHARECODES.split();
  }
} else if (process.env.JD_COOKIE) {
  console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
for (let i = 0; i < inviteCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['inviteCodes' + index] = inviteCodes[i];
}
