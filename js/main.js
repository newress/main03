console.log('welcome');

//비동기 함수

async function test(){
  const promist = Promise.resolve(213);
  console.log(await promist);
}
test();