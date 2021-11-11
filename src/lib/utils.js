export function until(conditionFunction) {
  const poll = resolve => {
    if(conditionFunction()) resolve();
    else setTimeout(_ => poll(resolve), 400);
  }
  return new Promise(poll);
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
