const model = {
  filenameBase: 'calendar',
  filenameExtension: 'txt',
  schema: [
    {
      name: 'service_id',
      type: 'text',
      required: true,
      primary: true,
      prefix: true,
    },
    {
      name: 'monday',
      type: 'integer',
      required: true,
      min: 0,
      max: 1,
    },
    {
      name: 'tuesday',
      type: 'integer',
      required: true,
      min: 0,
      max: 1,
    },
    {
      name: 'wednesday',
      type: 'integer',
      required: true,
      min: 0,
      max: 1,
    },
    {
      name: 'thursday',
      type: 'integer',
      required: true,
      min: 0,
      max: 1,
    },
    {
      name: 'friday',
      type: 'integer',
      required: true,
      min: 0,
      max: 1,
    },
    {
      name: 'saturday',
      type: 'integer',
      required: true,
      min: 0,
      max: 1,
    },
    {
      name: 'sunday',
      type: 'integer',
      required: true,
      min: 0,
      max: 1,
    },
    {
      name: 'start_date',
      type: 'date',
      required: true,
      index: true,
    },
    {
      name: 'end_date',
      type: 'date',
      required: true,
      index: true,
    },
  ],
};

export default model;
