const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const ms = Number(process.argv[2]);

console.log(`Sleeping for ${ms} ms...`);
await sleep(ms);
console.log(`Slept for ${ms} ms.`);
