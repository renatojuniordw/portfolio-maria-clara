export function normalizeBRPhone(input: string): string {
  const onlyDigits = (input || "").replace(/\D+/g, "");
  if (onlyDigits.startsWith("55")) {
    const rest = onlyDigits.slice(2);
    if (rest.length === 10 || rest.length === 11) return rest;
  }
  const noLeadingZeros = onlyDigits.replace(/^0+/, "");
  if (noLeadingZeros.length === 10 || noLeadingZeros.length === 11)
    return noLeadingZeros;
  return onlyDigits;
}

export function formatBRPhone(digits: string): string {
  const d = digits.replace(/\D+/g, "");
  if (d.length === 10)
    return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  if (d.length === 11)
    return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
  return digits;
}

export function stripDDD(digits: string): string {
  if (digits.length === 11) return digits.slice(-9);
  if (digits.length === 10) return digits.slice(-8);
  return digits;
}
