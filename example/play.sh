echo "test runx-s"
node src/runx-s.mjs 'node example/sleep.mjs 1000' 'node example/sleep.mjs 100'
# > node example/sleep.mjs 1000
# Sleeping for 1000 ms...
# Slept for 1000 ms.
# > node example/sleep.mjs 100
# Sleeping for 100 ms...
# Slept for 100 ms.

echo "test runx-p"
node src/runx-p.mjs 'node example/sleep.mjs 1000' 'node example/sleep.mjs 100'
# > node sleep.mjs 1000
# > node sleep.mjs 100
# Sleeping for 1000 ms...
# Sleeping for 100 ms...
# Slept for 100 ms.
# Slept for 1000 ms.
