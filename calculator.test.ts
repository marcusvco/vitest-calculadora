import { describe, it, expect } from 'vitest'
import { sum, subtract, multiply, divide } from './main'

describe('Calculadora - Função sum', () => {
  it('soma inteiros positivos', () => {
    expect(sum(2, 3)).toBe(5)
  })

  it('soma decimais', () => {
    expect(sum(2.5, 3.1)).toBeCloseTo(5.6)
  })

  it('soma strings convertíveis para número', () => {
    expect(sum('5', 5)).toBe(10)
    expect(sum('2.5', '2.5')).toBeCloseTo(5)
  })

  it('soma valores inválidos', () => {
    expect(sum(undefined, 1)).toBeNaN()
    expect(sum(null, 1)).toBeNaN()
    expect(sum({}, 1)).toBeNaN()
  })
})

describe('Calculadora - Função subtract', () => {
  it('subtrai inteiros positivos', () => {
    expect(subtract(5, 3)).toBe(2)
  })

  it('subtrai decimais', () => {
    expect(subtract(5.5, 2.1)).toBeCloseTo(3.4)
  })

  it('subtrai strings convertíveis para número', () => {
    expect(subtract('10', '2')).toBe(8)
  })

  it('subtrai valores inválidos', () => {
    expect(subtract(undefined, 1)).toBeNaN()
    expect(subtract(null, 1)).toBeNaN()
    expect(subtract({}, 1)).toBeNaN()
  })
})

describe('Calculadora - Função multiply', () => {
  it('multiplica inteiros positivos', () => {
    expect(multiply(2, 3)).toBe(6)
  })

  it('multiplica decimais', () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10)
  })

  it('multiplica por zero', () => {
    expect(multiply(5, 0)).toBe(0)
  })

  it('multiplica strings convertíveis para número', () => {
    expect(multiply('3', '3')).toBe(9)
  })

  it('multiplica valores inválidos', () => {
    expect(multiply(undefined, 1)).toBeNaN()
    expect(multiply(null, 1)).toBeNaN()
    expect(multiply({}, 1)).toBeNaN()
  })
})

describe('Calculadora - Função divide', () => {
  it('divide inteiros positivos', () => {
    expect(divide(6, 3)).toBe(2)
  })

  it('divide decimais', () => {
    expect(divide(7.5, 2.5)).toBeCloseTo(3)
  })

  it('divide por zero', () => {
    expect(divide(5, 0)).toBeNaN()
  })

  it('divide strings convertíveis para número', () => {
    expect(divide('10', '2')).toBe(5)
  })

  it('divide valores inválidos', () => {
    expect(divide(undefined, 1)).toBeNaN()
    expect(divide(null, 1)).toBeNaN()
    expect(divide({}, 1)).toBeNaN()
  })
})