import os
import zlib
import struct

def make_png(width, height, color_rgb, inner_symbol="square", text_color=(255,255,255)):
    # Simple PNG generator without external dependencies
    def chunk(tag, data):
        return struct.pack('>I', len(data)) + tag + data + struct.pack('>I', zlib.crc32(tag + data) & 0xffffffff)

    header = b'\x89PNG\r\n\x1a\n'
    ihdr = chunk(b'IHDR', struct.pack('>IIBBBBB', width, height, 8, 2, 0, 0, 0)) # 8-bit RGB
    
    raw = bytearray()
    r0, g0, b0 = color_rgb
    
    cx, cy = width // 2, height // 2
    for y in range(height):
        raw.append(0) # filter type 0
        for x in range(width):
            dx = x - cx
            dy = y - cy
            dist = (dx*dx + dy*dy)**0.5
            
            # Subtle gradient or inner icon highlight
            if inner_symbol == "circle" and dist < min(width, height)*0.38:
                # Golden/warm accent circle
                mix = max(0.0, min(1.0, 1.0 - (dist / (min(width, height)*0.38))))
                r = int(r0 * (1 - mix*0.3) + text_color[0] * mix*0.3)
                g = int(g0 * (1 - mix*0.3) + text_color[1] * mix*0.3)
                b = int(b0 * (1 - mix*0.3) + text_color[2] * mix*0.3)
            elif inner_symbol == "cup" and abs(dx) < width*0.25 and dy > -height*0.25 and dy < height*0.3:
                r, g, b = 217, 119, 6
            else:
                # Radial vignette
                factor = 1.0 - 0.25 * ((dx*dx + dy*dy) / (width*width + height*height))**0.5
                r = max(0, min(255, int(r0 * factor)))
                g = max(0, min(255, int(g0 * factor)))
                b = max(0, min(255, int(b0 * factor)))

            raw.extend([r, g, b])

    compressed = zlib.compress(bytes(raw))
    idat = chunk(b'IDAT', compressed)
    iend = chunk(b'IEND', b'')
    return header + ihdr + idat + iend

os.makedirs('public/assets/products', exist_ok=True)

# 1. logo.png (circular badge)
with open('public/assets/logo.png', 'wb') as f:
    f.write(make_png(240, 240, (247, 147, 30), "circle", (58, 26, 10)))

# 2. hero-bg.png (dark rustic chai background)
with open('public/assets/hero-bg.png', 'wb') as f:
    f.write(make_png(800, 600, (30, 14, 6), "square"))

# 3. hero-cup.png (kulhad cup)
with open('public/assets/hero-cup.png', 'wb') as f:
    f.write(make_png(400, 480, (180, 83, 9), "cup", (251, 191, 36)))

# 4. story-main.jpg
with open('public/assets/story-main.jpg', 'wb') as f:
    f.write(make_png(560, 420, (120, 53, 15), "square"))

# 5. story-pour.jpg
with open('public/assets/story-pour.jpg', 'wb') as f:
    f.write(make_png(300, 200, (146, 64, 14), "square"))

# 6. story-brass.jpg
with open('public/assets/story-brass.jpg', 'wb') as f:
    f.write(make_png(300, 200, (180, 83, 9), "square"))

# 7. stall.jpg
with open('public/assets/stall.jpg', 'wb') as f:
    f.write(make_png(500, 500, (67, 30, 15), "square"))

# 8. chai-cup.png
with open('public/assets/chai-cup.png', 'wb') as f:
    f.write(make_png(200, 200, (217, 119, 6), "cup"))

# 9. enquiry-cup.png
with open('public/assets/enquiry-cup.png', 'wb') as f:
    f.write(make_png(300, 300, (180, 83, 9), "cup"))

# 10. Products
products = [
    ('light-board.png', (234, 179, 8)),
    ('service-counter.png', (156, 163, 175)),
    ('peetal-patila.png', (202, 138, 4)),
    ('gas-regulator.png', (220, 38, 38)),
    ('thermos.png', (107, 114, 128)),
    ('trays.png', (37, 99, 235)),
    ('glass-cups.png', (147, 197, 253)),
    ('disposable-cups.png', (243, 244, 246)),
    ('laiter.png', (156, 163, 175)),
    ('chai-masala.png', (180, 83, 9)),
]

for filename, rgb in products:
    with open(f'public/assets/products/{filename}', 'wb') as f:
        f.write(make_png(200, 200, rgb, "circle"))

print("Assets generated successfully.")
