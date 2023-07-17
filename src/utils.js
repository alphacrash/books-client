import endpoints from "./config.json"

export default function getUrlFromConfig(key) {
  return endpoints[key];
}