module.exports = function(context, req) {
  const dreidelData = [
    {
      code: 'נ',
      name: 'Nun',
    },
    {
      code: 'ג',
      name: 'Gimmel',
    },
    {
      code: 'ה',
      name: 'Hay',
    },
    {
      code: 'ש',
      name: 'Shin',
    },
  ];

  console.log('invoked!');
  console.log('context', context);
  console.log('req', req);
  // context.log('invoked!');
  // context.log('context', context);
  // context.log('req', req);

  const dreidelIndex = Math.round(Math.random() * 4);

  console.log('dreidelIndex:', dreidelIndex);

  const dreidel = dreidelData[dreidelIndex];

  context.res = {
    status: 200,
    body: `${dreidel.code} - ${dreidel.name}`,
  };
  context.done();
};
