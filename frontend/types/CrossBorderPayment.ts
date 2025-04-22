export type CrossBorderPayment = {
    id: number;
    creator: string;
    in: Transaction;
    out: Transaction;
    completed: boolean;
    failed: boolean;
    created: number;
    amount_in_sui: number;
};

export type Transaction = {
    id?: number;
    sender: string | null;
    receiver: string | null;
    started: number | null;
    finished: number | null;
    currency: string;
    amount_in_fiat: number;
    sent: boolean;
    received: boolean;
    symbol:string
    flag:any
};