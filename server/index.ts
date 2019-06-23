import express from 'express';
import bodyParser from 'body-parser';
import consola from 'consola';
import cors from 'cors';
import crypto from 'crypto';

const port = process.env.SERVER_PORT || 3080;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use((req, _, next) => {
  const { url, query, body, headers } = req;
  consola.info(url, { headers, query, body });
  next();
});

app.post('/sign-in', (req, res) => {
  const { body } = req;
  const { password = '' } = body;

  if (password !== 'success') {
    res.status(400);
    res.json({
      code: 'mismatch',
      message: 'メールアドレスまたはパスワードが間違っています',
    });
  } else {
    res.json({ token: crypto.randomBytes(32).toString('hex') });
  }
});

app.all('*', (req, res) => {
  res.status(404);
  res.json({
    message: 'Not found',
  });
});

app.listen(port, () => {
  consola.success(`Server listen: http://localhost:${port}`);
});
