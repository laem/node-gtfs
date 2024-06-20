const model = {
  filenameBase: 'trip_updates',
  extension: 'gtfs-realtime',
  schema: [
    {
      name: 'update_id',
      type: 'text',
      required: true,
      primary: true,
      index: true,
      source: 'id',
    },
    {
      name: 'vehicle_id',
      type: 'text',
      index: true,
      source: 'tripUpdate.vehicle.id',
      default: null,
    },
    {
      name: 'trip_id',
      type: 'text',
      index: true,
      source: 'tripUpdate.trip.tripId',
      default: null,
    },
    {
      name: 'trip_start_time',
      type: 'text',
      source: 'tripUpdate.trip.startTime',
      default: null,
    },
    {
      name: 'direction_id',
      type: 'integer',
      source: 'tripUpdate.trip.directionId',
      default: null,
    },
    {
      name: 'route_id',
      type: 'text',
      index: true,
      source: 'tripUpdate.trip.routeId',
      default: null,
    },
    {
      name: 'start_date',
      type: 'text',
      source: 'tripUpdate.trip.startDate',
      default: null,
    },
    {
      name: 'timestamp',
      type: 'text',
      source: 'tripUpdate.timestamp',
      default: null,
    },
    {
      name: 'schedule_relationship',
      type: 'text',
      source: 'tripUpdate.trip.scheduleRelationship',
      default: null,
    },
    {
      name: 'created_timestamp',
      type: 'integer',
      required: true,
    },
    {
      name: 'expiration_timestamp',
      type: 'integer',
      required: true,
    },
  ],
};

export default model;
