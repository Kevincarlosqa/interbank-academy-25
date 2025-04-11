export interface Transaction {
  id: number;
  tipo: "Crédito" | "Débito";
  monto: number;
}

export interface TransactionMetrics {
  balance: number;
  maxTransaction: Transaction | null;
  counts: {
    Crédito: number;
    Débito: number;
  };
}
