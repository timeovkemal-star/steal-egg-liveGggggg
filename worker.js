export default {
  async fetch(request) {
    const url = "https://stealegg.com/en/live/";
    const response = await fetch(url);

    return new Response(await response.text(), {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
};
