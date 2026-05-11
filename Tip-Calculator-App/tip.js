/**
 * Pure calculation function — no DOM access.
 * @param {number} billVal   - Total bill amount.
 * @param {number} peopleVal - Number of people splitting the bill.
 * @param {number} tipPct    - Tip percentage (e.g. 15 for 15%).
 * @returns {{ tipPerPerson: number, totalPerPerson: number } | null}
 */
export function calculateTip(billVal, peopleVal, tipPct) {
  if (billVal > 0 && peopleVal > 0) {
    const tipPerPerson = (billVal * (tipPct / 100)) / peopleVal;
    const totalPerPerson = billVal / peopleVal + tipPerPerson;
    return { tipPerPerson, totalPerPerson };
  }
  return null;
}
