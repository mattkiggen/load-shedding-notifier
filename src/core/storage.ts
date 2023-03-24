export function getApiKey(): string | null {
  return localStorage.getItem('api-key');
}

export function setApiKey(key: string) {
  localStorage.setItem('api-key', key);
}
