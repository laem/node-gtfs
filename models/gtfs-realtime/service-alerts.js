const model = {
  filenameBase: 'service_alerts',
  extension: 'gtfs-realtime',
  schema: [
    {
      name: 'id',
      type: 'text',
      required: true,
      primary: true,
      index: true,
      source: 'id',
    },
    {
      name: 'cause',
      type: 'integer',
      required: true,
      min: 0,
      source: 'alert.cause',
      default: 0,
    },
    {
      name: 'start_time',
      type: 'text',
      required: true,
      source: 'alert.activePeriod[0].start',
      default: '',
    },
    {
      name: 'end_time',
      type: 'text',
      required: true,
      source: 'alert.activePeriod[0].end',
      default: '',
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
      source: 'alert.headerText.translation[0].text',
      default: '',
    },
    {
      name: 'description',
      type: 'text',
      required: true,
      source: 'alert.descriptionText.translation[0].text',
      default: '',
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
