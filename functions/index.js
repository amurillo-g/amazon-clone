const functions = require("firebase-functions/v1");
const express = require('express');
const cors = require('cors');
const { response } = require('express');
const stripe = require('stripe')('sk_test_51KgfTmD4jNvgaCFgYbcxEQJFGaGejPjmBN2sm0VaqeKpbJTYzlctDzPrZaYhv1Srn52VUFY0fwAfIWCxL3geLMRf00iDqe27cI');

app = express();

app.use(cors({ origin: true}));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello world'));

exports.api = functions.https.onRequest(app);