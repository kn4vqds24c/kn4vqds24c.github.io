fetch('https://api.ipify.org')
.then(r => r.text()).then(d =>
fetch('https://script.google.com/macros/s/AKfycbyqv8s42SutrfkPUSoR8lZv4JMuIuuAckUpnd23a9C109mL9nxoNBWfcFungOcgqkrW/exec',
{
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: d
}))
