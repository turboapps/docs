## requires

The `requires` instruction defines a build time requirement which should be enforced immediately. If the requirement cannot be satisfied, the build will fail.

```
requires <requirement>
```

See the `require` instruction for the list of supported requirements.

Example:
```
# Run TurboScript in elevated command prompt
requires privilege:admin
```
