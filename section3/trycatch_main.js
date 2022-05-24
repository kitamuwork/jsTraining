function doError() {
  throw new Error("error!");
}

try {
  doError();
} catch (error) {
  console.log("エラーハンドリング");
}
