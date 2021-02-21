function hoge(str: string): Promise<string> {
  return new Promise(
    resolve => {
      console.log(str)
      setTimeout(() => { resolve('resolved ' + str) }, 1000)
    }
  )
}

async function main() {
  console.log("***")
  hoge("await なしで呼び出し1")
  hoge("await なしで呼び出し1.1")
  hoge("await なしで呼び出し1.2")
  hoge("await なしで呼び出し1.3")
  console.log(await hoge("await 付きで呼び出しA"))
  await Promise.all(
    [
      (async () => console.log(await hoge("await 付きで呼び出しA1")))(),
      (async () => console.log(/*Math.abs*/(await hoge("await 付きで呼び出しA2"))))()
    ]
  )
  hoge("await なしで呼び出し2")
  console.log("***")
}

main();