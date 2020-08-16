# Save cssstats Action

A NodeJS script that runs a CSS stylesheet file through `cssstats` to get statistics on it. Some of those stats are then sent up to DynamoDB.

The main stats include:

- raw size / gzip size (in Kilobytes)
- unique colors
- unique font sizes
- unique widths / heights

## Usage

This is usually expected to be used with [aws-actions/configure-aws-credentials](https://github.com/aws-actions/configure-aws-credentials) to authenticate with an AWS account.

```yaml
steps:
  # ...
  - name: Configure AWS Credentials
    uses: aws-actions/configure-aws-credentials@v1
    with:
      aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
      aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
      aws-region: us-east-1
  - uses: lannonbr/save-css-stats-action@v1
    with:
      filepath: public/style.css
      dynamo-table-name: lannon-css-stats
```
