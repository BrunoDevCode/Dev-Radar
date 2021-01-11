import { Schema, model } from 'mongoose';
import { S3 } from 'aws-sdk';
import fs from 'fs';
import { resolve } from 'path';
import { promisify } from 'util';
import { APP_URL, STORAGE_TYPE, BUCKET_NAME } from '../config/env';

const s3 = new S3();

const PostSchema = new Schema({
  name: String,
  size: Number,
  key: String,
  url: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

PostSchema.pre('save', function () {
  if (!this.url) this.url = `${APP_URL}/files/${this.key}`;
});

PostSchema.pre('remove', function () {
  if (STORAGE_TYPE === 's3') {
    return s3
      .deleteObject({
        Bucket: BUCKET_NAME,
        key: this.key,
      })
      .promise()
      .then((response) => {
        console.log(`> ${response.status}`);
      })
      .catch((response) => {
        console.log(`> ${response.status}`);
      });
  }
  return promisify(fs.unlink)(
    resolve(__dirname, '..', '..', 'tmp', 'uploads', this.key),
  );
});

export default model('Post', PostSchema);
