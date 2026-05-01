module.exports = (req, res) => {
  res.setHeader("Content-Type", "text/html");

  return res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://via.placeholder.com/600x400?text=Game+Started" />
        <meta property="fc:frame:button:1" content="Play Again" />
        <meta property="fc:frame:post_url" content="https://base-aviator.vercel.app/api/frame" />
      </head>
    </html>
  `);
};
