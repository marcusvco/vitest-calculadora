export function sum(a: any, b: any): number {
  const x = Number(a)
  const y = Number(b)
  return x + y
}

export function subtract(a: any, b: any): number {
  const x = Number(a)
  const y = Number(b)
  return x - y
}

export function multiply(a: any, b: any): number {
  const x = Number(a)
  const y = Number(b)
  return x * y
}

export function divide(a: any, b: any): number {
  const x = Number(a)
  const y = Number(b)
  if (y === 0) return NaN // Evita divisão por zero
  return x / y
}