import mongoose from 'mongoose';

mongoose.connect(`mongo "mongodb+${process.env.MONGODB_URL}" --username ${process.env.MONGODB_USERNAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});