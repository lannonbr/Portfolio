# Save cssstats Action

A NodeJS script that runs the final `style.css` file through `cssstats` to get statistics on it. Some of those stats are then sent up to DynamoDB.

The main stats include:

- raw size / gzip size (in Kilobytes)
- unique colors
- unique font sizes
- unique widths / heights
