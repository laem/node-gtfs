import config from './test-config.ts';
import { openDb, closeDb, importGtfs } from '../index.ts';

beforeAll(async () => {
  openDb(config);
  await importGtfs(config);
});

afterAll(() => {
  const db = openDb(config);
  closeDb(db);
});

describe('Raw Query:', () => {
  it('should DELETE a trip', () => {
    const db = openDb(config);

    const results = db.prepare('SELECT COUNT(*) FROM trips').get() as {
      'COUNT(*)': number;
    };

    expect(results['COUNT(*)']).toEqual(218);

    db.exec("DELETE FROM trips where trip_id = '329';");

    const newResults = db.prepare('SELECT COUNT(*) FROM trips').get() as {
      'COUNT(*)': number;
    };

    expect(newResults['COUNT(*)']).toEqual(217);
  });
});
