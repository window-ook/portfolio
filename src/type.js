'use strict';

// Future Coder
new TypeIt('.home__title--strong', { loop: true, speed: 100 })
  .move(-12)
  .type('성장하는 ')
  .pause(2000)
  .move(null, { to: 'END' })
  .delete()
  .pause(2000)
  .type('프론트엔드 엔지니어')
  .pause(2000)
  .delete()
  .go();
