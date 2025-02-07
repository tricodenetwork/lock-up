import { PaymentMethod } from '@/types/p2p';

export const CRYPTO_CURRENCIES = [
  { symbol: 'BTC', name: 'Bitcoin' },
  { symbol: 'ETH', name: 'Ethereum' },
  { symbol: 'USDT', name: 'Tether' },
];

export const FIAT_CURRENCIES = [
  { symbol: 'USD', name: 'US Dollar' },
  { symbol: 'EUR', name: 'Euro' },
  { symbol: 'GBP', name: 'British Pound' },
];

export const PAYMENT_METHODS: PaymentMethod[] = [
  { id: 'bank', name: 'Bank Transfer', icon: '🏦' },
  { id: 'card', name: 'Credit Card', icon: '💳' },
  { id: 'paypal', name: 'PayPal', icon: '📱' },
];