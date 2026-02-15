const https = require('https');
const fs = require('fs');

function get(url) {
    return new Promise((resolve, reject) => {
        const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }, timeout: 15000 }, res => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        });
        req.on('error', reject);
        req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
    });
}

async function main() {
    const pages = ['vdrf', 'vom', 'vof', 'vast', 'vswim', 'stoked'];

    for (const p of pages) {
        try {
            const html = await get('https://varanashi.com/' + p + '/');

            // Find ALL image references including data-src, background-image, srcset, etc.
            const patterns = [
                /src=["']([^"']*(?:jpg|jpeg|png|webp|gif)[^"']*)["']/gi,
                /data-src=["']([^"']*(?:jpg|jpeg|png|webp|gif)[^"']*)["']/gi,
                /data-lazy-src=["']([^"']*(?:jpg|jpeg|png|webp|gif)[^"']*)["']/gi,
                /data-bg=["']([^"']*(?:jpg|jpeg|png|webp|gif)[^"']*)["']/gi,
                /background-image:\s*url\(["']?([^"')]+(?:jpg|jpeg|png|webp|gif)[^"')]*)["']?\)/gi,
                /srcset=["']([^"']+)["']/gi,
                /data-srcset=["']([^"']+)["']/gi,
            ];

            const allImgs = new Set();
            for (const re of patterns) {
                let m;
                while ((m = re.exec(html)) !== null) {
                    // For srcset, split by comma and get each URL
                    if (re.source.includes('srcset')) {
                        m[1].split(',').forEach(part => {
                            const url = part.trim().split(/\s+/)[0];
                            if (url && !url.includes('Traced-Logo')) allImgs.add(url);
                        });
                    } else {
                        if (!m[1].includes('Traced-Logo')) allImgs.add(m[1]);
                    }
                }
            }

            fs.appendFileSync('suborg_deep.txt', '=== ' + p.toUpperCase() + ' ===\n');
            [...allImgs].forEach(u => fs.appendFileSync('suborg_deep.txt', '  ' + u + '\n'));
            fs.appendFileSync('suborg_deep.txt', '\n');

        } catch (e) {
            fs.appendFileSync('suborg_deep.txt', '=== ' + p.toUpperCase() + ' ERROR: ' + e.message + ' ===\n\n');
        }
    }

    console.log('Done!');
}

// Clear file first
fs.writeFileSync('suborg_deep.txt', '');
main();
