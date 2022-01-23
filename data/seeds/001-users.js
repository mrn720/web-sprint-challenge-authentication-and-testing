exports.seed = function(knex, Promise) {
    return knex('users')
      .truncate()
      .then(function() {
        return knex('users').insert([
          { username: 'Matt', password: '1234'},
          { username: 'Kyle', password: '4321'},
          { username: 'Jane', password: '1324'},
          { username: 'Kenny', password: '1423'},
        ]);
      });
  };