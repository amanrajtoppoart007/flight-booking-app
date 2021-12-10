const flights = [
  {
    id: 'flight-list-id-one',
    airwaysName: 'Qatar AirWays',
    isSelected: true,
  },
  {
    id: 'flight-list-id-two',
    airwaysName: 'Qatar AirWays',
    isSelected: false,
  },
  {
    id: 'flight-list-id-three',
    airwaysName: 'Qatar AirWays',
    isSelected: false,
  },
];

const flightRoutes = [
  {
    from: 'DOH',
    to: 'DXB',
    flights: flights,
  },
  {
    from: 'DXB',
    to: 'LHR',
    flights: flights,
  },
  {
    from: 'LHR',
    to: 'DOH',
    flights: flights,
  },
];

export default flightRoutes;
