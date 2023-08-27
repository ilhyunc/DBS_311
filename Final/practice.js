db.CARS.find ({
  'Color': { $in: ['Blue', 'Silver'] }
});
- CARS 컬렉션에서 Color필드가 Blue 또는 Silver인거.