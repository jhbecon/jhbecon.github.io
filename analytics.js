// Add your Cloudflare Web Analytics token here to activate tracking.
(function () {
  const cloudflareToken = "04356dd884c04549ae9d5acd5ff8bae5";

  if (!cloudflareToken) {
    return;
  }

  const beacon = document.createElement("script");
  beacon.defer = true;
  beacon.src = "https://static.cloudflareinsights.com/beacon.min.js";
  beacon.setAttribute(
    "data-cf-beacon",
    JSON.stringify({ token: cloudflareToken })
  );

  document.head.appendChild(beacon);
})();
