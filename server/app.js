const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cros-origin requests
app.use(cors());

//connect to database
mongoose.connect(
	'mongodb+srv://brock:brock123@graphql-ninja-o8gsb.mongodb.net/test?retryWrites=true&w=majority',
	{ useUnifiedTopology: true, useNewUrlParser: true }
);
mongoose.connection.once('open', () => {
	console.log('Connected to database');
});

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true,
	})
);

app.listen(4000, () => {
	console.log('Server started on http://localhost:4000');
	console.log('GraphiQL started on http://localhost:4000/graphql');
});
