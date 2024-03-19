import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/routes';

const PORT = 4000;
const app = express();
app.use(express.json());
app.use(cors());

const MONGO_URL = 'mongodb+srv://tech:OGcs7Kt7eeM6yUpI@cluster.bybg8x2.mongodb.net';
// mongodb+srv://tech:OGcs7Kt7eeM6yUpI@cluster.bybg8x2.mongodb.net/
// OGcs7Kt7eeM6yUpI
// user: tech
// DATA API Key: dy73j8CArgpMXvCcypFgkfYVaFacPdSLt6szFvW7CXiaNvLbP1cZmfvl7mSofbrz
mongoose
  .connect(MONGO_URL, {
    dbName: 'mailbox',
  })
  .then(() => {
    console.log('Database connected...');
  })
  .catch((error) => {
    console.log('error : ', error);
  });

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server running on http:://localhost:${PORT}`);
});