# Web Request Viewer

> Send a request to this server and it tells what your request look like.

## Use cases

It's hard to know the exact information of a request sent out from your code. The best and eaiset way is of course have a real server listening to your requests and reply with what information they can see from your request.

For example, if you are writing a web scrapying bot and you want to change your user-agent to hide this bot, how can you make sure the request sent indeed hides your user-agent?

Or if request headers contains any information that could leak your identity. 

What about you are using a VPN and you are unsure whether the VPN indeed hides your IP. You can send to request to this server and check the IP this server sees.

### VPN

Some VPN protocols like shadowsocks work in layer 4 (transport layer) in the 7-layer OSI model, some work in layer 3 (network layer). It feels the same in browsers. 

If you use terminal (`curl` command or `git`), VPNs like OpenVPN automatically handles the traffic for you. While VPNs using shadowsocks requires extra http/socks proxy configuration. 

If you are a hacker/pentester, how can you verify whether you hide your identity behind VPN successfully? Simply send a request to the request viewer server and compare with your real ip. It also returns the intermmediate routers' ip.

## Deployment

https://web-request-viewer.huakun.tech/
- Try this in browser first, then try postman

Display information of your web request. For debugging and development purpose.

For example, you can change your `user-agent` in header and check if it indeed works using this API.

## Available API Routes

- `/online`
- `/headers`
- `/ip`
- `/user-agent`
- `/cookies`
- `time`
