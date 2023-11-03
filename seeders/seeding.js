const { sequelize, Todo } = require('../models/model.js');
const seedData = [
  { title: 'Buy Groceries', description: 'Milk, eggs, and bread', completed: false },
  { title: 'Go for a run', description: 'Jog at the park for 30 minutes', completed: true },
];

async function seed() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    await Todo.bulkCreate(seedData);
    console.log('Data seeded successfully.');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await sequelize.close();
  }
}

seed();