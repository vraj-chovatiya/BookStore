import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
const URL = process.env.MongoDBURI;

// middleware
app.use(cors());
app.use(bodyParser.json());

// connect to mongodb
try {
    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
} catch (err) {
    console.log(`Error: ${err.message}`);
}

// User schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true });


// User model
const User = mongoose.model('user', userSchema);


// Routes
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Registration failed' });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        if (password !== user.password) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'User logged in successfullt', user: { name: user.name, email: user.email } });;

    } catch (err) {
        console.log("Error", err);
        res.status(500).json({ error: 'Login failed' });
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});