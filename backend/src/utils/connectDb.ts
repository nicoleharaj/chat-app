import mongoose from 'mongoose';
import config from 'config';
import log from './logger';
const connectDb = async () => {
  const dbUri = config.get<string>('dbUri');

  try {
    await mongoose.connect(dbUri);
    log.info('Connected to database');
  } catch (e: any) {
    process.exit(1);
  }
};

export default connectDb;
