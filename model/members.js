'use strict';

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const MembersSchema = new Schema({
  name: String
});

export default mongoose.model('Members', MembersSchema);
