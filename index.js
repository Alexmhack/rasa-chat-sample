const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const Chatkit = require('pusher-chatkit-server')
require('dotenv').config({ silent: true });

const app = express();

const chatkit = new Chatkit.default(require({
	instanceLocator: process.env.PUSHER_CHATKIT_INSTANCE_LOCATOR,
	key: process.env.PUSHER_CHATKIT_KEY
}))
