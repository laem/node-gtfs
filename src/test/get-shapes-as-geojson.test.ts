import config from './test-config.ts';
import { openDb, closeDb, importGtfs, getShapesAsGeoJSON } from '../index.ts';

beforeAll(async () => {
  openDb();
  await importGtfs(config);
});

afterAll(async () => {
  const db = openDb();
  closeDb(db);
});

describe('getShapesAsGeoJSON():', () => {
  it('should return geojson with an empty features array if no shapes exist', () => {
    const shapeId = 'fake-shape-id';
    const geojson = getShapesAsGeoJSON({
      shape_id: shapeId,
    });

    expect(geojson.type).toEqual('FeatureCollection');
    expect(geojson.features).toHaveLength(0);
  });

  it('should return geojson with shapes if they exist', () => {
    const geojson = getShapesAsGeoJSON();

    expect(geojson.type).toEqual('FeatureCollection');
    expect(geojson.features).toHaveLength(8);
    expect(
      (geojson.features[0].geometry as GeoJSON.LineString).coordinates,
    ).toHaveLength(381);
    expect(
      (geojson.features[0].geometry as GeoJSON.LineString).coordinates[0],
    ).toHaveLength(2);
    expect(geojson.features[0].properties?.route_color).toMatch(/^#/);
  });

  it('should return geojson with shapes for a specific routeId', () => {
    const routeId = 'Lo-16APR';

    const geojson = getShapesAsGeoJSON({
      route_id: routeId,
    });

    expect(geojson.type).toEqual('FeatureCollection');
    expect(geojson.features).toHaveLength(2);
    expect(
      (geojson.features[0].geometry as GeoJSON.LineString).coordinates,
    ).toHaveLength(556);
    expect(
      (geojson.features[0].geometry as GeoJSON.LineString).coordinates[0],
    ).toHaveLength(2);
    expect(geojson.features[0].properties?.route_color).toMatch(/^#/);
  });

  it('should return geojson with shapes for a specific routeId and directionId', () => {
    const routeId = 'Lo-16APR';
    const directionId = 0;

    const geojson = getShapesAsGeoJSON({
      route_id: routeId,
      direction_id: directionId,
    });

    expect(geojson.type).toEqual('FeatureCollection');
    expect(geojson.features).toHaveLength(2);
    expect(
      (geojson.features[0].geometry as GeoJSON.LineString).coordinates,
    ).toHaveLength(382);
    expect(
      (geojson.features[0].geometry as GeoJSON.LineString).coordinates[0],
    ).toHaveLength(2);
    expect(geojson.features[0].properties?.route_color).toMatch(/^#/);
  });

  it('should return geojson with shapes for a specific shapeId', () => {
    const shapeId = 'cal_sf_tam';

    const geojson = getShapesAsGeoJSON({
      shape_id: shapeId,
    });

    expect(geojson.type).toEqual('FeatureCollection');
    expect(geojson.features).toHaveLength(3);
    expect(
      (geojson.features[0].geometry as GeoJSON.LineString).coordinates,
    ).toHaveLength(401);
    expect(
      (geojson.features[0].geometry as GeoJSON.LineString).coordinates[0],
    ).toHaveLength(2);
    expect(geojson.features[0].properties?.route_color).toMatch(/^#/);
  });
});
