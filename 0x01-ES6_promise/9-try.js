export default function guardrail(mathFunction) {
  let queue = [];
  try {
    const result = mathFunction();
    queue = [result, 'Guardrail was processed'];
  } catch (e) {
    queue = [String(e), 'Guardrail was processed'];
  }
  return queue;
}
