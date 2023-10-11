import express from 'express';
import { InfluxDB } from '@influxdata/influxdb-client';
import cors from 'cors';

const app = express();

app.use(cors());

const token = 'VAeco9wib14EQmYuMv5hGUQtlYBiJILwYVT0x-YVGoNeKueZSh-eUYXCFaFLMpKVcdiJ9UGNRT6QX7fGLCnZ7w==';
const org = 'City of Things';
const bucket = 'Kortrijk Weide';

const client = new InfluxDB({
  url: 'http://howest-energy-monitoring.westeurope.cloudapp.azure.com:8086',
  token: token,
});
const queryApi = client.getQueryApi(org);

app.get('/api/query', (req, res) => {
  const query = `from(bucket: "${bucket}") |> range(start: -1h)`;
  const results = [];

  queryApi.queryRows(query, {
    next(row, tableMeta) {
      const o = tableMeta.toObject(row);
      results.push(`${o._time} ${o._measurement}: ${o._field}=${o._value}`);
    },
    error(error) {
      console.error(error);
      res.status(500).json({ error: 'Error querying InfluxDB' });
    },
    complete() {
      res.json(results);
    },
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
