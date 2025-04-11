import { TransactionMetrics } from './types.js';

export function generateReport(metrics: TransactionMetrics): string {
  const { balance, maxTransaction, counts } = metrics;

  if (!maxTransaction) {
    throw new Error('No hay transacciones para generar el reporte');
  }

  return `
Reporte de Transacciones
---------------------------------------------
Balance Final: ${balance.toFixed(2)}
Transacción de Mayor Monto: ID ${maxTransaction.id} - ${maxTransaction.monto.toFixed(2)}
Conteo de Transacciones: Crédito: ${counts['Crédito']} Débito: ${counts['Débito']}
    `.trim();
}