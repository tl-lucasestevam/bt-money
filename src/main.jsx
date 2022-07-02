import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Website Freelance',
          createAt: new Date(),
          category: 'dev',
          amount: 4000,
          type: 'deposit',
        },
        {
          id: 2,
          title: 'Supermercado',
          createAt: new Date(),
          category: 'Compras',
          amount: 300,
          type: 'withdraw',
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, data) => {
      const dados = JSON.parse(data.requestBody);

      return schema.create('transaction', data);
    });

    this.namespace = '';
    this.passthrough();
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
