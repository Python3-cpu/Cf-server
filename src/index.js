export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/hello") {
      return new Response(JSON.stringify({
        status: "ok",
        msg: "Server Cloudflare dari GitHub berhasil!"
      }), { headers: { "Content-Type": "application/json" } });
    }

    if (url.pathname === "/run") {
      return new Response(JSON.stringify({
        status: "ok",
        msg: "Termux berhasil terhubung ke Worker!"
      }), { headers: { "Content-Type": "application/json" } });
    }

    return new Response("Not Found", { status: 404 });
  }
};
