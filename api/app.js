import express from 'express';
import cookieParser from 'cookie-parser';

import authRoute from './routes/auth.js';
import hotelsRoute from './routes/hotels.js';
import roomsRoute from './routes/rooms.js';
import usersRoute from './routes/users.js';

const app = express();
const port = 3000;

//Middlewares
app.use(cookieParser());
app.use(express.json());

//Routes
app.use('/api/auth', authRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);
app.use('/api/users', usersRoute);

//Error Handling
app.use((err, req, res) => {
	console.error(err);

	const status = err.status || 500;
	const message = err.message || 'Something went wrong!';
	res.status(status).json({
		success: false,
		message
	});
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
