import fs from 'fs/promises';
import { parse } from 'csv-parse/sync';
import { Transaction } from './types.js';

export async function readTransactions(filePath: string): Promise<Transaction[]> {
  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');

    const records: Transaction[] = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
      cast: (value, context) => {
        if (context.column === 'monto') return parseFloat(value);
        if (context.column === 'id') return parseInt(value);
        return value;
      },
    });

    for (const record of records) {
      if (!record.id || !record.tipo || record.monto === undefined) {
        throw new Error('Estructura invalida de CSV');
      }
      if (!['Crédito', 'Débito'].includes(record.tipo)) {
        throw new Error(`Tipo de transacción inválido: ${record.tipo}`);
      }
      if (isNaN(record.monto)) {
        throw new Error(`Monto inválido para la transacción ${record.id}`);
      }
    }

    return records;
  } catch (error) {
    throw new Error(`Fallo al leer transacciones: ${(error as Error).message}`);
  }
}