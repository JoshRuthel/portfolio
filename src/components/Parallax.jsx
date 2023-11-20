const parallaxDataAbout = [
  {
    start: 0,
    end: 500,
    properties: [
      { startValue: 0.01, endValue: 0.61875, property: 'scale' },
      { startValue: 0, endValue: 24.38125, property: 'translateY', unit: '%' },
      { startValue: 0, endValue: 2.982875, property: 'translateX', unit: '%' },
      { startValue: 0, endValue: 0.1, property: 'opacityFilter' },
    ],
  },
  {
    start: 500,
    end: 800,
    properties: [
      { startValue: 0.61875, endValue: 1, property: 'scale' },
      { startValue: 24.38125, endValue: 47, property: 'translateY', unit: '%' },
      {
        startValue: 2.982875,
        endValue: 4.9,
        property: 'translateX',
        unit: '%',
      },
      { startValue: 0.1, endValue: 1, property: 'opacityFilter' },
    ],
  },
  {
    start: 1435,
    end: 2200,
    properties: [
      {
        startValue: 4.9,
        endValue: 112.8,
        property: 'translateX',
        unit: '%',
        easing: 'easeOutCubic',
      },
    ],
  },
];

const parallaxDataLanding = [
  {
    start: 0,
    end: 800,
    properties: [
      { startValue: 1, endValue: 15, property: 'scale' },
      { startValue: 0, endValue: 47, property: 'translateY', unit: '%' },
      { startValue: 0, endValue: 110, property: 'translateX', unit: '%' },
    ],
  },
  {
    start: 0,
    end: 500,
    properties: [{ startValue: 1, endValue: 0, property: 'opacityFilter' }],
  },
  {
    start: 2325,
    end: 3500,
    properties: [
      { startValue: 0, endValue: 1, property: 'opacityFilter' },
      { startValue: 15, endValue: 1, property: 'scale' },
      { startValue: 47, endValue: 0, property: 'translateY', unit: '%' },
      { startValue: 20, endValue: 0, property: 'translateX', unit: '%' },
    ],
  },
  {
    start: 3700,
    end: 4200,
    properties: [
      { startValue: 1, endValue: 0.4, property: 'scale' },
      // { startValue: 0, endValue: -200, property: 'translateX', unit: '%' },
      { startValue: 0, endValue: 300, property: 'translateY' },
    ],
  },
  {
    start: 4200,
    end: 5000,
    properties: [
      { startValue: 0, endValue: 500, property: 'translateX', unit: '%' },
    ],
  },
];

const parallaxDataSkills = [
  {
    start: 0,
    end: 900,
    properties: [
      { startValue: 0, endValue: 1, property: 'opacityFilter' },
      { startValue: -160, endValue: -160, property: 'translateX', unit: '%' },
      { startValue: 5, endValue: 5, property: 'translateY', unit: '%' },
    ],
  },
  {
    start: 900,
    end: 2000,
    properties: [
      { startValue: -160, endValue: -5, property: 'translateX', unit: '%' },
      { startValue: 5, endValue: 5, property: 'translateY', unit: '%' },
    ],
  },
  {
    start: 2000,
    end: 2350,
    properties: [{ startValue: 1, endValue: 0.3, property: 'opcaityFilter' }],
  },
  {
    start: 2350,
    end: 2500,
    properties: [
      { startValue: 1, endValue: 0.01, property: 'scale' },
      { startValue: 0.3, endValue: 0, property: 'opacityFilter' },
    ],
  },
];

const parallaxDataProjects = [
  {
    start: 0,
    end: 3900,
    properties: [
      { startValue: -200, endValue: -200, property: 'translateX', unit: '%' },
      { startValue: 300, endValue: 300, property: 'translateY' },
      { startValue: 0.4, endValue: 0.4, property: 'scale' },
    ],
  },
  {
    start: 3900,
    end: 4260,
    properties: [
      { startValue: -200, endValue: 0, property: 'translateX', unit: '%' },
      { startValue: 300, endValue: 300, property: 'translateY' },
      { startValue: 0.4, endValue: 0.4, property: 'scale' },
    ],
  },
  {
    start: 4320,
    end: 5000,
    properties: [
      { startValue: 300, endValue: 100, property: 'translateY' },
      { startValue: 0.4, endValue: 1, property: 'scale' },
    ],
  },
];

const parallaxWorkCard = (start, end, index) => {
  const rot = index === 0 ? 0 : index % 2 === 0 ? 2.5 : -2.5;
  return [
    {
      start: 0,
      end: start,
      properties: [{ startValue: 0, endValue: 0, property: 'scale' }],
    },
    {
      start: start,
      end: end,
      properties: [
        {
          startValue: 500,
          endValue: -150,
          property: 'translateY',
        },
        { startValue: 0, endValue: rot, property: 'rotate' },
        { startValue: 1, endValue: 1, property: 'scale' },
      ],
    },
  ];
};

export const parallaxDataWork = [
  {
    start: 0,
    end: 5000,
    properties: [{ startValue: 0, endValue: 0, property: 'scale' }],
  },
  {
    start: 5000,
    end: 6200,
    properties: [
      { startValue: 0.5, endValue: 1, property: 'scale' },
      { startValue: 200, endValue: 0, property: 'translateY', unit: '%' },
      { startValue: 200, endValue: 0, property: 'translateX', unit: '%' },
    ],
  },
  {
    start: 7600,
    end: 8000,
    properties: [{ startValue: 1, endValue: 0, property: 'opacityFilter' }],
  },
];

const parallaxProjectCard = (index) => {
  const isEven = index % 2 === 0;
  return isEven
    ? [
        {
          start: 5300,
          end: 6300,
          properties: [
            {
              startValue: 0,
              endValue: -800,
              property: 'translateY',
            },
          ],
        },
      ]
    : [
        {
          start: 5300,
          end: 5900,
          properties: [
            {
              startValue: 0,
              endValue: -800,
              property: 'translateY',
            },
          ],
        },
      ];
};

const parallaxProjectHeading = [
  {
    start: 5400,
    end: 6000,
    properties: [{ startValue: 1, endValue: 0, property: 'opacityFilter' }],
  },
];

export const parallaxDataContact = [
  {
    start: 0,
    end: 8000,
    properties: [
      { startValue: 0, endValue: 0, property: 'opacity' },
      { startValue: 0, endValue: 0, property: 'scale' },
    ],
  },
  {
    start: 8000,
    end: 8600,
    properties: [
      { startValue: 0, endValue: 1, property: 'opacity' },
      { startValue: 1, endValue: 1, property: 'scale' },
    ],
  },
];

const parallaxDataNavbar = [
  {
    start: 0,
    end: 800,
    properties: [{ startValue: 0, endValue: 0, property: 'scale' }],
  },
  {
    start: 800,
    end: 2350,
    properties: [{ startValue: 1, endValue: 1, property: 'scale' }],
  },
  {
    start: 2350,
    end: 5000,
    properties: [{ startValue: 0, endValue: 0, property: 'scale' }],
  },
  {
    start: 5000,
    end: 5400,
    properties: [{ startValue: 1, endValue: 1, property: 'scale' }],
  },
  {
    start: 5400,
    end: 6300,
    properties: [{ startValue: 0, endValue: 0, property: 'scale' }],
  },
  {
    start: 6300,
    end: 8940,
    properties: [{ startValue: 1, endValue: 1, property: 'scale' }],
  },
];

export {
  parallaxDataAbout,
  parallaxDataLanding,
  parallaxDataSkills,
  parallaxDataProjects,
  parallaxWorkCard,
  parallaxProjectCard,
  parallaxProjectHeading,
  parallaxDataNavbar,
};
