const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (obj) => { console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, telefone: ${order.phoneNumber}, ${order.address.street}, N: ${order.address.number}, Apto: ${order.address.apartment}.`) };

const orderModifier = (obj) => {
  order.name = 'Claúdia Tavares';
  console.log(`Olá ${order.name}, o total do seu pedido de margherita, pepperoni e coke é: ${order.order.pizza.margherita.price + order.order.pizza.margherita.price + order.order.drinks.coke.price} com deconto de 10% é: ${(order.order.pizza.margherita.price + order.order.pizza.margherita.price + order.order.drinks.coke.price) / 0.10}`)
};
