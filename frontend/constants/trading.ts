import { Token, Fiat, PaymentMethod } from '@/types/trading'

export const TOKENS: Token[] = [
  { id: 1, name: 'USDT', icon: '💰', price: 750.50 },
  { id: 2, name: 'BTC', icon: '₿', price: 52000000.00 },
  { id: 3, name: 'ETH', icon: 'Ξ', price: 3200000.00 },
]

export const FIATS: Fiat[] = [
  { id: 1, name: 'NGN', icon: '₦' },
  { id: 2, name: 'USD', icon: '$' },
  { id: 3, name: 'EUR', icon: '€' },
]

export const PAYMENT_METHODS: PaymentMethod[] = [
  { id: 1, name: 'Bank Transfer', icon: '🏦' },
  { id: 2, name: 'Card Payment', icon: '💳' },
  { id: 3, name: 'Mobile Money', icon: '📱' },
]