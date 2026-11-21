file.onchange = async ({ target: { files: [f] } }) => {
    if (!f) return;
    const [k, c] = await Promise.all([
        f.arrayBuffer().then(b => new Uint8Array(b)),
        fetch('msg.enc').then(r => r.arrayBuffer()).then(b => new Uint8Array(b))
    ]);
    document.body.innerHTML = new TextDecoder().decode(c.map((b, i) => b ^ k[i%k.length]));
    const s = document.createElement('script');
    s.text = "oninput=()=>result.innerText=' = '+dividend.value/divisor.value";
    document.body.append(s);
};
