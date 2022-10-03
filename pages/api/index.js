// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { google } from "googleapis";

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  const client = new google.auth.JWT(
    process.env.CLIENT_EMAIL,
    null,
    `-----BEGIN PRIVATE KEY-----\n${process.env.PART1}\n${process.env.PART2}\n7BYMlYzYq2RzcID5zqq8jv+yRo2+LxnGigBZzU2cafKcOgxpRh7vXH9UuvSfd7Ct\n9fWbA/poLsH5b//KvLqgjwl0e6cpBHM8pkWOvNHV9LmkXx+AfcYrr0durt7SU0n7\n61DpVDGvARvXy6aAt9jLqm+mZXxzUroNRfIFW49XI4Rj5iNLk0a34s1wd4mwHzzt\nTPYy+do0asgo29bNaGY/+PdrwLAmGwwUh+8q1lBbaYqpyxXRW2hj5FNNiss2s4jA\n${process.env.PART3}\nZOe7xecXHVGwrVh+tMKTvb/WhCkCOkmUBUqEYn/Gpi4OLEhfkKs5eWMmaTEybZts\ntTZI1slHax7QVflCLWNhcWvnSr1t2focx4YOlPNo36Ehrubeh082zoC1oQ8NY0Cf\n+ZHg9z5/Z0ZKMpwpa50Ldu31WsNMxaq3ZUAWxu4uLYu1xMMIrC2KB8D8/9Xl9S6/\njIid//Md9CLCWuOAEEGL4+P8ReEPfErAGx4mCCZ3tkDzFhXG80yU1neHu+BOGBJW\n0Wa6XKUzzEQHp+gREhCrPeUseAYSRqv7QY/DqUOOyQKBgQC8q72gd5zA8h+3Meni\ng7tlEHOTEIWoqZZ5h5pho3xY1zdn8sRYbnxYVZWBia0pZPAaRqp13JHEHyau4nUy\nTfqicrZUCH5fVXSdCIgmUVbGI+IkuSKXeCUyTkn5xb8RGmd64E+wJpoVYrzAEbqF\nTls9EKLGJaePQ13urZJYeOszMwKBgQC3kmkZBkehpsBks01d6aEDjROwoUGYv1t6\nqvqvL1gBirE4d50+2pNwUhh/5VPvjGtza6hVI/ogS3C55qtvXK8hFC5lxfNMPdo3\nCo0posA5VkFubXRcHIqVfrithgQjSVa0/TXf0P5g9USBCLtZF8OW++7rCMELM559\n6TypTSjmBQKBgBgi4F9m7ebBEs2c1Q7lS1PihuaJdo/dIiLp9hYHlCDJZ40kwXmO\nqNmkGTw5IK3q+8xgve3WCc/NLGWzEsscrrOZeTnG3GPVytVMAh7kyPUQIh4QkRxP\ngnKtEUmiwo6tkg9mIsumJJAX0Y3AttvW6lUli61No+Hv/FRMYCxxS6WBAoGAM96k\n37NMjjql5k5bsAuRuYUlaSVHebeoS5MAXnvMLDNaPBBgWCA+xOANmCXef7N3sRdc\nayJNTM7EPWMWUdMokPo42f0C8CoR/Ld4h6k7E3hx6Jf45wYRiohR+oYBqU7RtzZN\nAL73AcKL5sHm3he+5mytZ7ADi/y77ev3fgcVZVkCgYAbxcDLk1nUuAWvSBGEaQQX\nrzxSRwQ9t+ce03c9p5zgrCkPxwMFz8w+Eh83/q6nHBeEWF2JQLdl2qGBNMTOYAAe\nuV4zAiYcoKIVQ+F9YH6yuYFSWdacm8SSJPJlrIWwUW0OKsQfgC0FBwcw4a1NWZfx\nc1GxYoEQgZs5K/UJpCZKpQ==\n-----END PRIVATE KEY-----\n`,
    ["https://www.googleapis.com/auth/spreadsheets"]
  );

  client.authorize(async function (err, tokens) {
    if (err) {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
      return res.status(400).send(JSON.stringify({ error: true }));
    }

    const gsapi = google.sheets({ version: "v4", auth: client });

    //CUSTOMIZATION FROM HERE
    const opt = {
      spreadsheetId: process.env.SHEET_ID,
      range: "Sheet1!B1:B4",
    };

    let data = await gsapi.spreadsheets.values.get(opt);
    return res
      .status(200)
      .send(JSON.stringify({ error: false, data: data.data.values }));
  });
}
