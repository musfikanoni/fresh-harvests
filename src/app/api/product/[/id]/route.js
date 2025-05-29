const res = await fetch("https://code-commando.com/api/v1/products", { cache: 'no-store' });
  const data = await res.json();
  const products = data.data || [];