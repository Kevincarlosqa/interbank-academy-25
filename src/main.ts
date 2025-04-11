import { readTransactions } from './csvReader.js';
import { processTransactions } from './transactionProcessor.js';
import { generateReport } from './reportGenerator.js';

async function main(): Promise<void> {
  try {
    const filePath: string = process.argv[2] || './data/data.csv';

    const transactions = await readTransactions(filePath);

    const metrics = processTransactions(transactions);

    const report = generateReport(metrics);
    console.log(report);
  } catch (error) {
    console.error('Error:', (error as Error).message);
    process.exit(1);
  }
}

main();