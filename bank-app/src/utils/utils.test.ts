import { formatCurrency } from '.';

describe('formatCurrency', () => {
  it('formats THB correctly', () => {
    expect(formatCurrency(300, 'THB')).toBe('฿300.00');
  });

  it('formats USD correctly', () => {
    expect(formatCurrency(300, 'USD')).toBe('$300.00');
  });

  it('formats JPY correctly', () => {
    expect(formatCurrency(300, 'JPY')).toBe('¥300');
  });

  it('formats EUR correctly', () => {
    expect(formatCurrency(300, 'EUR')).toBe('€300.00');
  });

  it('formats GBP correctly', () => {
    expect(formatCurrency(300, 'GBP')).toBe('£300.00');
  });

  it('formats CNY correctly', () => {
    expect(formatCurrency(300, 'CNY')).toBe('¥300.00');
  });

  it('formats KRW correctly', () => {
    expect(formatCurrency(300, 'KRW')).toBe('₩300');
  });

  it('handles unknown currency gracefully', () => {
    expect(() => formatCurrency(300, 'INVALID')).toThrow(RangeError);
  });
});
