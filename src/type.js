'use strict';

// Future Coder
new TypeIt('.home__title--strong', { loop: true, speed: 100 })
  .move(-12)
  .type('Amazing ')
  .pause(2000)
  .move(null, { to: 'END' })
  .delete()
  .pause(2000)
  .type('Front-end Engineer')
  .pause(2000)
  .delete()
  .go();
