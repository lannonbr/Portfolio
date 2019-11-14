# LIFX Trigger Action

Trigger a LIFX bulb to change a color for a short period of time

## Required Environment variables

- `LIFX_TOKEN`: an access token For the LIFX API.
- `LIFX_BULB_ID`: The id of the light bulb you wish to trigger

## Usage

```yaml
on: push
jobs:
  run:
    runs-on: ubuntu-latest
    env:
      LIFX_TOKEN: ${{ secrets.LIFX_TOKEN }}
      LIFX_BULB_ID: ${{ secrets.LIFX_BULB_ID }}
    steps:
      - name: Do stuff
        run: echo do stuff
      - name: Trigger light to go green on success
        if: success()
        uses: .github/actions/lifx-trigger-action
        with:
          color: green
      - name: Trigger light to go red on failure
        if: failure()
        uses: .github/actions/lifx-trigger-action
        with:
          color: red
```
