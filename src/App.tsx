import React from 'react';
import './App.css';

// Models ---------------------------------------

enum Currency {
  USD,
  GBP
}

interface Price {
  currency: Currency;
  amount: number;
}

interface Product {
  id: string;
  name: string;
  category: string;
  prices: Price[];
}

// Data -----------------------------------------

const product: Product = {
  id: 'b522a447-5e25-4ec3-923e-548abfaaa5ae',
  name: 'Fancy Lamp',
  category: 'Home Goods',
  prices: [
    {
      currency: Currency.USD,
      amount: 125.00
    },
    {
      currency: Currency.GBP,
      amount: 97.52
    }
  ]
};

const currencySymbols: Map<Currency, string> = new Map([
  [Currency.USD, '$'],
  [Currency.GBP, '£']
]);

// Components -----------------------------------

const ProductNameDisplay = ({ name, category }: { name: string, category: string }) => <span>{name} ({category})</span>;

const PriceDisplay = ({ currency, price }: { currency: Currency, price: number}) => {
  const symbol = currencySymbols.get(currency);

  return <span>{symbol}{price}</span>;
};

// Containers -----------------------------------

const ProductDisplay = ({ product }: { product: Product}) => {
  // Contrived logic
  const wantedCurrency = Currency.USD;
  const wantedPrice = product.prices.find((price: Price) => price.currency === wantedCurrency);

  return (
    <>
      <ProductNameDisplay
        name={product.name}
        category={product.category}
      />
      <span>: </span>
      <PriceDisplay
        currency={wantedPrice!.currency}
        price={wantedPrice!.amount}
      />
    {/* -- Other components -- */}
    </>
  );
}

// Root -----------------------------------------

export const App = () => <ProductDisplay product={product}/>;
