export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    ({ task, task2 } = {
      task: false,
      task2: true,
    });
  }

  return [task, task2];
}
