import { Transaction, TransactionMetrics } from './types.js';

export function processTransactions(transactions: Transaction[]): TransactionMetrics {
  let balance = 0;
  let maxTransaction: Transaction | null = null;
  const counts = { Crédito: 0, Débito: 0 };

  for (const tx of transactions) {
    balance += tx.tipo === 'Crédito' ? tx.monto : -tx.monto;
    counts[tx.tipo]++;
    if (!maxTransaction || tx.monto > maxTransaction.monto) {
      maxTransaction = tx;
    }
  }

  return {
    balance: parseFloat(balance.toFixed(2)),
    maxTransaction,
    counts,
  };
}